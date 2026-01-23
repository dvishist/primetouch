import { Container, SimpleGrid, Paper, Text, Group } from "@mantine/core";
import {
	IconShieldCheck,
	IconLeaf,
	IconClock24,
	IconAward,
	IconThumbUp,
	IconLock
} from "@tabler/icons-react";

interface TrustBadge {
	icon: React.ReactNode;
	text: string;
	subtext?: string;
}

const badges: TrustBadge[] = [
	// {
	// 	icon: <IconShieldCheck size={32} className="text-green-600" />,
	// 	text: "Fully Insured",
	// 	subtext: "Complete Coverage"
	// },
	{
		icon: <IconThumbUp size={32} className="text-blue-600" />,
		text: "Satisfaction Guaranteed",
		subtext: "100% Guarantee"
	},
	{
		icon: <IconLeaf size={32} className="text-green-600" />,
		text: "Eco-Friendly",
		subtext: "Safe Products"
	},
	{
		icon: <IconClock24 size={32} className="text-blue-600" />,
		text: "24hr Response",
		subtext: "Quick Booking"
	},
	{
		icon: <IconAward size={32} className="text-yellow-600" />,
		text: "Experienced",
		subtext: "2+ years"
	},

	{
		icon: <IconLock size={32} className="text-gray-600" />,
		text: "Background Checked",
		subtext: "Trusted Team"
	}
];

export default function TrustBadges() {
	return (
		<section className="py-12 bg-gray-50 border-y border-gray-200">
			<Container size="lg">
				<div className="flex justify-center">
					<SimpleGrid cols={{ base: 2, sm: 3, md: 5 }} spacing="md" className="w-full max-w-5xl">
						{badges.map((badge, index) => (
							<Paper
								key={index}
								className="flex flex-col items-center justify-center text-center p-4 hover:shadow-md transition-shadow bg-white"
								radius="md"
							>
								<div className="mb-2">{badge.icon}</div>
								<Text size="sm" fw={600} className="text-gray-800 leading-tight">
									{badge.text}
								</Text>
								{badge.subtext && (
									<Text size="xs" c="dimmed" className="mt-1">
										{badge.subtext}
									</Text>
								)}
							</Paper>
						))}
					</SimpleGrid>
				</div>
			</Container>
		</section>
	);
}
