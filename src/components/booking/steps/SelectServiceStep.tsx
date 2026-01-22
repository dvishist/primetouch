import { Grid, Card, Text } from "@mantine/core";
import { BookingType } from "@/types/booking";
import { bookingOptions } from "@/data/bookingOptions";

interface Props {
	selected: BookingType | null;
	onSelect: (type: BookingType) => void;
}

export default function SelectServiceStep({ selected, onSelect }: Props) {
	return (
		<Grid mt="md">
			{bookingOptions.map(option => (
				<Grid.Col key={option.id} span={{ base: 12, md: 6 }}>
					<Card
						shadow="sm"
						padding="lg"
						radius="md"
						withBorder
						style={{
							cursor: "pointer",
							border: selected === option.id ? "2px solid #3e5c76" : undefined,
							backgroundColor: selected === option.id ? "#eef3f7" : undefined,
							transition: "all 0.2s ease"
						}}
						onClick={() => onSelect(option.id)}
					>
						<Text size="lg" fw={700} mb="xs">
							{option.name}
						</Text>
						<Text size="sm" c="dimmed">
							{option.description}
						</Text>
					</Card>
				</Grid.Col>
			))}
		</Grid>
	);
}
