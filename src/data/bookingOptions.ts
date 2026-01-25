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
		id: "once-off",
		name: "Once-off Cleaning",
		description: "Single session cleaning for special occasions or events",
		pricing: [
			{
				period: "once-off",
				pricePerHour: 44.99,
				additionalHourPrice: 39.99,
				minHours: 3,
				deepCleanPricePerHour: 59.99,
				deepCleanAdditionalHourPrice: 54.99
			}
		],
		bookingPeriods: ["once-off"],
		supportsCleanLevel: true,
		cleanLevelComparison: onceOffComparison,
		addons: onceOffAddons
	},
	{
		id: "regular",
		name: "Regular Cleaning",
		description: "Regular maintenance cleaning for your home or office",
		pricing: [
			{
				period: "weekly",
				pricePerHour: 39.99,
				additionalHourPrice: 34.99,
				minHours: 2,
				deepCleanPricePerHour: 54.99,
				deepCleanAdditionalHourPrice: 49.99
			},
			{
				period: "fortnightly",
				pricePerHour: 39.99,
				additionalHourPrice: 34.99,
				minHours: 3,
				deepCleanPricePerHour: 54.99,
				deepCleanAdditionalHourPrice: 49.99
			},
			{
				period: "monthly",
				pricePerHour: 44.99,
				additionalHourPrice: 39.99,
				minHours: 3,
				deepCleanPricePerHour: 59.99,
				deepCleanAdditionalHourPrice: 54.99
			}
		],
		bookingPeriods: ["weekly", "fortnightly", "monthly"],
		supportsCleanLevel: false,
		cleanLevelComparison: regularComparison,
		addons: regularAddons
	},
	{
		id: "ndis",
		name: "NDIS Cleaning",
		description: "Specialized cleaning services for NDIS participants",
		pricing: [
			{
				period: "once-off",
				pricePerHour: 49.99,
				additionalHourPrice: 44.99,
				minHours: 2
			},
			{
				period: "weekly",
				pricePerHour: 49.99,
				additionalHourPrice: 44.99,
				minHours: 2
			},
			{
				period: "fortnightly",
				pricePerHour: 49.99,
				additionalHourPrice: 44.99,
				minHours: 2
			}
		],
		bookingPeriods: ["once-off", "weekly", "fortnightly"],
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
				pricePerHour: 49.99,
				additionalHourPrice: 44.99,
				minHours: 2
			},
			{
				period: "regular",
				pricePerHour: 49.99,
				additionalHourPrice: 44.99,
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
		description: "Complete cleaning for moving transitions",
		pricing: [
			{
				period: "One Bed",
				pricePerHour: 239.99,
				minHours: 0
			},
			{
				period: "Studio",
				pricePerHour: 259.99,
				minHours: 0
			},
			{
				period: "Two Bed",
				pricePerHour: 339.99,
				minHours: 0
			},
			{
				period: "Three Bed",
				pricePerHour: 439.99,
				minHours: 0
			},
			{
				period: "Four Bed",
				pricePerHour: 599.99,
				minHours: 0
			},
			{
				period: "Five+ Bed",
				pricePerHour: 0,
				minHours: 0
			}
		],
		bookingPeriods: ["One Bed", "Two Bed", "Three Bed", "Four Bed", "Five+ Bed"],
		cleanLevelComparison: endOfLeaseComparison,
		addons: endOfLeaseAddons
	}
];
