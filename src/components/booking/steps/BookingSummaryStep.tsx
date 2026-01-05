import { Stack, Title, Text, Card, Group, Divider } from "@mantine/core";
import { BookingFormData } from "@/types/booking";

interface BookingSummaryStepProps {
	formData: BookingFormData;
}

export default function BookingSummaryStep({ formData }: BookingSummaryStepProps) {
	const { bookingType, duration, cleaningTeam, customerDetails } = formData;

	return (
		<Stack gap="lg" mt="md">
			<Card withBorder padding="lg" radius="md">
				<Title order={4} mb="md">
					Service Details
				</Title>
				<Stack gap="xs">
					<Group justify="space-between">
						<Text fw={500}>Service Type:</Text>
						<Text tt="capitalize">{bookingType || "Not selected"}</Text>
					</Group>
					<Group justify="space-between">
						<Text fw={500}>Duration:</Text>
						<Text>{duration ? `${duration} hours` : "Not selected"}</Text>
					</Group>
					<Group justify="space-between">
						<Text fw={500}>Team Size:</Text>
						<Text tt="capitalize">{cleaningTeam || "Not selected"}</Text>
					</Group>
				</Stack>
			</Card>

			<Card withBorder padding="lg" radius="md">
				<Title order={4} mb="md">
					Customer Information
				</Title>
				<Stack gap="xs">
					<Group justify="space-between">
						<Text fw={500}>Name:</Text>
						<Text>
							{customerDetails.firstName} {customerDetails.lastName}
						</Text>
					</Group>
					<Group justify="space-between">
						<Text fw={500}>Email:</Text>
						<Text>{customerDetails.email}</Text>
					</Group>
					<Group justify="space-between">
						<Text fw={500}>Phone:</Text>
						<Text>{customerDetails.phone}</Text>
					</Group>
					<Divider my="xs" />
					<Group justify="space-between" align="flex-start">
						<Text fw={500}>Address:</Text>
						<Text ta="right" style={{ maxWidth: "60%" }}>
							{customerDetails.address}
							{customerDetails.city && `, ${customerDetails.city}`}
							{customerDetails.postalCode && ` ${customerDetails.postalCode}`}
						</Text>
					</Group>
					{customerDetails.notes && (
						<>
							<Divider my="xs" />
							<div>
								<Text fw={500} mb="xs">
									Notes:
								</Text>
								<Text c="dimmed">{customerDetails.notes}</Text>
							</div>
						</>
					)}
				</Stack>
			</Card>
		</Stack>
	);
}
