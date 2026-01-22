import { Container, SimpleGrid, Text, Title } from "@mantine/core";
import { IconUsers, IconHome, IconStar, IconCalendar } from "@tabler/icons-react";

interface Stat {
	icon: React.ReactNode;
	number: string;
	label: string;
}

const stats: Stat[] = [
	{
		icon: <IconUsers size={40} className="text-blue-600" />,
		number: "500+",
		label: "Happy Customers"
	},
	{
		icon: <IconHome size={40} className="text-blue-600" />,
		number: "2,000+",
		label: "Homes Cleaned"
	},
	{
		icon: <IconStar size={40} className="text-blue-600" />,
		number: "4.9/5",
		label: "Average Rating"
	},
	{
		icon: <IconCalendar size={40} className="text-blue-600" />,
		number: "5+ Years",
		label: "In Business"
	}
];

export default function Stats() {
	return (
		<section className="py-16 bg-linear-to-r from-blue-600 to-blue-700 text-white">
			<Container size="lg">
				<div className="text-center mb-12 flex flex-col items-center">
					<Title order={2} className="text-white font-bold text-3xl mb-4">
						Trusted by Melbourne Residents
					</Title>
					<Text size="lg" className="text-blue-100 max-w-2xl mx-auto">
						Our numbers speak for themselves
					</Text>
				</div>

				<SimpleGrid cols={{ base: 2, sm: 2, md: 4 }} spacing="xl">
					{stats.map((stat, index) => (
						<div key={index} className="text-center">
							<div className="flex justify-center mb-4">
								<div className="p-4 rounded-full bg-white/10">{stat.icon}</div>
							</div>
							<Text size="xl" fw={700} className="text-white mb-2" style={{ fontSize: "2.5rem" }}>
								{stat.number}
							</Text>
							<Text size="lg" className="text-blue-100">
								{stat.label}
							</Text>
						</div>
					))}
				</SimpleGrid>
			</Container>
		</section>
	);
}
