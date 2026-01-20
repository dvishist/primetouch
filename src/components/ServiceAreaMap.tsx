import { Container, Title, Text } from "@mantine/core";

export default function ServiceAreaMap() {
	return (
		<section className="py-16 bg-white">
			<Container size="lg">
				<Title order={2} ta="center" mb="md" className="text-gray-700 font-bold text-3xl">
					Our Service Area
				</Title>
				<Text ta="center" c="dimmed" mb="xl" size="lg">
					We proudly serve Melbourne and surrounding areas
				</Text>

				<div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402974.49090332645!2d144.69733814999997!3d-37.970638449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1737397200000!5m2!1sen!2sus"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="Melbourne Service Area"
					/>
				</div>
			</Container>
		</section>
	);
}
