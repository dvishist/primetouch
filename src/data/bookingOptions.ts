import { BookingOption, DurationOption } from "@/types/booking";

export const bookingOptions: BookingOption[] = [
	{
		id: "regular",
		name: "Regular Cleaning",
		description: "Regular maintenance cleaning for your home or office",
		features: [
			"Dusting all surfaces",
			"Vacuuming and mopping floors",
			"Kitchen cleaning",
			"Bathroom sanitization",
			"Trash removal"
		],
		pricing: [
			{
				period: "weekly",
				pricePerHour: 40,
				additionalHourPrice: 35,
				minHours: 2
			},
			{
				period: "fortnightly",
				pricePerHour: 40,
				additionalHourPrice: 35,
				minHours: 3
			},
			{
				period: "monthly",
				pricePerHour: 45,
				additionalHourPrice: 40,
				minHours: 3
			}
		],
		bookingPeriods: ["weekly", "fortnightly", "monthly"]
	},
	{
		id: "deep-cleaning",
		name: "Deep Cleaning",
		description: "Thorough cleaning for every corner of your space",
		features: [
			"All standard cleaning services",
			"Inside appliances",
			"Baseboards and window sills",
			"Light fixtures",
			"Inside cabinets",
			"Detailed bathroom scrubbing"
		],
		pricing: [
			{
				period: "weekly",
				pricePerHour: 60,
				additionalHourPrice: 55,
				minHours: 3
			},
			{
				period: "fortnightly",
				pricePerHour: 60,
				additionalHourPrice: 55,
				minHours: 3
			},
			{
				period: "monthly",
				pricePerHour: 65,
				additionalHourPrice: 60,
				minHours: 4
			}
		],
		bookingPeriods: ["weekly", "fortnightly", "monthly"]
	},
	{
		id: "end-of-lease",
		name: "End of Lease Cleaning",
		description: "Complete cleaning for moving transitions",
		features: [
			"All deep cleaning services",
			"Inside all cabinets and drawers",
			"Inside refrigerator and oven",
			"Carpet cleaning",
			"Wall spot cleaning",
			"Window cleaning (interior)"
		],
		pricing: [
			{
				period: "once-off",
				pricePerHour: 75,
				additionalHourPrice: 70,
				minHours: 4
			}
		],
		bookingPeriods: ["weekly", "fortnightly", "monthly"]
	},
	{
		id: "commercial",
		name: "Commercial Cleaning",
		description: "Professional cleaning services for offices and commercial spaces",
		features: [
			"Office desk and workspace cleaning",
			"Common area maintenance",
			"Kitchen and breakroom sanitization",
			"Bathroom deep cleaning",
			"Floor vacuuming and mopping",
			"Trash and recycling removal"
		],
		pricing: [
			{
				period: "weekly",
				pricePerHour: 50,
				additionalHourPrice: 45,
				minHours: 3
			},
			{
				period: "fortnightly",
				pricePerHour: 50,
				additionalHourPrice: 45,
				minHours: 3
			},
			{
				period: "monthly",
				pricePerHour: 55,
				additionalHourPrice: 50,
				minHours: 4
			}
		],
		bookingPeriods: ["weekly", "fortnightly", "monthly"]
	},
	{
		id: "once-off",
		name: "Once off Cleaning",
		description: "Single session cleaning for special occasions or events",
		features: [
			"Customized cleaning plan",
			"Flexible scheduling",
			"Deep cleaning of selected areas",
			"Pre or post-event cleanup",
			"Surface sanitization"
		],
		pricing: [
			{
				period: "once-off",
				pricePerHour: 45,
				additionalHourPrice: 40,
				minHours: 2
			}
		],
		bookingPeriods: ["weekly", "fortnightly", "monthly"]
	},
	{
		id: "airbnb",
		name: "Airbnb Cleaning",
		description: "Quick and thorough cleaning between guest stays",
		features: [
			"Complete linen change",
			"Bathroom deep clean and restock",
			"Kitchen cleaning and organization",
			"Living areas reset",
			"Trash removal and floor cleaning",
			"Guest-ready inspection"
		],
		pricing: [
			{
				period: "once-off",
				pricePerHour: 45,
				additionalHourPrice: 40,
				minHours: 2
			}
		],
		bookingPeriods: ["weekly", "fortnightly", "monthly"]
	}
];

export const teamPriceMultiplier = {
	1: 1,
	2: 1.8
};
