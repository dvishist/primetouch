import Head from "next/head";
import { Container, Title, Text } from "@mantine/core";
import BookingWizard from "@/components/booking/BookingWizard";

export default function BookPage() {
	return (
		<>
			<Head>
				<title>Book a Service | PrimeTouch Cleaning</title>
				<meta name="description" content="Book your cleaning service with PrimeTouch" />
			</Head>
			<Container size="xl" py="xl">
				<Title order={1} ta="center" mb="md">
					Book Your Cleaning Service
				</Title>
				<Text ta="center" c="dimmed" mb="xl">
					Complete the form below to schedule your cleaning appointment
				</Text>
				<BookingWizard />
			</Container>
		</>
	);
}
