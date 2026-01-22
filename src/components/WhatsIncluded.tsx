import { Container, Title, Text, SimpleGrid, List, ThemeIcon } from "@mantine/core";
import { IconCheck, IconSparkles } from "@tabler/icons-react";

interface ServiceIncluded {
	category: string;
	items: string[];
}

const includedServices: ServiceIncluded[] = [
	{
		category: "Bedroom & Living Areas",
		items: [
			"Dust all accessible surfaces",
			"Wipe down mirrors and glass",
			"Vacuum and mop floors",
			"Empty bins and replace liners",
			"Make beds (if requested)"
		]
	},
	{
		category: "Kitchen",
		items: [
			"Clean and sanitize countertops",
			"Wipe down appliances exterior",
			"Clean sink and taps",
			"Mop floors",
			"Clean microwave inside and out"
		]
	},
	{
		category: "Bathroom",
		items: [
			"Scrub and sanitize toilet",
			"Clean shower, bath and tiles",
			"Wipe down sink and mirrors",
			"Polish fixtures and taps",
			"Mop and sanitize floors"
		]
	},
	{
		category: "Additional Services",
		items: [
			"Inside oven cleaning (extra)",
			"Inside fridge (extra)",
			"Window cleaning (extra)",
			"Carpet steam cleaning (extra)",
			"Laundry services (extra)"
		]
	}
];

export default function WhatsIncluded() {
	return (
		<section className="py-16 bg-white">
			<Container size="lg">
				<div className="text-center mb-12">
					<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
						<IconSparkles size={32} className="text-blue-600" />
					</div>
					<Title order={2} className="text-gray-800 font-bold text-3xl mb-4">
						What's Included in Our Cleaning Service?
					</Title>
					<Text size="lg" c="dimmed" className="max-w-2xl mx-auto">
						Every clean includes our comprehensive checklist to ensure your space sparkles
					</Text>
				</div>

				<SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
					{includedServices.map((service, index) => (
						<div
							key={index}
							className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
						>
							<Title order={4} className="mb-4 text-gray-800">
								{service.category}
							</Title>
							<List
								spacing="sm"
								size="sm"
								icon={
									<ThemeIcon color="blue" size={20} radius="xl">
										<IconCheck size={12} />
									</ThemeIcon>
								}
							>
								{service.items.map((item, idx) => (
									<List.Item key={idx} className="text-gray-600">
										{item}
									</List.Item>
								))}
							</List>
						</div>
					))}
				</SimpleGrid>

				<div className="mt-8 text-center bg-blue-50 p-6 rounded-lg border border-blue-200">
					<Text size="md" fw={500} className="text-gray-800">
						💡 Need something specific? Let us know! We customize our services to meet your unique
						needs.
					</Text>
				</div>
			</Container>
		</section>
	);
}
