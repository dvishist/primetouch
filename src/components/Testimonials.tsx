import { Container, Title, Text, Card, Avatar, Rating, SimpleGrid } from "@mantine/core";
import { IconQuote } from "@tabler/icons-react";

interface Testimonial {
	id: number;
	name: string;
	location: string;
	rating: number;
	text: string;
	service: string;
	date: string;
}

const testimonials: Testimonial[] = [
	{
		id: 1,
		name: "Sarah Johnson",
		location: "Melbourne CBD",
		rating: 5,
		text: "Outstanding service! The team was professional, thorough, and left my apartment spotless. I've been using PrimeTouch for 6 months now and couldn't be happier.",
		service: "Regular Cleaning",
		date: "2 weeks ago"
	},
	{
		id: 2,
		name: "Michael Chen",
		location: "Richmond",
		rating: 5,
		text: "The end of lease clean was exceptional. Our property manager was impressed and we got our full bond back. Highly recommend!",
		service: "End of Lease Clean",
		date: "1 month ago"
	},
	{
		id: 3,
		name: "Emily Taylor",
		location: "South Yarra",
		rating: 5,
		text: "I run a small Airbnb and PrimeTouch has been a lifesaver. Always reliable, quick turnarounds, and my guests always comment on how clean the place is.",
		service: "Airbnb Cleaning",
		date: "3 weeks ago"
	},
	{
		id: 4,
		name: "David Williams",
		location: "Brunswick",
		rating: 5,
		text: "Very professional team. They brought all their own supplies and the deep clean they did was incredible. Every corner sparkled!",
		service: "Deep Clean",
		date: "1 week ago"
	},
	{
		id: 5,
		name: "Jessica Martinez",
		location: "Preston",
		rating: 5,
		text: "Amazing service! Very thorough and paid attention to detail. The booking process was easy and they showed up exactly on time.",
		service: "Once-off Clean",
		date: "4 days ago"
	},
	{
		id: 6,
		name: "James Anderson",
		location: "Footscray",
		rating: 5,
		text: "Best cleaning service I've used in Melbourne. The team is friendly, efficient, and does an excellent job every time. Worth every dollar!",
		service: "Regular Cleaning",
		date: "2 months ago"
	}
];

export default function Testimonials() {
	return (
		<section className="py-16 bg-linear-to-b from-gray-50 to-white">
			<Container size="lg">
				<div className="text-center mb-12">
					<Title order={2} className="text-gray-800 font-bold text-3xl mb-4">
						What Our Customers Say
					</Title>
					<Text size="lg" c="dimmed" className="max-w-2xl mx-auto">
						Don't just take our word for it - hear from our satisfied customers who trust us with
						their homes and businesses.
					</Text>
					<div className="flex items-center justify-center gap-2 mt-4">
						<Rating value={5} readOnly size="lg" />
						<Text size="xl" fw={700} className="text-gray-800">
							4.9/5
						</Text>
						<Text size="sm" c="dimmed">
							(200+ reviews)
						</Text>
					</div>
				</div>

				<SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
					{testimonials.map(testimonial => (
						<Card
							key={testimonial.id}
							shadow="sm"
							padding="lg"
							radius="md"
							withBorder
							className="hover:shadow-lg transition-shadow duration-300"
						>
							<div className="flex items-start gap-3 mb-3">
								<Avatar color="blue" radius="xl" size="lg" className="shrink-0">
									{testimonial.name
										.split(" ")
										.map(n => n[0])
										.join("")}
								</Avatar>
								<div className="flex-1">
									<Text fw={600} size="sm" className="text-gray-800">
										{testimonial.name}
									</Text>
									<Text size="xs" c="dimmed">
										{testimonial.location}
									</Text>
									<Rating value={testimonial.rating} readOnly size="sm" mt={4} />
								</div>
							</div>

							<div className="relative">
								<IconQuote size={24} className="text-blue-100 absolute -top-2 -left-1" />
								<Text size="sm" className="text-gray-700 leading-relaxed pl-5">
									"{testimonial.text}"
								</Text>
							</div>

							<div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
								<Text size="xs" c="blue" fw={500}>
									{testimonial.service}
								</Text>
								<Text size="xs" c="dimmed">
									{testimonial.date}
								</Text>
							</div>
						</Card>
					))}
				</SimpleGrid>
			</Container>
		</section>
	);
}
