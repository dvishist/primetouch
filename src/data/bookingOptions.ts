import { BookingOption, DurationOption, CleaningAreaComparison } from "@/types/booking";

export const cleanLevelComparison: CleaningAreaComparison[] = [
	{
		area: "BATHROOM",
		tasks: [
			{ task: "Scrub/Clean Bath", normalClean: true, deepClean: true },
			{ task: "Scrub/Clean Shower", normalClean: true, deepClean: true },
			{ task: "Scrub/Clean Sinks", normalClean: true, deepClean: true },
			{ task: "Wipe Down Benches", normalClean: true, deepClean: true },
			{ task: "Clean Mirrors", normalClean: true, deepClean: true },
			{ task: "Clean/Polish Tapware and Chrome", normalClean: true, deepClean: true },
			{ task: "Wipe Down Cupboards (exterior)", normalClean: true, deepClean: true },
			{ task: "Empty Bins", normalClean: true, deepClean: true },
			{ task: "Clean/Disinfect Toilet", normalClean: true, deepClean: true },
			{ task: "Scrub Wall Tiles/Grout", normalClean: false, deepClean: true }
		]
	},
	{
		area: "KITCHEN",
		tasks: [
			{ task: "Clean Stovetop", normalClean: true, deepClean: true },
			{ task: "Clean Rangehood (exterior)", normalClean: true, deepClean: true },
			{ task: "Clean/Wipe All Bench tops", normalClean: true, deepClean: true },
			{ task: "Clean Visible Appliances (exterior)", normalClean: true, deepClean: true },
			{ task: "Clean Splash back", normalClean: true, deepClean: true },
			{ task: "Clean/Polish Tapware", normalClean: true, deepClean: true },
			{ task: "Scrub/Clean Sink", normalClean: true, deepClean: true },
			{ task: "Clean Inside/Outside Microwave", normalClean: true, deepClean: true },
			{ task: "Clean Cupboards (exterior)", normalClean: true, deepClean: true },
			{ task: "Polish Stainless Steel Surfaces", normalClean: true, deepClean: true },
			{ task: "Dust All Surfaces", normalClean: true, deepClean: true },
			{ task: "Clean Underside of Rangehood", normalClean: false, deepClean: true }
		]
	},
	{
		area: "BEDROOM",
		tasks: [
			{ task: "Dust All Surfaces", normalClean: true, deepClean: true },
			{ task: "Vacuum/Mop Floors", normalClean: true, deepClean: true },
			{ task: "Empty Bins", normalClean: true, deepClean: true },
			{ task: "Wipe Down All Surfaces", normalClean: true, deepClean: true },
			{ task: "Clean Mirrors", normalClean: true, deepClean: true },
			{ task: "Wipe Down Skirting Boards", normalClean: false, deepClean: true }
		]
	},
	{
		area: "LIVING AREAS",
		tasks: [
			{ task: "Dust All Surfaces", normalClean: true, deepClean: true },
			{ task: "Vacuum/Mop Floors", normalClean: true, deepClean: true },
			{ task: "Empty Bins", normalClean: true, deepClean: true },
			{ task: "Wipe Down All Surfaces", normalClean: true, deepClean: true },
			{ task: "Clean Mirrors", normalClean: true, deepClean: true },
			{ task: "Wipe Down Skirting Boards", normalClean: false, deepClean: true }
		]
	}
];

export const bookingOptions: BookingOption[] = [
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
		bookingPeriods: ["once-off"],
		supportsCleanLevel: true,
		cleanLevelComparison
	},
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
		bookingPeriods: ["weekly", "fortnightly", "monthly"],
		supportsCleanLevel: true,
		cleanLevelComparison
	},
	// {
	// 	id: "deep-cleaning",
	// 	name: "Deep Cleaning",
	// 	description: "Thorough cleaning for every corner of your space",
	// 	features: [
	// 		"All standard cleaning services",
	// 		"Inside appliances",
	// 		"Baseboards and window sills",
	// 		"Light fixtures",
	// 		"Inside cabinets",
	// 		"Detailed bathroom scrubbing"
	// 	],
	// 	pricing: [
	// 		{
	// 			period: "weekly",
	// 			pricePerHour: 60,
	// 			additionalHourPrice: 55,
	// 			minHours: 3
	// 		},
	// 		{
	// 			period: "fortnightly",
	// 			pricePerHour: 60,
	// 			additionalHourPrice: 55,
	// 			minHours: 3
	// 		},
	// 		{
	// 			period: "monthly",
	// 			pricePerHour: 65,
	// 			additionalHourPrice: 60,
	// 			minHours: 4
	// 		}
	// 	],
	// 	bookingPeriods: ["weekly", "fortnightly", "monthly"]
	// },
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
				period: "One Bed",
				pricePerHour: 190,
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
				period: "Four+ Bed",
				pricePerHour: 550,
				minHours: 0
			}
		],
		bookingPeriods: ["One Bed", "Two Bed", "Three Bed", "Four+ Bed"]
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
