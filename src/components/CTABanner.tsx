import { Container, Title, Text, Button, Group } from "@mantine/core";
import { IconPhone, IconCalendar } from "@tabler/icons-react";
import Link from "next/link";

interface CTABannerProps {
	variant?: "primary" | "secondary";
}

export default function CTABanner({ variant = "primary" }: CTABannerProps) {
	if (variant === "secondary") {
		return (
			<section className="py-12 bg-linear-to-r from-gray-800 to-gray-900 text-white">
				<Container size="md">
					<div className="text-center">
						<Title order={2} className="text-white font-bold text-2xl mb-4">
							Ready for a Spotless Home?
						</Title>
						<Text size="lg" className="text-gray-300 mb-6">
							Book your cleaning service today and experience the PrimeTouch difference
						</Text>
						<Group justify="center" gap="md">
							<Button
								component={Link}
								href="/book"
								size="lg"
								leftSection={<IconCalendar size={20} />}
								variant="white"
								color="dark"
							>
								Book Online Now
							</Button>
							<Button
								component="a"
								href="tel:0406179939"
								size="lg"
								leftSection={<IconPhone size={20} />}
								variant="outline"
								color="white"
							>
								Call 0406 179 939
							</Button>
						</Group>
					</div>
				</Container>
			</section>
		);
	}

	return (
		<section className="py-16 bg-linear-to-r from-blue-600 to-blue-700 text-white">
			<Container size="md">
				<div className="text-center">
					<Title order={2} className="text-white font-bold text-3xl mb-4">
						Get Your Free Quote Today
					</Title>
					<Text size="xl" className="text-blue-100 mb-8">
						Professional cleaning services across Melbourne • Fast response • Transparent pricing
					</Text>
					<Group justify="center" gap="md">
						<Button
							component={Link}
							href="/book"
							size="xl"
							leftSection={<IconCalendar size={24} />}
							variant="white"
							color="blue"
							className="font-semibold"
						>
							Book Online Now
						</Button>
						<Button
							component="a"
							href="tel:0412345678"
							size="xl"
							leftSection={<IconPhone size={24} />}
							variant="outline"
							color="white"
							className="font-semibold"
						>
							Call 0412 345 678
						</Button>
					</Group>
					<Text size="sm" className="text-blue-200 mt-6">
						Same-day service available • No hidden fees • 100% satisfaction guarantee
					</Text>
				</div>
			</Container>
		</section>
	);
}
