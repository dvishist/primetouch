import { Stack, Title, Text, Card, Group, Divider, Checkbox, Badge } from "@mantine/core";
import { BookingFormData, ContactPreference } from "@/types/booking";
import { bookingOptions } from "@/data/bookingOptions";

interface BookingSummaryStepProps {
	formData: BookingFormData;
	onContactPreferencesChange: (preferences: ContactPreference[]) => void;
}

export default function BookingSummaryStep({
	formData,
	onContactPreferencesChange
}: BookingSummaryStepProps) {
	const {
		bookingType,
		duration,
		bookingPeriod,
		cleanLevel,
		customerDetails,
		contactPreferences,
		selectedAddons,
		preferredDate,
		preferredTime,
		bathrooms,
		toilets,
		beds
	} = formData;

	const bookingName = bookingOptions.find(option => option.id === bookingType)?.name;
	const selectedOption = bookingOptions.find(option => option.id === bookingType);

	// Format date for display
	const formatDate = (date: Date | null) => {
		if (!date) return "Not selected";
		return date.toLocaleDateString("en-US", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric"
		});
	};

	// Format time for display
	const formatTime = (time: string | null) => {
		if (!time) return "Not selected";
		switch (time) {
			case "morning":
				return "Morning";
			case "afternoon":
				return "Afternoon";
			case "evening":
				return "Evening";
			default:
				return "Not selected";
		}
	};

	// Calculate pricing
	const calculatePrice = () => {
		if (!selectedOption || !bookingPeriod || !duration) return null;

		// Find the price for the selected period
		const pricing = selectedOption.pricing.find(p => p.period === bookingPeriod);
		if (!pricing) return null;

		const minHours = pricing.minHours || 1;

		// Use deep clean pricing if available, otherwise use standard pricing
		const hourlyRate =
			cleanLevel === "deep" && pricing.deepCleanPricePerHour
				? pricing.deepCleanPricePerHour
				: pricing.pricePerHour;
		const additionalRate =
			cleanLevel === "deep" && pricing.deepCleanAdditionalHourPrice
				? pricing.deepCleanAdditionalHourPrice
				: pricing.additionalHourPrice || pricing.pricePerHour;

		let basePrice = 0;
		if (duration <= minHours) {
			// Within minimum hours
			basePrice = hourlyRate * minHours;
		} else {
			// Base price + additional hours
			const additionalHours = duration - minHours;
			basePrice = hourlyRate * minHours + additionalRate * additionalHours;
		}

		// Calculate add-ons total
		const addonsTotal = selectedAddons.reduce((total, addonId) => {
			const addon = selectedOption.addons?.find(a => a.id === addonId);
			return total + (addon?.price || 0);
		}, 0);

		// Calculate end-of-lease extras (bathrooms and toilets)
		let endOfLeaseExtras = 0;
		if (bookingType === "end-of-lease") {
			endOfLeaseExtras = (bathrooms || 0) * 30 + (toilets || 0) * 10;
		}

		// Calculate airbnb extras (beds)
		let airbnbExtras = 0;
		if (bookingType === "airbnb") {
			airbnbExtras = (beds || 0) * 15;
		}

		return {
			basePrice: Math.round(basePrice),
			addonsTotal,
			endOfLeaseExtras,
			airbnbExtras,
			total: Math.round(basePrice) + addonsTotal + endOfLeaseExtras + airbnbExtras
		};
	};

	const priceBreakdown = calculatePrice();

	// Get pricing details for display
	const getPricingDetails = () => {
		if (!selectedOption || !bookingPeriod || !duration) return null;

		const pricing = selectedOption.pricing.find(p => p.period === bookingPeriod);
		if (!pricing) return null;

		// End-of-lease has fixed pricing, not hourly
		if (bookingType === "end-of-lease") {
			return {
				calculation: `Fixed price`,
				rate: pricing.pricePerHour,
				hours: 1
			};
		}

		const minHours = pricing.minHours || 1;
		const hourlyRate =
			cleanLevel === "deep" && pricing.deepCleanPricePerHour
				? pricing.deepCleanPricePerHour
				: pricing.pricePerHour;
		const additionalRate =
			cleanLevel === "deep" && pricing.deepCleanAdditionalHourPrice
				? pricing.deepCleanAdditionalHourPrice
				: pricing.additionalHourPrice || pricing.pricePerHour;

		if (duration <= minHours) {
			return {
				calculation: `$${hourlyRate} × ${minHours} hours (minimum)`,
				rate: hourlyRate,
				hours: minHours
			};
		} else {
			const additionalHours = duration - minHours;
			return {
				calculation: `($${hourlyRate} × ${minHours}) + ($${additionalRate} × ${additionalHours})`,
				rate: hourlyRate,
				hours: duration
			};
		}
	};

	const pricingDetails = getPricingDetails();

	return (
		<Stack gap="lg" mt="md">
			<Card withBorder padding="lg" radius="md">
				<Title order={4} mb="md">
					Service Details
				</Title>
				<Stack gap="xs">
					<Group justify="start">
						<Text fw={500} c="dimmed">
							Service Type:
						</Text>
						<Text tt="capitalize">{bookingName || "Not selected"}</Text>
					</Group>
					{bookingType !== "end-of-lease" && (
						<Group justify="start">
							<Text fw={500} c="dimmed">
								Duration:
							</Text>
							<Text>{duration ? `${duration} hours` : "Not selected"}</Text>
						</Group>
					)}
					<Group justify="start">
						<Text fw={500} c="dimmed">
							Booking Period:
						</Text>
						<Text tt="capitalize">{bookingPeriod || "Not selected"}</Text>
					</Group>
					<Group justify="start">
						<Text fw={500} c="dimmed">
							Preferred Date:
						</Text>
						<Text>{formatDate(preferredDate)}</Text>
					</Group>
					<Group justify="start">
						<Text fw={500} c="dimmed">
							Preferred Time:
						</Text>
						<Text>{formatTime(preferredTime)}</Text>
					</Group>
					{selectedOption?.supportsCleanLevel && cleanLevel && (
						<Group justify="start">
							<Text fw={500} c="dimmed">
								Clean Level:
							</Text>
							<Text tt="capitalize">{cleanLevel === "standard" ? "Standard" : "Deep Clean"}</Text>
						</Group>
					)}
					{bookingType === "end-of-lease" && (bathrooms || 0) > 0 && (
						<Group justify="start">
							<Text fw={500} c="dimmed">
								Extra Bathrooms:
							</Text>
							<Text>{bathrooms}</Text>
						</Group>
					)}
					{bookingType === "end-of-lease" && (toilets || 0) > 0 && (
						<Group justify="start">
							<Text fw={500} c="dimmed">
								Extra Toilets:
							</Text>
							<Text>{toilets}</Text>
						</Group>
					)}
					{bookingType === "airbnb" && (beds || 0) > 0 && (
						<Group justify="start">
							<Text fw={500} c="dimmed">
								Extra Beds:
							</Text>
							<Text>{beds}</Text>
						</Group>
					)}
					{selectedAddons.length > 0 && (
						<>
							<Divider my="xs" />
							<div>
								<Text fw={500} mb="xs">
									Add-Ons:
								</Text>
								<Stack gap="xs">
									{selectedAddons.map(addonId => {
										const addon = selectedOption?.addons?.find(a => a.id === addonId);
										return addon ? (
											<Group key={addonId} justify="space-between">
												<Text size="sm">{addon.name}</Text>
												<Badge color="green" variant="light">
													${addon.price}
												</Badge>
											</Group>
										) : null;
									})}
								</Stack>
							</div>
						</>
					)}
				</Stack>
			</Card>

			{priceBreakdown && (
				<Card withBorder padding="lg" radius="md" bg="blue.0">
					<Title order={4} mb="md">
						Price Summary
						<p className="text-sm text-gray-400">(Pay after service)</p>
					</Title>
					<Stack gap="xs">
						<Group justify="space-between">
							<Text fw={500}>Base Service:</Text>
							<Text>${priceBreakdown.basePrice}</Text>
						</Group>
						{pricingDetails && (
							<Text size="xs" c="dimmed" ml="md">
								{pricingDetails.calculation}
							</Text>
						)}
						{cleanLevel === "deep" && (
							<Text size="xs" c="dimmed" ml="md">
								(deep clean pricing applied)
							</Text>
						)}
						{priceBreakdown.addonsTotal > 0 && (
							<Group justify="space-between">
								<Text fw={500}>Add-Ons:</Text>
								<Text>${priceBreakdown.addonsTotal}</Text>
							</Group>
						)}
						{priceBreakdown.endOfLeaseExtras > 0 && (
							<Group justify="space-between">
								<Text fw={500}>Extra Bathrooms & Toilets:</Text>
								<Text>${priceBreakdown.endOfLeaseExtras}</Text>
							</Group>
						)}
						{priceBreakdown.airbnbExtras > 0 && (
							<Group justify="space-between">
								<Text fw={500}>Extra Beds:</Text>
								<Text>${priceBreakdown.airbnbExtras}</Text>
							</Group>
						)}
						<Divider my="xs" />
						<Group justify="space-between">
							<Text size="xl" fw={700}>
								Total:
							</Text>
							<Text size="xl" fw={700} c="blue">
								${priceBreakdown.total}
							</Text>
						</Group>
					</Stack>
				</Card>
			)}

			<Card withBorder padding="lg" radius="md">
				<Title order={4} mb="md">
					Customer Information
				</Title>
				<Stack gap="xs">
					<Group justify="start">
						<Text fw={500} c="dimmed">
							Name:
						</Text>
						<Text>
							{customerDetails.firstName} {customerDetails.lastName}
						</Text>
					</Group>
					<Group justify="start">
						<Text fw={500} c="dimmed">
							Email:
						</Text>
						<Text>{customerDetails.email}</Text>
					</Group>
					<Group justify="start">
						<Text fw={500} c="dimmed">
							Phone:
						</Text>
						<Text>{customerDetails.phone}</Text>
					</Group>
					<Divider my="xs" />
					<Group justify="start" align="flex-start">
						<Text fw={500} c="dimmed">
							Address:
						</Text>
						<Text ta="right" style={{ maxWidth: "60%" }}>
							{customerDetails.address}
							{customerDetails.city && `, ${customerDetails.city}`}
							{customerDetails.postalCode && ` ${customerDetails.postalCode}`}
						</Text>
					</Group>
					{customerDetails.notes && (
						<>
							<Divider my="xs" />
							<div>
								<Text fw={500} mb="xs">
									Notes:
								</Text>
								<Text c="dimmed">{customerDetails.notes}</Text>
							</div>
						</>
					)}
				</Stack>
			</Card>

			<Card withBorder padding="lg" radius="md">
				<Title order={4} mb="md">
					Contact Preference
				</Title>
				<Text size="sm" c="dimmed" mb="md">
					How would you like us to contact you?
				</Text>
				<div className="flex gap-3">
					<Checkbox
						label="Call"
						checked={contactPreferences.includes("call")}
						onChange={e => {
							const newPreferences = e.currentTarget.checked
								? ([...contactPreferences, "call"] as ContactPreference[])
								: contactPreferences.filter(p => p !== "call");
							onContactPreferencesChange(newPreferences);
						}}
					/>
					<Checkbox
						label="SMS"
						checked={contactPreferences.includes("sms")}
						onChange={e => {
							const newPreferences = e.currentTarget.checked
								? ([...contactPreferences, "sms"] as ContactPreference[])
								: contactPreferences.filter(p => p !== "sms");
							onContactPreferencesChange(newPreferences);
						}}
					/>
					<Checkbox
						label="Email"
						checked={contactPreferences.includes("email")}
						onChange={e => {
							const newPreferences = e.currentTarget.checked
								? ([...contactPreferences, "email"] as ContactPreference[])
								: contactPreferences.filter(p => p !== "email");
							onContactPreferencesChange(newPreferences);
						}}
					/>
				</div>
			</Card>
		</Stack>
	);
}
