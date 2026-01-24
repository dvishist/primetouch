import { CleaningAreaComparison } from "@/types/booking";

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
			{ task: "Vacuum/Mop Floors", standardClean: true, deepClean: true },
			{ task: "Empty Bins", standardClean: true, deepClean: true },
			{ task: "Dust/Clean Doors", standardClean: false, deepClean: true },
			{ task: "Dust Skirting Boards", standardClean: false, deepClean: true },
			{ task: "Lightly Dust Blinds", standardClean: false, deepClean: true }
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
			{ task: "Vacuum/Mop Floors", standardClean: true, deepClean: true },
			{ task: "Empty Bins", standardClean: true, deepClean: true },
			{ task: "Wipe Down Tiles", standardClean: false, deepClean: true }
		]
	},
	{
		area: "KITCHEN",
		tasks: [
			{ task: "Wipe Down Benches", standardClean: true, deepClean: true },
			{ task: "Clean Cooktop", standardClean: true, deepClean: true },
			{ task: "Wipe Outside of Appliances", standardClean: true, deepClean: true },
			{ task: "Clean Sinks", standardClean: true, deepClean: true },
			{ task: "Vacuum/Mop Floors", standardClean: true, deepClean: true },
			{ task: "Empty Bins", standardClean: true, deepClean: true },
			{ task: "Wipe Down Cabinet Doors", standardClean: false, deepClean: true },
			{ task: "Clean Splashback", standardClean: false, deepClean: true }
		]
	},
	{
		area: "BEDROOMS",
		tasks: [
			{ task: "Make Beds", standardClean: true, deepClean: true },
			{ task: "Dust Surfaces", standardClean: true, deepClean: true },
			{ task: "Vacuum Floors", standardClean: true, deepClean: true },
			{ task: "Empty Bins", standardClean: true, deepClean: true }
		]
	},
	{
		area: "LIVING AREAS",
		tasks: [
			{ task: "Dust Surfaces", standardClean: true, deepClean: true },
			{ task: "Vacuum/Mop Floors", standardClean: true, deepClean: true },
			{ task: "Empty Bins", standardClean: true, deepClean: true }
		]
	}
];

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
			{ task: "Vacuum/Mop Floors", standardClean: true, deepClean: null },
			{ task: "Empty Bins", standardClean: true, deepClean: null }
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
			{ task: "Vacuum/Mop Floors", standardClean: true, deepClean: null },
			{ task: "Empty Bins", standardClean: true, deepClean: null }
		]
	},
	{
		area: "KITCHEN",
		tasks: [
			{ task: "Wipe Down Benches", standardClean: true, deepClean: null },
			{ task: "Clean Cooktop", standardClean: true, deepClean: null },
			{ task: "Wipe Outside of Appliances", standardClean: true, deepClean: null },
			{ task: "Clean Sinks", standardClean: true, deepClean: null },
			{ task: "Vacuum/Mop Floors", standardClean: true, deepClean: null },
			{ task: "Empty Bins", standardClean: true, deepClean: null }
		]
	},
	{
		area: "BEDROOMS",
		tasks: [
			{ task: "Make Beds (if linen present)", standardClean: true, deepClean: null },
			{ task: "Dust Surfaces", standardClean: true, deepClean: null },
			{ task: "Vacuum Floors", standardClean: true, deepClean: null },
			{ task: "Empty Bins", standardClean: true, deepClean: null }
		]
	},
	{
		area: "LIVING AREAS",
		tasks: [
			{ task: "Dust Surfaces", standardClean: true, deepClean: null },
			{ task: "Vacuum/Mop Floors", standardClean: true, deepClean: null },
			{ task: "Empty Bins", standardClean: true, deepClean: null }
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
			{ task: "Vacuum/Mop Floors", standardClean: null, deepClean: true },
			{ task: "Empty Bins", standardClean: null, deepClean: true },
			{ task: "Dust/Clean Doors", standardClean: null, deepClean: true },
			{ task: "Dust Skirting Boards", standardClean: null, deepClean: true },
			{ task: "Lightly Dust Blinds", standardClean: null, deepClean: true }
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
			{ task: "Scrub/Clean Toilet", standardClean: null, deepClean: true },
			{ task: "Vacuum/Mop Floors", standardClean: null, deepClean: true },
			{ task: "Empty Bins", standardClean: null, deepClean: true },
			{ task: "Wipe Down Tiles", standardClean: null, deepClean: true }
		]
	},
	{
		area: "KITCHEN",
		tasks: [
			{ task: "Wipe Down Benches", standardClean: null, deepClean: true },
			{ task: "Clean Cooktop", standardClean: null, deepClean: true },
			{ task: "Wipe Outside of Appliances", standardClean: null, deepClean: true },
			{ task: "Clean Sinks", standardClean: null, deepClean: true },
			{ task: "Vacuum/Mop Floors", standardClean: null, deepClean: true },
			{ task: "Empty Bins", standardClean: null, deepClean: true },
			{ task: "Wipe Down Cabinet Doors", standardClean: null, deepClean: true },
			{ task: "Clean Splashback", standardClean: null, deepClean: true }
		]
	},
	{
		area: "BEDROOMS",
		tasks: [
			{ task: "Make Beds (if linen present)", standardClean: null, deepClean: true },
			{ task: "Dust Surfaces", standardClean: null, deepClean: true },
			{ task: "Vacuum Floors", standardClean: null, deepClean: true },
			{ task: "Empty Bins", standardClean: null, deepClean: true }
		]
	},
	{
		area: "LIVING AREAS",
		tasks: [
			{ task: "Dust Surfaces", standardClean: null, deepClean: true },
			{ task: "Vacuum/Mop Floors", standardClean: null, deepClean: true },
			{ task: "Empty Bins", standardClean: null, deepClean: true }
		]
	}
];

// Airbnb service: Same as end-of-lease (all deep clean services)
export const airbnbComparison: CleaningAreaComparison[] = endOfLeaseComparison;
export const ndisComparison: CleaningAreaComparison[] = endOfLeaseComparison;
