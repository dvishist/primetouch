export type BookingType =
	| "regular"
	| "deep-cleaning"
	| "end-of-lease"
	| "commercial"
	| "once-off"
	| "airbnb";

export type BookingPeriod = "once-off" | "weekly" | "fortnightly" | "monthly";
export type LeaseType = "One Bed" | "Two Bed" | "Three Bed" | "Four+ Bed";
export type ContactPreference = "call" | "sms" | "email";
export type CleanLevel = "normal" | "deep";

export interface CleaningTask {
	task: string;
	normalClean: boolean;
	deepClean: boolean;
}

export interface CleaningAreaComparison {
	area: string;
	tasks: CleaningTask[];
}

export interface BookingPricing {
	period: BookingPeriod | LeaseType;
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
	bookingPeriods: (BookingPeriod | LeaseType)[];
	cleanLevelComparison?: CleaningAreaComparison[];
	supportsCleanLevel?: boolean;
}

export interface DurationOption {
	hours: number;
	label: string;
}

export interface BookingFormData {
	bookingType: BookingType | null;
	bookingPeriod: BookingPeriod | LeaseType | null;
	duration: number | null;
	cleanLevel: CleanLevel | null;
	contactPreferences: ContactPreference[];
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

export type CleaningTeam = "1" | "2";
