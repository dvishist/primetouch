import { Addon } from "@/types/booking";

// Once-off service addons
export const onceOffAddons: Addon[] = [
	{
		id: "inside-fridge",
		name: "Inside Fridge Clean",
		price: 25,
		category: "kitchen"
	},
	{
		id: "inside-oven",
		name: "Inside Oven Clean",
		price: 35,
		category: "kitchen"
	},
	{
		id: "inside-cabinets",
		name: "Inside Cabinets",
		price: 40,
		category: "cleaning"
	},
	{
		id: "windows-interior",
		name: "Interior Windows",
		price: 30,
		category: "cleaning"
	},
	{
		id: "windows-exterior",
		name: "Exterior Windows",
		price: 50,
		category: "cleaning"
	},
	{
		id: "laundry-service",
		name: "Laundry Service",
		price: 20,
		category: "laundry"
	},
	{
		id: "ironing-service",
		name: "Ironing Service",
		price: 25,
		category: "laundry"
	},
	{
		id: "bed-linen-change",
		name: "Bed Linen Change",
		price: 15,
		category: "laundry"
	},
	{
		id: "balcony-patio",
		name: "Balcony/Patio Clean",
		price: 30,
		category: "other"
	},
	{
		id: "garage-sweep",
		name: "Garage Sweep",
		price: 25,
		category: "other"
	}
];

// Regular service addons
export const regularAddons: Addon[] = [
	{
		id: "inside-fridge",
		name: "Inside Fridge Clean",
		price: 25,
		category: "kitchen"
	},
	{
		id: "inside-oven",
		name: "Inside Oven Clean",
		price: 35,
		category: "kitchen"
	},
	{
		id: "windows-interior",
		name: "Interior Windows",
		price: 30,
		category: "cleaning"
	},
	{
		id: "laundry-service",
		name: "Laundry Service",
		price: 20,
		category: "laundry"
	},
	{
		id: "ironing-service",
		name: "Ironing Service",
		price: 25,
		category: "laundry"
	}
];

// End-of-lease service addons
export const endOfLeaseAddons: Addon[] = [
	{
		id: "balcony",
		name: "Balcony",
		price: 45,
		category: "cleaning"
	},
	{
		id: "garage",
		name: "Garage",
		price: 40,
		category: "cleaning"
	}
];

// Airbnb service addons
export const airbnbAddons: Addon[] = [
	{
		id: "linen-change-bed-making",
		name: "Linen Change and Bed Making (price per bed)",
		price: 20,
		category: "cleaning"
	},
	{
		id: "restock-amenities",
		name: "Restock Amenities",
		price: 20,
		category: "other"
	}
];

// Airbnb service addons
export const ndisAddons: Addon[] = [];
