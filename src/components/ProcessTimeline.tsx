import { Container, Title, Text, Timeline } from "@mantine/core";
import {
	IconCalendar,
	IconClipboardCheck,
	IconSparkles,
	IconStar,
	IconMessageCircle
} from "@tabler/icons-react";

export default function ProcessTimeline() {
	return (
		<section className="py-16 bg-linear-to-b from-white to-gray-50">
			<Container size="md">
				<div className="text-center mb-12">
					<Title order={2} className="text-gray-800 font-bold text-3xl mb-4">
						Simple 5-Step Process
					</Title>
					<Text size="lg" c="dimmed" className="max-w-2xl mx-auto">
						From booking to sparkling clean - here's how we make it easy
					</Text>
				</div>

				<Timeline
					active={5}
					bulletSize={50}
					lineWidth={3}
					color="blue"
					classNames={{
						itemBullet: "border-4 border-white shadow-md"
					}}
				>
					<Timeline.Item
						bullet={<IconMessageCircle size={24} />}
						title={<Text fw={600} size="lg">1. Get in Touch</Text>}
					>
						<Text c="dimmed" size="sm" mt={4}>
							Contact us via phone, email, or our online form. Tell us about your cleaning
							needs and property details.
						</Text>
					</Timeline.Item>

					<Timeline.Item
						bullet={<IconClipboardCheck size={24} />}
						title={<Text fw={600} size="lg">2. Receive Your Quote</Text>}
					>
						<Text c="dimmed" size="sm" mt={4}>
							We'll provide a transparent, detailed quote with no hidden fees. You'll know
							exactly what you're paying for.
						</Text>
					</Timeline.Item>

					<Timeline.Item
						bullet={<IconCalendar size={24} />}
						title={<Text fw={600} size="lg">3. Schedule Your Clean</Text>}
					>
						<Text c="dimmed" size="sm" mt={4}>
							Choose a date and time that works for you. We offer flexible scheduling
							including same-day service when available.
						</Text>
					</Timeline.Item>

					<Timeline.Item
						bullet={<IconSparkles size={24} />}
						title={<Text fw={600} size="lg">4. We Clean</Text>}
					>
						<Text c="dimmed" size="sm" mt={4}>
							Our professional team arrives on time with all supplies and equipment. Sit
							back while we transform your space.
						</Text>
					</Timeline.Item>

					<Timeline.Item
						bullet={<IconStar size={24} />}
						title={<Text fw={600} size="lg">5. Enjoy Your Spotless Space</Text>}
					>
						<Text c="dimmed" size="sm" mt={4}>
							Walk into a fresh, clean environment. Not satisfied? We'll make it right with
							our 100% satisfaction guarantee.
						</Text>
					</Timeline.Item>
				</Timeline>

				<div className="mt-12 text-center bg-blue-50 p-6 rounded-lg border border-blue-200">
					<Text size="md" fw={500} className="text-gray-800">
						⏱️ From inquiry to completion, most bookings are completed within 48 hours!
					</Text>
				</div>
			</Container>
		</section>
	);
}
