// Shared price calculation utility for booking steps
export interface PriceCalculatorArgs {
	selectedOption: any;
	selectedPeriod: any;
	selectedDuration: any;
	selectedCleanLevel: any;
	selectedAddons: any;
	bathrooms: number;
	toilets: number;
	bookingType: string;
}

export function calculatePrice({
	selectedOption,
	selectedPeriod,
	selectedDuration,
	selectedCleanLevel,
	selectedAddons,
	bathrooms,
	toilets,
	bookingType
}: PriceCalculatorArgs) {
	if (!selectedOption || !selectedPeriod || !selectedDuration) return null;
	const pricing = selectedOption.pricing.find((p: any) => p.period === selectedPeriod);
	if (!pricing) return null;
	const minHours = pricing.minHours || 1;
	const cleanLevel = selectedCleanLevel;
	const hourlyRate =
		cleanLevel === "deep" && pricing.deepCleanPricePerHour
			? pricing.deepCleanPricePerHour
			: pricing.pricePerHour;
	const additionalRate =
		cleanLevel === "deep" && pricing.deepCleanAdditionalHourPrice
			? pricing.deepCleanAdditionalHourPrice
			: pricing.additionalHourPrice || pricing.pricePerHour;
	let basePrice = 0;
	if (selectedDuration <= minHours) {
		basePrice = hourlyRate * minHours;
	} else {
		const additionalHours = selectedDuration - minHours;
		basePrice = hourlyRate * minHours + additionalRate * additionalHours;
	}
	// If once-off and deep clean, addons are free
	const isOnceOffDeep = selectedOption.id === "once-off" && selectedCleanLevel === "deep";
	const addonsTotal = selectedAddons.reduce((total: number, addonId: string) => {
		const addon = selectedOption.addons?.find((a: any) => a.id === addonId);
		// If once-off deep, price is 0
		return total + (isOnceOffDeep ? 0 : addon?.price || 0);
	}, 0);
	let endOfLeaseExtras = 0;
	if (bookingType === "end-of-lease") {
		endOfLeaseExtras = (bathrooms || 0) * 30 + (toilets || 0) * 10;
	}
	return {
		basePrice: Math.round(basePrice),
		addonsTotal,
		endOfLeaseExtras,
		total: Math.round(basePrice) + (isOnceOffDeep ? 0 : addonsTotal) + endOfLeaseExtras
	};
}
