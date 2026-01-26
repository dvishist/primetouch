import { Addon } from "@/types/booking";

// Once-off service addons
export const onceOffAddons: Addon[] = [
	{
		id: "inside-fridge",
		name: "Inside Fridge Clean",
		price: 30,
		category: "kitchen"
	},
	{
		id: "inside-oven",
		name: "Inside Oven Clean",
		price: 35,
		category: "kitchen"
	}
];

// Regular service addons
export const regularAddons: Addon[] = [
	{
		id: "inside-fridge",
		name: "Inside Fridge Clean",
		price: 30,
		category: "kitchen"
	},
	{
		id: "inside-oven",
		name: "Inside Oven Clean",
		price: 35,
		category: "kitchen"
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
