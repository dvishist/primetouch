import { Stack, Title, Text, Group, Card, Badge } from "@mantine/core";
import { BookingType, CleaningTeam } from "@/types/booking";

interface DurationTeamStepProps {
	duration: number | null;
	team: CleaningTeam | null;
	bookingType: BookingType | null;
	onUpdate: (duration: number, team: CleaningTeam) => void;
}

const durations = [2, 3, 4, 5, 6, 8];

export default function DurationTeamStep({
	duration,
	team,
	bookingType,
	onUpdate
}: DurationTeamStepProps) {
	if (!bookingType) {
		return <Text c="dimmed">Please select a booking type first</Text>;
	}

	return (
		<Stack gap="xl" mt="md">
			<div>
				<Title order={3} mb="md">
					Select Duration
				</Title>
				<Group>
					{durations.map(d => (
						<Card
							key={d}
							padding="lg"
							radius="md"
							withBorder
							style={{
								cursor: "pointer",
								backgroundColor: duration === d ? "var(--mantine-color-blue-light)" : undefined,
								borderColor: duration === d ? "var(--mantine-color-blue-filled)" : undefined
							}}
							onClick={() => team && onUpdate(d, team)}
						>
							<Text size="xl" fw={700}>
								{d} hours
							</Text>
						</Card>
					))}
				</Group>
			</div>

			<div>
				<Title order={3} mb="md">
					Select Team Size
				</Title>
				<Group>
					{(["1", "2"] as CleaningTeam[]).map(t => (
						<Card
							key={t}
							padding="lg"
							radius="md"
							withBorder
							style={{
								cursor: "pointer",
								backgroundColor: team === t ? "var(--mantine-color-blue-light)" : undefined,
								borderColor: team === t ? "var(--mantine-color-blue-filled)" : undefined
							}}
							onClick={() => duration && onUpdate(duration, t)}
						>
							<Stack gap="xs" align="center">
								<Text size="lg" fw={600} tt="capitalize">
									{t}
								</Text>
								<Badge>{t === "1" ? "1 cleaner" : "2 cleaners"}</Badge>
							</Stack>
						</Card>
					))}
				</Group>
			</div>
		</Stack>
	);
}
