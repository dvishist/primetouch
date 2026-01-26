export type BookingType =
	| "regular"
	| "deep-cleaning"
	| "end-of-lease"
	| "commercial"
	| "once-off"
	| "airbnb"
	| "ndis"
	| "move-in";

export type BookingPeriod = "once-off" | "regular" | "weekly" | "fortnightly" | "monthly";
export type LeaseType = "One Bed" | "Studio" | "Two Bed" | "Three Bed" | "Four Bed" | "Five+ Bed";
export type ContactPreference = "call" | "sms" | "email";
export type CleanLevel = "standard" | "deep";
export type TimeSlot = "morning" | "afternoon" | "evening";

export interface Addon {
	id: string;
	name: string;
	price: number;
	category: "cleaning" | "laundry" | "kitchen" | "other";
}

export interface CleaningTask {
	task: string;
	standardClean: boolean | null;
	deepClean: boolean | null;
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
	deepCleanPricePerHour?: number;
	deepCleanAdditionalHourPrice?: number;
}

export interface BookingOption {
	id: BookingType;
	name: string;
	description: string;
	pricing: BookingPricing[];
	bookingPeriods: (BookingPeriod | LeaseType)[];
	cleanLevelComparison?: CleaningAreaComparison[];
	supportsCleanLevel?: boolean;
	addons?: Addon[];
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
	selectedAddons: string[];
	contactPreferences: ContactPreference[];
	preferredDate: Date | null;
	preferredTime: TimeSlot | null;
	bathrooms?: number;
	toilets?: number;
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
