import { Card, Text, Badge, List, ThemeIcon, Collapse, Button, Group, Table } from "@mantine/core";
import { IconCheck, IconChevronDown, IconChevronUp, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { BookingType, BookingPeriod, LeaseType, CleanLevel } from "@/types/booking";
import { bookingOptions } from "@/data/bookingOptions";

interface Props {
	selected: BookingType | null;
	selectedPeriod: BookingPeriod | LeaseType | null;
	selectedDuration: number | null;
	selectedCleanLevel: CleanLevel | null;
	onPeriodSelect: (period: BookingPeriod | LeaseType) => void;
	onDurationSelect: (hours: number) => void;
	onCleanLevelSelect: (cleanLevel: CleanLevel) => void;
}

export default function BookingTypeStep({
	selected,
	selectedPeriod,
	selectedDuration,
	selectedCleanLevel,
	onPeriodSelect,
	onDurationSelect,
	onCleanLevelSelect
}: Props) {
	const [expandedFeatures, setExpandedFeatures] = useState(false);
	const [expandedPricing, setExpandedPricing] = useState(false);
	const [expandedComparison, setExpandedComparison] = useState(false);

	const toggleFeatures = () => {
		setExpandedFeatures(prev => !prev);
	};

	const togglePricing = () => {
		setExpandedPricing(prev => !prev);
	};

	const toggleComparison = () => {
		setExpandedComparison(prev => !prev);
	};

	// Find the selected option
	const selectedOption = bookingOptions.find(option => option.id === selected);

	if (!selectedOption) {
		return null;
	}

	return (
		<Card shadow="sm" padding="lg" radius="md" withBorder mt="md">
			<Text size="lg" fw={700} mb="xs">
				{selectedOption.name}
			</Text>
			<Text size="sm" c="dimmed" mb="md">
				{selectedOption.description}
			</Text>
			<Badge color="brand" variant="light" mb="md">
				From ${selectedOption.pricing[0].pricePerHour}/hr
				{selectedOption.pricing[0].minHours && ` for ${selectedOption.pricing[0].minHours} hours`}
			</Badge>

			<div>
				<Text size="sm" fw={500} mb="xs">
					Select Booking Period:
				</Text>
				<Group gap="xs" mb="md">
					{selectedOption.bookingPeriods.map(period => (
						<Button
							key={period}
							size="xs"
							variant={selectedPeriod === period ? "filled" : "outline"}
							color="brand"
							onClick={() => onPeriodSelect(period)}
						>
							{period === "once-off"
								? "Once-off"
								: period.charAt(0).toUpperCase() + period.slice(1)}
						</Button>
					))}
				</Group>
				{selectedOption.id !== "end-of-lease" &&
					(() => {
						const selectedPricing = selectedOption.pricing.find(p => p.period === selectedPeriod);
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
											onClick={() => onDurationSelect(hours)}
										>
											{hours} hours
										</Button>
									))}
								</Group>
							</>
						);
					})()}
			</div>

			{selectedOption.supportsCleanLevel && (
				<>
					<Text size="sm" fw={500} mb="xs" mt="md">
						Select Clean Level:
					</Text>
					<Group gap="xs" mb="md">
						<Button
							size="sm"
							variant={selectedCleanLevel === "normal" ? "filled" : "outline"}
							color="brand"
							onClick={() => onCleanLevelSelect("normal")}
						>
							Normal Clean
						</Button>
						<Button
							size="sm"
							variant={selectedCleanLevel === "deep" ? "filled" : "outline"}
							color="brand"
							onClick={() => onCleanLevelSelect("deep")}
						>
							Deep Clean
						</Button>
					</Group>

					<Button
						variant="subtle"
						size="xs"
						fullWidth
						onClick={toggleComparison}
						rightSection={
							expandedComparison ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />
						}
						mb="xs"
					>
						{expandedComparison ? "Hide" : "See"} Comparison
					</Button>
					<Collapse in={expandedComparison} mb="md">
						<div style={{ overflowX: "auto" }}>
							<Table striped highlightOnHover withTableBorder withColumnBorders>
								<Table.Thead>
									<Table.Tr>
										<Table.Th style={{ width: "50%", fontSize: "12px" }}>Task</Table.Th>
										<Table.Th style={{ textAlign: "center", width: "15%", fontSize: "12px" }}>
											Normal Clean
										</Table.Th>
										<Table.Th style={{ textAlign: "center", width: "15%", fontSize: "12px" }}>
											Deep Clean
										</Table.Th>
									</Table.Tr>
								</Table.Thead>
								<Table.Tbody>
									{selectedOption.cleanLevelComparison?.map((area, areaIdx) => (
										<>
											<Table.Tr key={`area-${areaIdx}`}>
												<Table.Td
													colSpan={3}
													style={{
														backgroundColor: "var(--mantine-color-brand-filled)",
														color: "white",
														fontWeight: "bold",
														fontSize: "12px"
													}}
												>
													{area.area}
												</Table.Td>
											</Table.Tr>
											{area.tasks.map((task, taskIdx) => (
												<Table.Tr key={`task-${areaIdx}-${taskIdx}`}>
													<Table.Td style={{ fontSize: "12px" }}>{task.task}</Table.Td>
													<Table.Td style={{ textAlign: "center" }}>
														{task.normalClean ? (
															<IconCheck size={16} color="green" />
														) : (
															<IconX size={16} color="red" />
														)}
													</Table.Td>
													<Table.Td style={{ textAlign: "center" }}>
														{task.deepClean ? (
															<IconCheck size={16} color="green" />
														) : (
															<IconX size={16} color="red" />
														)}
													</Table.Td>
												</Table.Tr>
											))}
										</>
									))}
								</Table.Tbody>
							</Table>
						</div>
					</Collapse>
				</>
			)}

			<Button
				variant="subtle"
				size="xs"
				fullWidth
				onClick={togglePricing}
				rightSection={expandedPricing ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
				mb="xs"
			>
				{expandedPricing ? "Hide" : "See"} Full Pricing
			</Button>
			<Collapse in={expandedPricing} mb="md">
				<div style={{ fontSize: "14px", lineHeight: "1.6" }}>
					{selectedOption.pricing.map((price, idx) => (
						<div key={idx} style={{ marginBottom: "8px" }}>
							<strong>
								{price.period === "once-off"
									? "Once-off"
									: price.period.charAt(0).toUpperCase() + price.period.slice(1)}
								:
							</strong>{" "}
							${price.pricePerHour}
							{price.minHours ? "/hr" : ""}
							{price.additionalHourPrice && ` (additional hours: $${price.additionalHourPrice}/hr)`}
							{price.minHours ? ` - minimum ${price.minHours} hours` : ""}
						</div>
					))}
				</div>
			</Collapse>
			<Button
				variant="subtle"
				size="xs"
				fullWidth
				onClick={toggleFeatures}
				rightSection={
					expandedFeatures ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />
				}
				mb="xs"
			>
				{expandedFeatures ? "Hide" : "More"} Details
			</Button>

			<Collapse in={expandedFeatures}>
				<List
					spacing="xs"
					size="sm"
					icon={
						<ThemeIcon color="brand" size={20} radius="xl">
							<IconCheck size={12} />
						</ThemeIcon>
					}
				>
					{selectedOption.features.map((feature, idx) => (
						<List.Item key={idx}>{feature}</List.Item>
					))}
				</List>
			</Collapse>
		</Card>
	);
}
