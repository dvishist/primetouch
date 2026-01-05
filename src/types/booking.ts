export type BookingType =
	| "regular"
	| "deep-cleaning"
	| "end-of-lease"
	| "commercial"
	| "once-off"
	| "airbnb";

export type BookingPeriod = "once-off" | "weekly" | "fortnightly" | "monthly";

export interface BookingPricing {
	period: BookingPeriod;
	pricePerHour: number;
	additionalHourPrice?: number;
	minHours?: number;
}

export interface BookingOption {
	id: BookingType;
	name: string;
	description: string;
	features: string[];
	pricing: BookingPricing[];
	bookingPeriods: BookingPeriod[];
}

export interface DurationOption {
	hours: number;
	label: string;
}

export interface BookingFormData {
	bookingType: BookingType | null;
	bookingPeriod: BookingPeriod | null;
	duration: number | null;
	customerDetails: {
		firstName: string;
		lastName: string;
		email: string;
		phone: string;
		address: string;
		city: string;
		postalCode: string;
		notes: string;
	};
}
