import { Grid, Card, Text, Badge, List, ThemeIcon, Collapse, Button, Group } from "@mantine/core";
import { IconCheck, IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";
import { BookingType, BookingPeriod } from "@/types/booking";
import { bookingOptions } from "@/data/bookingOptions";

interface Props {
	selected: BookingType | null;
	selectedPeriod: BookingPeriod | null;
	selectedDuration: number | null;
	onSelect: (type: BookingType) => void;
	onPeriodSelect: (period: BookingPeriod) => void;
	onDurationSelect: (hours: number) => void;
}

export default function BookingTypeStep({
	selected,
	selectedPeriod,
	selectedDuration,
	onSelect,
	onPeriodSelect,
	onDurationSelect
}: Props) {
	const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
	const [expandedPricing, setExpandedPricing] = useState<Record<string, boolean>>({});

	const toggleFeatures = (id: string) => {
		setExpandedCards(prev => ({
			...prev,
			[id]: !prev[id]
		}));
	};

	const togglePricing = (id: string) => {
		setExpandedPricing(prev => ({
			...prev,
			[id]: !prev[id]
		}));
	};

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
							backgroundColor: selected === option.id ? "#eef3f7" : undefined
						}}
						onClick={() => onSelect(option.id)}
					>
						<Text size="lg" fw={700} mb="xs">
							{option.name}
						</Text>
						<Text size="sm" c="dimmed" mb="md">
							{option.description}
						</Text>
						<Badge color="brand" variant="light" mb="md">
							From ${option.pricing[0].pricePerHour}/hr
							{option.pricing[0].minHours && ` for ${option.pricing[0].minHours} hours`}
						</Badge>

						{selected === option.id && (
							<div>
								<Text size="sm" fw={500} mb="xs">
									Select Booking Period:
								</Text>
								<Group gap="xs" mb="md">
									{option.bookingPeriods.map(period => (
										<Button
											key={period}
											size="xs"
											variant={selectedPeriod === period ? "filled" : "outline"}
											color="brand"
											onClick={e => {
												e.stopPropagation();
												onPeriodSelect(period);
											}}
										>
											{period === "once-off"
												? "Once-off"
												: period.charAt(0).toUpperCase() + period.slice(1)}
										</Button>
									))}
								</Group>
								{(() => {
									const selectedPricing = option.pricing.find(p => p.period === selectedPeriod);
									const minHours = selectedPricing?.minHours || 2;
									const maxHours = 8;
									const durationOptions = Array.from(
										{ length: maxHours - minHours + 1 },
										(_, i) => minHours + i
									);

									return (
										<>
											<Text size="sm" fw={500} mb="xs">
												Select Duration:
											</Text>
											<Group gap="xs" mb="md">
												{durationOptions.map(hours => (
													<Button
														key={hours}
														size="xs"
														variant={selectedDuration === hours ? "filled" : "outline"}
														color="brand"
														onClick={e => {
															e.stopPropagation();
															onDurationSelect(hours);
														}}
													>
														{hours} hours
													</Button>
												))}
											</Group>
										</>
									);
								})()}
							</div>
						)}

						<Button
							variant="subtle"
							size="xs"
							fullWidth
							onClick={e => {
								e.stopPropagation();
								togglePricing(option.id);
							}}
							rightSection={
								expandedPricing[option.id] ? (
									<IconChevronUp size={16} />
								) : (
									<IconChevronDown size={16} />
								)
							}
							mb="xs"
						>
							{expandedPricing[option.id] ? "Hide" : "See"} Full Pricing
						</Button>
						<Collapse in={expandedPricing[option.id]} mb="md">
							<div style={{ fontSize: "14px", lineHeight: "1.6" }}>
								{option.pricing.map((price, idx) => (
									<div key={idx} style={{ marginBottom: "8px" }}>
										<strong>
											{price.period === "once-off"
												? "Once-off"
												: price.period.charAt(0).toUpperCase() + price.period.slice(1)}
											:
										</strong>{" "}
										${price.pricePerHour}/hr
										{price.additionalHourPrice &&
											` (additional hours: $${price.additionalHourPrice}/hr)`}
										{price.minHours && ` - Minimum ${price.minHours} hours`}
									</div>
								))}
							</div>
						</Collapse>
						<Button
							variant="subtle"
							size="xs"
							fullWidth
							onClick={e => {
								e.stopPropagation();
								toggleFeatures(option.id);
							}}
							rightSection={
								expandedCards[option.id] ? (
									<IconChevronUp size={16} />
								) : (
									<IconChevronDown size={16} />
								)
							}
							mb="xs"
						>
							{expandedCards[option.id] ? "Hide" : "More"} Details
						</Button>

						<Collapse in={expandedCards[option.id]}>
							<List
								spacing="xs"
								size="sm"
								icon={
									<ThemeIcon color="brand" size={20} radius="xl">
										<IconCheck size={12} />
									</ThemeIcon>
								}
							>
								{option.features.map((feature, idx) => (
									<List.Item key={idx}>{feature}</List.Item>
								))}
							</List>
						</Collapse>
					</Card>
				</Grid.Col>
			))}
		</Grid>
	);
}
