import { BookingOption, Addon } from "@/types/booking";
import {
	onceOffComparison,
	regularComparison,
	endOfLeaseComparison,
	airbnbComparison
} from "./cleanLevelComparisons";
import { onceOffAddons, regularAddons, endOfLeaseAddons, airbnbAddons } from "./serviceAddons";

export const bookingOptions: BookingOption[] = [
	{
		id: "once-off",
		name: "Once off Cleaning",
		description: "Single session cleaning for special occasions or events",
		pricing: [
			{
				period: "once-off",
				pricePerHour: 45,
				additionalHourPrice: 40,
				minHours: 3,
				deepCleanPricePerHour: 60,
				deepCleanAdditionalHourPrice: 55
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
				pricePerHour: 40,
				additionalHourPrice: 35,
				minHours: 2,
				deepCleanPricePerHour: 55,
				deepCleanAdditionalHourPrice: 50
			},
			{
				period: "fortnightly",
				pricePerHour: 40,
				additionalHourPrice: 35,
				minHours: 3,
				deepCleanPricePerHour: 55,
				deepCleanAdditionalHourPrice: 50
			},
			{
				period: "monthly",
				pricePerHour: 45,
				additionalHourPrice: 40,
				minHours: 3,
				deepCleanPricePerHour: 60,
				deepCleanAdditionalHourPrice: 55
			}
		],
		bookingPeriods: ["weekly", "fortnightly", "monthly"],
		supportsCleanLevel: false,
		cleanLevelComparison: regularComparison,
		addons: regularAddons
	},

	{
		id: "end-of-lease",
		name: "End of Lease Cleaning",
		description: "Complete cleaning for moving transitions",
		pricing: [
			{
				period: "One Bed",
				pricePerHour: 250,
				minHours: 0
			},
			{
				period: "Two Bed",
				pricePerHour: 290,
				minHours: 0
			},
			{
				period: "Three Bed",
				pricePerHour: 405,
				minHours: 0
			},
			{
				period: "Four Bed",
				pricePerHour: 550,
				minHours: 0
			},
			{
				period: "Five+ Bed",
				pricePerHour: 550,
				minHours: 0
			}
		],
		bookingPeriods: ["One Bed", "Two Bed", "Three Bed", "Four Bed", "Five+ Bed"],
		cleanLevelComparison: endOfLeaseComparison,
		addons: endOfLeaseAddons
	},

	{
		id: "airbnb",
		name: "Airbnb Cleaning",
		description: "Quick and thorough cleaning between guest stays",
		pricing: [
			{
				period: "once-off",
				pricePerHour: 45,
				additionalHourPrice: 40,
				minHours: 2
			},
			{
				period: "regular",
				pricePerHour: 50,
				additionalHourPrice: 40,
				minHours: 2
			}
		],
		bookingPeriods: ["once-off", "regular"],
		cleanLevelComparison: airbnbComparison,
		addons: airbnbAddons
	}
];
