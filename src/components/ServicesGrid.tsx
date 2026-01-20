import { Card, SimpleGrid, Container, Title, Text, Button, Group, Collapse } from "@mantine/core";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { bookingOptions } from "@/data/bookingOptions";
import { BookingOption } from "@/types/booking";
import onceOffImg from "@/assets/banner.jpg";
import regularImg from "@/assets/banner2.jpg";
import endOfLeaseImg from "@/assets/banner3.jpg";
import airbnbImg from "@/assets/services/airbnb.png";

const serviceImages: Record<string, any> = {
	"once-off": onceOffImg,
	regular: regularImg,
	"end-of-lease": endOfLeaseImg,
	airbnb: airbnbImg
};

const getPricingDisplay = (option: BookingOption): string => {
	if (option.id === "end-of-lease") {
		const minPrice = Math.min(...option.pricing.map(p => p.pricePerHour));
		return `FROM $${minPrice}/HRO`;
	}

	const firstPrice = option.pricing[0];
	if (firstPrice.minHours ?? 0 > 0) {
		return `FROM $${firstPrice.pricePerHour}/HR FOR ${firstPrice.minHours} HOURS`;
	}
	return `FROM $${firstPrice.pricePerHour}`;
};

const getPricingDetails = (option: BookingOption): string[] => {
	if (option.id === "end-of-lease") {
		return option.pricing.map(p => `${p.period}: $${p.pricePerHour}`);
	}

	const firstPrice = option.pricing[0];
	if (firstPrice.minHours ?? 0 > 0) {
		const details = [];
		for (let hours = firstPrice.minHours ?? 0; hours <= (firstPrice.minHours ?? 0) + 2; hours++) {
			const cost = firstPrice.pricePerHour * hours;
			details.push(`${hours} hours: $${cost}`);
		}
		if (firstPrice.additionalHourPrice) {
			details.push(`Additional hours: $${firstPrice.additionalHourPrice}/hr`);
		}
		return details;
	}

	return option.pricing.map(p => `${p.period}: $${p.pricePerHour}`);
};

export default function ServicesGrid() {
	return (
		<section className="py-16 bg-linear-to-b from-white to-gray-50">
			<Container size="lg" className="w-full">
				<Title order={2} ta="center" mb="xl" className="text-gray-700 font-bold text-3xl">
					Book A Service
				</Title>

				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 w-full">
					{bookingOptions.map((option, index) => (
						<Link
							key={option.id}
							href="/book"
							className="group flex flex-col items-center text-center no-underline"
						>
							<div className="relative w-32 h-32 sm:w-48 sm:h-48 border-2 border-gray-300 flex justify-center items-center rounded-full transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:scale-105 overflow-hidden bg-white">
								<div className="absolute inset-0 rounded-full overflow-hidden">
									<Image
										src={serviceImages[option.id]}
										alt={option.name}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-110"
									/>
								</div>
							</div>

							<Text
								size="sm"
								fw={600}
								mt="xs"
								className="text-gray-800 group-hover:text-blue-600 transition-colors text-sm sm:text-base"
							>
								{option.name}
							</Text>
						</Link>
					))}
				</div>
			</Container>
		</section>
	);
}
