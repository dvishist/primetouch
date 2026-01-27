import { BookingOption, Addon } from "@/types/booking";
import {
	onceOffComparison,
	regularComparison,
	endOfLeaseComparison,
	airbnbComparison,
	ndisComparison,
	moveInComparison
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
		description: "Your home perfectly maintained week after week.",
		pricing: [
			{
				period: "weekly",
				pricePerHour: 43,
				additionalHourPrice: 40,
				minHours: 2
			},
			{
				period: "fortnightly",
				pricePerHour: 43,
				additionalHourPrice: 40,
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
		addons: regularAddons,
		shortNote:
			"Starting from <br/><strong>$40/hr</strong> for 2 hours <br/><strong>+$38/hr</strong> for additional hours."
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
		addons: onceOffAddons,
		shortNote:
			"Starting from <br/><strong>$45/hr</strong> for 3 hours <br/><strong>+$42/hr</strong> for additional hours."
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
		addons: ndisAddons,
		shortNote:
			"Starting from <br/><strong>$52/hr</strong> for 2 hours <br/><strong>+$50/hr</strong> for additional hours."
	},

	{
		id: "airbnb",
		name: "Airbnb Cleaning",
		description: "Polished to perfection for your next guest stay.",
		pricing: [
			{
				period: "regular",
				pricePerHour: 50,
				additionalHourPrice: 48,
				minHours: 2
			},
			{
				period: "once-off",
				pricePerHour: 50,
				additionalHourPrice: 48,
				minHours: 2
			}
		],
		bookingPeriods: ["regular", "once-off"],
		cleanLevelComparison: airbnbComparison,
		addons: airbnbAddons,
		shortNote:
			"Starting from <br/><strong>$50/hr</strong> for 2 hours <br/><strong>+$48/hr</strong> for additional hours."
	},
	{
		id: "move-in",
		name: "Move In Cleaning",
		description: "Comprehensive cleaning to welcome you to your new home.",
		pricing: [
			{
				period: "once-off",
				pricePerHour: 55,
				minHours: 3,
				additionalHourPrice: 52
			}
		],
		supportsCleanLevel: false,
		bookingPeriods: ["once-off"],
		cleanLevelComparison: moveInComparison,
		addons: endOfLeaseAddons,
		shortNote:
			"Starting from <br/><strong>$55/hr</strong> for 3 hours <br/><strong>+$52/hr</strong> for additional hours."
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
		addons: endOfLeaseAddons,
		shortNote:
			"Starting from <br/><strong>$240/hr</strong> for Studio<br/>Balcony and Garage add-ons available."
	}
];
