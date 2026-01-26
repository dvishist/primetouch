import { CleaningAreaComparison } from "@/types/booking";

// Regular service: Only shows included column (standard clean tasks)
export const regularComparison: CleaningAreaComparison[] = [
	{
		area: "GENERAL",
		tasks: [
			{ task: "Cobweb Removal", standardClean: true, deepClean: null },
			{
				task: "Clean Accessible Light Switches/Power Points",
				standardClean: true,
				deepClean: null
			},
			{ task: "Dust All Reachable Surfaces", standardClean: true, deepClean: null },
			{ task: "Dust/Clean Mirrors", standardClean: true, deepClean: null },
			{ task: "Vacuum/Wipe Window Sills", standardClean: true, deepClean: null },
			{
				task: "Vacuum Accessible Areas Under Beds/Couches/Furniture",
				standardClean: true,
				deepClean: null
			},
			{ task: "Light Tidy Up", standardClean: true, deepClean: null },
			{ task: "Empty Bins", standardClean: true, deepClean: null },
			{ task: "Dust Skirting Boards", standardClean: true, deepClean: null },
			{ task: "Dust/Clean Doors", standardClean: false, deepClean: null },
			{ task: "Dust Blinds", standardClean: false, deepClean: null }
		]
	},
	{
		area: "BATHROOM",
		tasks: [
			{ task: "Scrub/Clean Bath", standardClean: true, deepClean: null },
			{ task: "Scrub/Clean Shower", standardClean: true, deepClean: null },
			{ task: "Scrub/Clean Sinks", standardClean: true, deepClean: null },
			{ task: "Wipe Down Benches", standardClean: true, deepClean: null },
			{ task: "Clean Mirrors", standardClean: true, deepClean: null },
			{ task: "Clean/Polish Tapware and Chrome", standardClean: true, deepClean: null },
			{ task: "Scrub/Clean Toilet", standardClean: true, deepClean: null },
			{ task: "Wipe Down Cupboards (Exterior)", standardClean: true, deepClean: null },
			{ task: "Empty Bins", standardClean: true, deepClean: null },
			{ task: "Scrub Wall Tiles/Grout", standardClean: false, deepClean: null }
		]
	},
	{
		area: "KITCHEN",
		tasks: [
			{ task: "Clean Cooktop", standardClean: true, deepClean: null },
			{ task: "Clean Rangehood (Exterior)", standardClean: true, deepClean: null },
			{ task: "Clean/Wipe Down Benchtops", standardClean: true, deepClean: null },
			{ task: "Clean Visible Appliances (Exterior)", standardClean: true, deepClean: null },
			{ task: "Scrub/Clean Sinks", standardClean: true, deepClean: null },
			{ task: "Clean Splashbacks", standardClean: true, deepClean: null },
			{ task: "Clean/Polish Tapware", standardClean: true, deepClean: null },
			{ task: "Clean Inside/Outside Microwave", standardClean: true, deepClean: null },
			{ task: "Clean Cupboards (Exterior)", standardClean: true, deepClean: null },
			{ task: "Empty Bins", standardClean: true, deepClean: null },
			{ task: "Clean Underside of Rangehood", standardClean: false, deepClean: null }
		]
	},
	{
		area: "KITCHEN ADD-ONS",
		tasks: [
			{ task: "Fridge Cleaning", standardClean: null, deepClean: null },
			{ task: "Oven Cleaning", standardClean: null, deepClean: null }
		]
	},
	{
		area: "BEDROOMS",
		tasks: [
			{ task: "Tidy Up Beds", standardClean: true, deepClean: null },
			{ task: "Dust/Wipe All Furniture", standardClean: true, deepClean: null },
			{ task: "Empty Bins", standardClean: true, deepClean: null }
		]
	},
	{
		area: "Floors",
		tasks: [{ task: "Vacuum/Mop All Accessible Floors", standardClean: true, deepClean: null }]
	},
	{
		area: "LIVING AREAS",
		tasks: [
			{ task: "Dust/Wipe Coffee Tables/End Tables", standardClean: true, deepClean: null },
			{ task: "Vacuum Rugs and Carpets", standardClean: true, deepClean: null },
			{ task: "Wipe Remote Controls and Light Switches", standardClean: true, deepClean: null },
			{ task: "Tidy Up Room", standardClean: true, deepClean: null }
		]
	}
];

// Once-off service: Shows both Standard and Deep Clean columns
export const onceOffComparison: CleaningAreaComparison[] = [
	{
		area: "GENERAL",
		tasks: [
			{ task: "Cobweb Removal", standardClean: true, deepClean: true },
			{
				task: "Clean Accessible Light Switches/Power Points",
				standardClean: true,
				deepClean: true
			},
			{ task: "Dust All Reachable Surfaces", standardClean: true, deepClean: true },
			{ task: "Dust/Clean Mirrors", standardClean: true, deepClean: true },
			{ task: "Vacuum/Wipe Window Sills", standardClean: true, deepClean: true },
			{
				task: "Vacuum Accessible Areas Under Beds/Couches/Furniture",
				standardClean: true,
				deepClean: true
			},
			{ task: "Light Tidy Up", standardClean: true, deepClean: true },
			{ task: "Empty Bins", standardClean: true, deepClean: true },
			{ task: "Dust Skirting Boards", standardClean: true, deepClean: true },
			{ task: "Dust/Clean Doors", standardClean: false, deepClean: true },
			{ task: "Dust Blinds", standardClean: false, deepClean: true }
		]
	},
	{
		area: "BATHROOM",
		tasks: [
			{ task: "Scrub/Clean Bath", standardClean: true, deepClean: true },
			{ task: "Scrub/Clean Shower", standardClean: true, deepClean: true },
			{ task: "Scrub/Clean Sinks", standardClean: true, deepClean: true },
			{ task: "Wipe Down Benches", standardClean: true, deepClean: true },
			{ task: "Clean Mirrors", standardClean: true, deepClean: true },
			{ task: "Clean/Polish Tapware and Chrome", standardClean: true, deepClean: true },
			{ task: "Scrub/Clean Toilet", standardClean: true, deepClean: true },
			{ task: "Wipe Down Cupboards (Exterior)", standardClean: true, deepClean: true },
			{ task: "Empty Bins", standardClean: true, deepClean: true },
			{ task: "Scrub Wall Tiles/Grout", standardClean: false, deepClean: true }
		]
	},
	{
		area: "KITCHEN",
		tasks: [
			{ task: "Clean Cooktop", standardClean: true, deepClean: true },
			{ task: "Clean Rangehood (Exterior)", standardClean: true, deepClean: true },
			{ task: "Clean/Wipe Down Benchtops", standardClean: true, deepClean: true },
			{ task: "Clean Visible Appliances (Exterior)", standardClean: true, deepClean: true },
			{ task: "Scrub/Clean Sinks", standardClean: true, deepClean: true },
			{ task: "Clean Splashbacks", standardClean: true, deepClean: true },
			{ task: "Clean/Polish Tapware", standardClean: true, deepClean: true },
			{ task: "Clean Inside/Outside Microwave", standardClean: true, deepClean: true },
			{ task: "Clean Cupboards (Exterior)", standardClean: true, deepClean: true },
			{ task: "Empty Bins", standardClean: true, deepClean: true },
			{ task: "Clean Underside of Rangehood", standardClean: false, deepClean: true }
		]
	},
	{
		area: "KITCHEN ADD-ONS",
		tasks: [
			{ task: "Fridge Cleaning", standardClean: null, deepClean: true },
			{ task: "Oven Cleaning", standardClean: null, deepClean: true }
		]
	},
	{
		area: "BEDROOMS",
		tasks: [
			{ task: "Tidy Up Beds", standardClean: true, deepClean: true },
			{ task: "Dust/Wipe All Furniture", standardClean: true, deepClean: true },
			{ task: "Empty Bins", standardClean: true, deepClean: true }
		]
	},
	{
		area: "Floors",
		tasks: [{ task: "Vacuum/Mop All Accessible Floors", standardClean: true, deepClean: true }]
	},
	{
		area: "LIVING AREAS",
		tasks: [
			{ task: "Dust/Wipe Coffee Tables/End Tables", standardClean: true, deepClean: true },
			{ task: "Vacuum Rugs and Carpets", standardClean: true, deepClean: true },
			{ task: "Wipe Remote Controls and Light Switches", standardClean: true, deepClean: true },
			{ task: "Tidy Up Room", standardClean: true, deepClean: true }
		]
	}
];

// End-of-lease service: Shows all deep clean services as included
export const endOfLeaseComparison: CleaningAreaComparison[] = [
	{
		area: "GENERAL",
		tasks: [
			{ task: "Cobweb Removal", standardClean: null, deepClean: true },
			{
				task: "Dust/Wipe Skirting Boards/Window Sills/Doors",
				standardClean: null,
				deepClean: true
			},
			{ task: "Dust/Clean Doors", standardClean: null, deepClean: true },
			{
				task: "Clean Accessible Light Switches/Power Points",
				standardClean: null,
				deepClean: true
			},
			{ task: "Dust All Reachable Surfaces", standardClean: null, deepClean: true },
			{ task: "Clean/Wipe all the Windows", standardClean: null, deepClean: true },
			{ task: "Dust/Clean Mirrors", standardClean: null, deepClean: true },
			{ task: "Dust/Clean Blinds", standardClean: null, deepClean: true },
			{ task: "Vacuum/Wipe visible window tracks/sills", standardClean: null, deepClean: true },
			{
				task: "Clean All Drawers/Cabinets (Interior + Exterior)",
				standardClean: null,
				deepClean: true
			},
			{ task: "Empty Bins", standardClean: null, deepClean: true }
		]
	},

	{
		area: "BATHROOM",
		tasks: [
			{ task: "Scrub/Clean Bath", standardClean: null, deepClean: true },
			{ task: "Scrub/Clean Shower", standardClean: null, deepClean: true },
			{ task: "Scrub/Clean Sinks", standardClean: null, deepClean: true },
			{ task: "Wipe Down Benches", standardClean: null, deepClean: true },
			{ task: "Clean Mirrors", standardClean: null, deepClean: true },
			{ task: "Clean/Polish Tapware and Chrome", standardClean: null, deepClean: true },
			{ task: "Empty Bins", standardClean: null, deepClean: true },
			{ task: "Clean/Disinfect Toilet", standardClean: null, deepClean: true },
			{ task: "Scrub Shower Wall Tiles/Grout", standardClean: null, deepClean: true },
			{ task: "Clean Ceiling Exhaust Fans", standardClean: null, deepClean: true },
			{
				task: "Clean All Drawers/Cabinets (Interior + Exterior)",
				standardClean: null,
				deepClean: true
			}
		]
	},
	{
		area: "KITCHEN",
		tasks: [
			{ task: "Clean Stovetop", standardClean: null, deepClean: true },
			{ task: "Clean Rangehood (Interior + Exterior)", standardClean: null, deepClean: true },
			{ task: "Clean/Wipe All Bench Tops", standardClean: null, deepClean: true },
			{
				task: "Clean Visible Appliances (Interior + Exterior)",
				standardClean: null,
				deepClean: true
			},
			{ task: "Clean Splash back", standardClean: null, deepClean: true },
			{ task: "Clean/Polish Tapware", standardClean: null, deepClean: true },
			{ task: "Scrub/Clean Sink", standardClean: null, deepClean: true },
			{ task: "Polish Stainless Steel Surfaces", standardClean: null, deepClean: true },
			{ task: "Dust And Wipe All Surfaces", standardClean: null, deepClean: true },
			{ task: "Remove Food and Wipe Inside Dishwasher", standardClean: null, deepClean: true },
			{ task: "Clean Inside Oven", standardClean: null, deepClean: true },
			{
				task: "Clean All Drawers/Cabinets (Interior + Exterior)",
				standardClean: null,
				deepClean: true
			}
		]
	},
	{
		area: "FLOORS",
		tasks: [{ task: "Vacuum/Mop All Accessible Floors", standardClean: null, deepClean: true }]
	}
];

// Airbnb service: Same as end-of-lease (all deep clean services)
export const ndisComparison: CleaningAreaComparison[] = [
	{
		area: "GENERAL",
		tasks: [
			{ task: "Cobweb Removal", standardClean: null, deepClean: true },
			{
				task: "Clean Accessible Light Switches/Power Points",
				standardClean: null,
				deepClean: true
			},
			{ task: "Dust All Reachable Surfaces", standardClean: null, deepClean: true },
			{ task: "Dust/Clean Mirrors", standardClean: null, deepClean: true },
			{ task: "Vacuum/Wipe Window Sills", standardClean: null, deepClean: true },
			{
				task: "Vacuum Accessible Areas Under Beds/Couches/Furniture",
				standardClean: null,
				deepClean: true
			},
			{ task: "Light Tidy Up", standardClean: null, deepClean: true },
			{ task: "Empty Bins", standardClean: null, deepClean: true },
			{ task: "Dust Skirting Boards", standardClean: null, deepClean: true },
			{ task: "Dust/Wipe Doors", standardClean: null, deepClean: false }
		]
	},
	{
		area: "BATHROOM",
		tasks: [
			{ task: "Scrub/Clean Bath", standardClean: null, deepClean: true },
			{ task: "Scrub/Clean Shower", standardClean: null, deepClean: true },
			{ task: "Scrub/Clean Sinks", standardClean: null, deepClean: true },
			{ task: "Wipe Down Benches", standardClean: null, deepClean: true },
			{ task: "Clean Mirrors", standardClean: null, deepClean: true },
			{ task: "Clean/Polish Tapware", standardClean: null, deepClean: true },
			{ task: "Scrub/Clean Toilet", standardClean: null, deepClean: true },
			{ task: "Wipe Down Cupboards (Exterior)", standardClean: null, deepClean: true },
			{ task: "Empty Bins", standardClean: null, deepClean: true },
			{ task: "Scrub Wall Tiles/Grout", standardClean: null, deepClean: false }
		]
	},
	{
		area: "KITCHEN",
		tasks: [
			{ task: "Clean Cooktop", standardClean: null, deepClean: true },
			{ task: "Clean Rangehood (Exterior)", standardClean: null, deepClean: true },
			{ task: "Clean/Wipe Down Benchtops", standardClean: null, deepClean: true },
			{ task: "Clean Visible Appliances (Exterior)", standardClean: null, deepClean: true },
			{ task: "Scrub/Clean Sinks", standardClean: null, deepClean: true },
			{ task: "Clean Splashbacks", standardClean: null, deepClean: true },
			{ task: "Clean/Polish Tapware", standardClean: null, deepClean: true },
			{ task: "Clean Inside/Outside Microwave", standardClean: null, deepClean: true },
			{ task: "Clean Cupboards (Exterior)", standardClean: null, deepClean: true },
			{ task: "Empty Bins", standardClean: null, deepClean: true },
			{ task: "Clean Underside of Rangehood", standardClean: null, deepClean: false },
			{ task: "Fridge Cleaning (Interior)", standardClean: null, deepClean: false },
			{ task: "Oven Cleaning (Interior)", standardClean: null, deepClean: false }
		]
	},
	{
		area: "BEDROOMS",
		tasks: [
			{ task: "Tidy Up Beds", standardClean: null, deepClean: true },
			{ task: "Dust/Wipe All Furniture", standardClean: null, deepClean: true },
			{ task: "Empty Bins", standardClean: null, deepClean: true }
		]
	},
	{
		area: "Floors",
		tasks: [{ task: "Vacuum/Mop All Accessible Floors", standardClean: null, deepClean: true }]
	},
	{
		area: "LIVING AREAS",
		tasks: [
			{ task: "Dust/Wipe Coffee Tables/End Tables", standardClean: null, deepClean: true },
			{ task: "Vacuum Rugs and Carpets", standardClean: null, deepClean: true },
			{ task: "Wipe Remote Controls and Light Switches", standardClean: null, deepClean: true },
			{ task: "Tidy Up Room", standardClean: null, deepClean: true }
		]
	}
];

export const airbnbComparison: CleaningAreaComparison[] = [
	{
		area: "GENERAL",
		tasks: [
			{ task: "Cobweb Removal", standardClean: null, deepClean: true },
			{
				task: "Dust/Wipe Skirting Boards/Window Sills/Doors",
				standardClean: null,
				deepClean: true
			},
			{ task: "Dust/Clean Doors", standardClean: null, deepClean: true },
			{
				task: "Clean Accessible Light Switches/Power Points",
				standardClean: null,
				deepClean: true
			},
			{ task: "Dust All Reachable Surfaces", standardClean: null, deepClean: true },
			{ task: "Dust/Clean Mirrors", standardClean: null, deepClean: true },
			{ task: "Dust/Clean Blinds", standardClean: null, deepClean: true },
			{ task: "Vacuum/Wipe Visible Window Tracks/Sills", standardClean: null, deepClean: true },
			{
				task: "Clean All Drawers/Cabinets (Interior + Exterior)",
				standardClean: null,
				deepClean: true
			},
			{ task: "Empty Bins", standardClean: null, deepClean: true }
		]
	},

	{
		area: "BATHROOM",
		tasks: [
			{ task: "Scrub/Clean Bath", standardClean: null, deepClean: true },
			{ task: "Scrub/Clean Shower", standardClean: null, deepClean: true },
			{ task: "Scrub/Clean Sinks", standardClean: null, deepClean: true },
			{ task: "Wipe Down Benches", standardClean: null, deepClean: true },
			{ task: "Clean Mirrors", standardClean: null, deepClean: true },
			{ task: "Clean/Polish Tapware and Chrome", standardClean: null, deepClean: true },
			{ task: "Empty Bins", standardClean: null, deepClean: true },
			{ task: "Clean/Disinfect Toilet", standardClean: null, deepClean: true },
			{ task: "Scrub Shower Wall Tiles/Grout", standardClean: null, deepClean: true },
			{ task: "Clean Ceiling Exhaust Fans", standardClean: null, deepClean: true },
			{
				task: "Clean All Drawers/Cabinets (Interior + Exterior)",
				standardClean: null,
				deepClean: true
			}
		]
	},
	{
		area: "KITCHEN",
		tasks: [
			{ task: "Clean Stovetop", standardClean: null, deepClean: true },
			{ task: "Clean Rangehood (Interior + Exterior)", standardClean: null, deepClean: true },
			{ task: "Clean/Wipe All Bench Tops", standardClean: null, deepClean: true },
			{
				task: "Clean Visible Appliances (Interior + Exterior)",
				standardClean: null,
				deepClean: true
			},
			{ task: "Clean Splash back", standardClean: null, deepClean: true },
			{ task: "Clean/Polish Tapware", standardClean: null, deepClean: true },
			{ task: "Scrub/Clean Sink", standardClean: null, deepClean: true },
			{ task: "Polish Stainless Steel Surfaces", standardClean: null, deepClean: true },
			{ task: "Dust And Wipe All Surfaces", standardClean: null, deepClean: true },
			{ task: "Remove Food and Wipe Inside Dishwasher", standardClean: null, deepClean: true },
			{ task: "Clean Inside Oven and Fridge", standardClean: null, deepClean: true },
			{
				task: "Clean All Drawers/Cabinets (Interior + Exterior)",
				standardClean: null,
				deepClean: true
			},
			{
				task: "Dishes (Silverware and Utensils)",
				standardClean: null,
				deepClean: true
			}
		]
	},
	{
		area: "LIVING AREAS",
		tasks: [
			{ task: "Dust/Wipe Coffee Tables/End Tables", standardClean: null, deepClean: true },
			{ task: "Vacuum Rugs and Carpets", standardClean: null, deepClean: true },
			{ task: "Wipe Remote Controls and Light Switches", standardClean: null, deepClean: true },
			{ task: "Tidy Up Room", standardClean: null, deepClean: true }
		]
	},
	{
		area: "FLOORS",
		tasks: [{ task: "Vacuum/Mop All Accessible Floors", standardClean: null, deepClean: true }]
	}
];

export const moveInComparison: CleaningAreaComparison[] = endOfLeaseComparison;
