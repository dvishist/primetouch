import { BookingOption, Addon } from "@/types/booking";
import {
	onceOffComparison,
	regularComparison,
	endOfLeaseComparison,
	airbnbComparison,
	ndisComparison
} from "./cleanLevelComparisons";
import {
	onceOffAddons,
	regularAddons,
	endOfLeaseAddons,
	airbnbAddons,
	ndisAddons
} from "./serviceAddons";

export const bookingOptions: BookingOption[] = [
	{
		id: "regular",
		name: "Regular Cleaning",
		description: "Regular maintenance cleaning for your home.",
		pricing: [
			{
				period: "weekly",
				pricePerHour: 40,
				additionalHourPrice: 37,
				minHours: 2
			},
			{
				period: "fortnightly",
				pricePerHour: 40,
				additionalHourPrice: 37,
				minHours: 3
			},
			{
				period: "monthly",
				pricePerHour: 45,
				additionalHourPrice: 42,
				minHours: 3
			}
		],
		bookingPeriods: ["weekly", "fortnightly", "monthly"],
		supportsCleanLevel: false,
		cleanLevelComparison: regularComparison,
		addons: regularAddons
	},
	{
		id: "once-off",
		name: "Once-off Cleaning",
		description: "A one time clean for homes that deserve more. ",
		pricing: [
			{
				period: "once-off",
				pricePerHour: 45,
				additionalHourPrice: 42,
				minHours: 3,
				deepCleanPricePerHour: 60,
				deepCleanAdditionalHourPrice: 57
			}
		],
		bookingPeriods: ["once-off"],
		supportsCleanLevel: true,
		cleanLevelComparison: onceOffComparison,
		addons: onceOffAddons
	},
	{
		id: "ndis",
		name: "NDIS Cleaning",
		description: "Specialized cleaning services for NDIS participants",
		pricing: [
			{
				period: "weekly",
				pricePerHour: 52,
				additionalHourPrice: 50,
				minHours: 2
			},
			{
				period: "fortnightly",
				pricePerHour: 52,
				additionalHourPrice: 50,
				minHours: 2
			},
			{
				period: "once-off",
				pricePerHour: 52,
				additionalHourPrice: 50,
				minHours: 2
			}
		],
		bookingPeriods: ["weekly", "fortnightly", "once-off"],
		cleanLevelComparison: ndisComparison,
		addons: ndisAddons
	},

	{
		id: "airbnb",
		name: "Airbnb Cleaning",
		description: "Quick and thorough cleaning between guest stays",
		pricing: [
			{
				period: "once-off",
				pricePerHour: 50,
				additionalHourPrice: 48,
				minHours: 2
			},
			{
				period: "regular",
				pricePerHour: 50,
				additionalHourPrice: 48,
				minHours: 2
			}
		],
		bookingPeriods: ["once-off", "regular"],
		cleanLevelComparison: airbnbComparison,
		addons: airbnbAddons
	},
	{
		id: "end-of-lease",
		name: "End of Lease Cleaning",
		description: "We clean. You collect your bond.",
		pricing: [
			{
				period: "Studio",
				pricePerHour: 240,
				minHours: 0
			},
			{
				period: "One Bed",
				pricePerHour: 260,
				minHours: 0
			},
			{
				period: "Two Bed",
				pricePerHour: 340,
				minHours: 0
			},
			{
				period: "Three Bed",
				pricePerHour: 440,
				minHours: 0
			},
			{
				period: "Four Bed",
				pricePerHour: 550,
				minHours: 0
			},
			{
				period: "Five+ Bed",
				pricePerHour: 700,
				minHours: 0
			}
		],
		bookingPeriods: ["Studio", "One Bed", "Two Bed", "Three Bed", "Four Bed", "Five+ Bed"],
		cleanLevelComparison: endOfLeaseComparison,
		addons: endOfLeaseAddons
	},
	{
		id: "move-in",
		name: "Move In Cleaning",
		description: "Comprehensive cleaning to welcome you to your new home.",
		pricing: [
			{
				period: "Studio",
				pricePerHour: 240,
				minHours: 0
			},
			{
				period: "One Bed",
				pricePerHour: 260,
				minHours: 0
			},
			{
				period: "Two Bed",
				pricePerHour: 340,
				minHours: 0
			},
			{
				period: "Three Bed",
				pricePerHour: 440,
				minHours: 0
			},
			{
				period: "Four Bed",
				pricePerHour: 550,
				minHours: 0
			},
			{
				period: "Five+ Bed",
				pricePerHour: 700,
				minHours: 0
			}
		],
		bookingPeriods: ["Studio", "One Bed", "Two Bed", "Three Bed", "Four Bed", "Five+ Bed"],
		cleanLevelComparison: endOfLeaseComparison,
		addons: endOfLeaseAddons
	}
];
