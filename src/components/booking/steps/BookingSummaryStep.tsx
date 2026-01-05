import { Stack, Title, Text, Card, Group, Divider, Checkbox } from "@mantine/core";
import { BookingFormData, ContactPreference } from "@/types/booking";
import { bookingOptions } from "@/data/bookingOptions";

interface BookingSummaryStepProps {
	formData: BookingFormData;
	onContactPreferencesChange: (preferences: ContactPreference[]) => void;
}

export default function BookingSummaryStep({
	formData,
	onContactPreferencesChange
}: BookingSummaryStepProps) {
	const { bookingType, duration, bookingPeriod, customerDetails, contactPreferences } = formData;

	const bookingName = bookingOptions.find(option => option.id === bookingType)?.name;

	return (
		<Stack gap="lg" mt="md">
			<Card withBorder padding="lg" radius="md">
				<Title order={4} mb="md">
					Service Details
				</Title>
				<Stack gap="xs">
					<Group justify="start">
						<Text fw={500} c="dimmed">
							Service Type:
						</Text>
						<Text tt="capitalize">{bookingName || "Not selected"}</Text>
					</Group>
					<Group justify="start">
						<Text fw={500} c="dimmed">
							Duration:
						</Text>
						<Text>{duration ? `${duration} hours` : "Not selected"}</Text>
					</Group>
					<Group justify="start">
						<Text fw={500} c="dimmed">
							Booking Period:
						</Text>
						<Text tt="capitalize">{bookingPeriod || "Not selected"}</Text>
					</Group>
				</Stack>
			</Card>

			<Card withBorder padding="lg" radius="md">
				<Title order={4} mb="md">
					Customer Information
				</Title>
				<Stack gap="xs">
					<Group justify="start">
						<Text fw={500} c="dimmed">
							Name:
						</Text>
						<Text>
							{customerDetails.firstName} {customerDetails.lastName}
						</Text>
					</Group>
					<Group justify="start">
						<Text fw={500} c="dimmed">
							Email:
						</Text>
						<Text>{customerDetails.email}</Text>
					</Group>
					<Group justify="start">
						<Text fw={500} c="dimmed">
							Phone:
						</Text>
						<Text>{customerDetails.phone}</Text>
					</Group>
					<Divider my="xs" />
					<Group justify="start" align="flex-start">
						<Text fw={500} c="dimmed">
							Address:
						</Text>
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

			<Card withBorder padding="lg" radius="md">
				<Title order={4} mb="md">
					Contact Preference
				</Title>
				<Text size="sm" c="dimmed" mb="md">
					How would you like us to contact you?
				</Text>
				<div className="flex gap-3">
					<Checkbox
						label="Call"
						checked={contactPreferences.includes("call")}
						onChange={e => {
							const newPreferences = e.currentTarget.checked
								? ([...contactPreferences, "call"] as ContactPreference[])
								: contactPreferences.filter(p => p !== "call");
							onContactPreferencesChange(newPreferences);
						}}
					/>
					<Checkbox
						label="SMS"
						checked={contactPreferences.includes("sms")}
						onChange={e => {
							const newPreferences = e.currentTarget.checked
								? ([...contactPreferences, "sms"] as ContactPreference[])
								: contactPreferences.filter(p => p !== "sms");
							onContactPreferencesChange(newPreferences);
						}}
					/>
					<Checkbox
						label="Email"
						checked={contactPreferences.includes("email")}
						onChange={e => {
							const newPreferences = e.currentTarget.checked
								? ([...contactPreferences, "email"] as ContactPreference[])
								: contactPreferences.filter(p => p !== "email");
							onContactPreferencesChange(newPreferences);
						}}
					/>
				</div>
			</Card>
		</Stack>
	);
}
