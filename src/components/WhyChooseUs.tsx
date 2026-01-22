import { Container, Title, Text, SimpleGrid, Card } from "@mantine/core";
import {
	IconShieldCheck,
	IconClock,
	IconSparkles,
	IconHeartHandshake,
	IconCertificate,
	IconPigMoney
} from "@tabler/icons-react";

interface Reason {
	icon: React.ReactNode;
	title: string;
	description: string;
}

const reasons: Reason[] = [
	{
		icon: <IconShieldCheck size={40} className="text-blue-600" />,
		title: "Fully Insured & Vetted",
		description:
			"All our cleaners are background-checked, trained, and fully insured for your peace of mind."
	},
	{
		icon: <IconClock size={40} className="text-blue-600" />,
		title: "Reliable & On-Time",
		description:
			"We value your time. Our team arrives punctually and completes work within the scheduled timeframe."
	},
	{
		icon: <IconSparkles size={40} className="text-blue-600" />,
		title: "Exceptional Quality",
		description:
			"We use professional-grade equipment and eco-friendly products to deliver spotless results every time."
	},
	{
		icon: <IconHeartHandshake size={40} className="text-blue-600" />,
		title: "100% Satisfaction Guarantee",
		description:
			"Not happy? We'll re-clean any areas of concern within 24 hours at no extra charge."
	},
	{
		icon: <IconCertificate size={40} className="text-blue-600" />,
		title: "Experienced Professionals",
		description:
			"Our team has years of experience in residential and commercial cleaning across Melbourne."
	},
	{
		icon: <IconPigMoney size={40} className="text-blue-600" />,
		title: "Transparent Pricing",
		description:
			"No hidden fees or surprises. You'll know exactly what you're paying before we start."
	}
];

export default function WhyChooseUs() {
	return (
		<section className="py-16 bg-linear-to-b from-blue-50 to-white">
			<Container size="lg">
				<div className="text-center mb-12 w-full flex flex-col items-center">
					<Title order={2} className="text-gray-800 font-bold text-3xl mb-4">
						Why Choose PrimeTouch?
					</Title>
					<Text size="lg" c="dimmed" className="max-w-2xl mx-auto">
						We're not just another cleaning company. Here's what makes us the preferred choice for
						homes and businesses across Melbourne.
					</Text>
				</div>

				<SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
					{reasons.map((reason, index) => (
						<Card
							key={index}
							shadow="sm"
							padding="xl"
							radius="md"
							withBorder
							className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
						>
							<div className="flex flex-col items-center text-center">
								<div className="mb-4 p-3 rounded-full bg-blue-50">{reason.icon}</div>
								<Title order={4} className="mb-3 text-gray-800">
									{reason.title}
								</Title>
								<Text size="sm" c="dimmed" className="leading-relaxed">
									{reason.description}
								</Text>
							</div>
						</Card>
					))}
				</SimpleGrid>

				<div className="mt-12 text-center">
					<div className="inline-block bg-white border-2 border-blue-600 rounded-xl p-6 shadow-lg">
						<Text size="lg" fw={600} className="text-blue-600 mb-2">
							Join 500+ Happy Customers in Melbourne
						</Text>
						<Text c="dimmed">Experience the PrimeTouch difference today</Text>
					</div>
				</div>
			</Container>
		</section>
	);
}
