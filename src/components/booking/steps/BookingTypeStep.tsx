import {
	Card,
	Text,
	Collapse,
	Button,
	Group,
	Table,
	Textarea,
	Switch,
	Grid,
	Divider
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import {
	IconCheck,
	IconChevronDown,
	IconChevronUp,
	IconPlus,
	IconX,
	IconCalendar,
	IconClock
} from "@tabler/icons-react";
import { useState } from "react";
import { BookingType, BookingPeriod, LeaseType, CleanLevel, TimeSlot } from "@/types/booking";
import { bookingOptions } from "@/data/bookingOptions";
import { calculatePrice } from "./priceCalculator";

interface Props {
	selected: BookingType | null;
	selectedPeriod: BookingPeriod | LeaseType | null;
	selectedDuration: number;
	selectedCleanLevel: CleanLevel | null;
	selectedAddons: string[];
	preferredDate: Date | null;
	preferredTime: TimeSlot | null;
	bathrooms: number;
	toilets: number;
	beds: number;
	notes: string;
	onPeriodSelect: (period: BookingPeriod | LeaseType) => void;
	onDurationSelect: (hours: number) => void;
	onCleanLevelSelect: (cleanLevel: CleanLevel) => void;
	onAddonsSelect: (addons: string[]) => void;
	onDateSelect: (date: Date | null) => void;
	onTimeSelect: (time: TimeSlot) => void;
	onBathroomsChange: (count: number) => void;
	onToiletsChange: (count: number) => void;
	onBedsChange: (count: number) => void;
	onNotesChange: (notes: string) => void;
}

export default function BookingTypeStep({
	selected,
	selectedPeriod,
	selectedDuration,
	selectedCleanLevel,
	selectedAddons,
	preferredDate,
	preferredTime,
	bathrooms,
	toilets,
	beds,
	notes,
	onPeriodSelect,
	onDurationSelect,
	onCleanLevelSelect,
	onAddonsSelect,
	onDateSelect,
	onTimeSelect,
	onBathroomsChange,
	onToiletsChange,
	onBedsChange,
	onNotesChange
}: Props) {
	const [expandedComparison, setExpandedComparison] = useState(false);

	const toggleComparison = () => {
		setExpandedComparison(prev => !prev);
	};
	// Price calculation now imported from priceCalculator.ts

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
				{selectedOption.id === "once-off" && (
					<span className="font-bold">
						Fridge and oven cleaning are included in the Deep Clean option.
					</span>
				)}
			</Text>

			<div>
				{selectedOption.supportsCleanLevel && (
					<>
						<Text size="sm" fw={500} mb="xs">
							Select Type:
						</Text>
						<Group gap="xs" mb="md">
							<Button
								size="xs"
								variant={selectedCleanLevel === "standard" ? "filled" : "outline"}
								color="brand"
								onClick={() => onCleanLevelSelect("standard")}
							>
								Standard
							</Button>
							<Button
								size="xs"
								variant={selectedCleanLevel === "deep" ? "filled" : "outline"}
								color="brand"
								onClick={() => onCleanLevelSelect("deep")}
							>
								Deep Clean
							</Button>
						</Group>
					</>
				)}

				{selectedOption.id !== "once-off" && selectedOption.id !== "move-in" && (
					<>
						<Text size="sm" fw={500} mb="xs">
							{selectedOption.id === "end-of-lease"
								? "Select Number of Bedrooms"
								: "Select Booking Period:"}
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
					</>
				)}
				{selectedOption.id !== "end-of-lease" &&
					(() => {
						const selectedPricing = selectedOption.pricing.find(p => p.period === selectedPeriod);
						const minHours = selectedPricing?.minHours!;
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

			{/* Pricing Display - Universal for all services */}
			{selectedPeriod &&
				(() => {
					const pricing = selectedOption.pricing.find(p => p.period === selectedPeriod);
					if (!pricing) return null;

					// End-of-lease has fixed pricing
					if (selectedOption.id === "end-of-lease") {
						return (
							<div
								style={{ fontSize: "13px", lineHeight: "1.5", marginBottom: "16px", color: "#666" }}
							>
								<p>
									Price: ${pricing.pricePerHour}, This price includes 1 standard bathroom and
									toilet.
								</p>
							</div>
						);
					}

					// Services with clean level support
					if (selectedOption.supportsCleanLevel && selectedCleanLevel) {
						const isDeepClean = selectedCleanLevel === "deep";
						const rate =
							isDeepClean && pricing.deepCleanPricePerHour
								? pricing.deepCleanPricePerHour
								: pricing.pricePerHour;
						const additionalRate =
							isDeepClean && pricing.deepCleanAdditionalHourPrice
								? pricing.deepCleanAdditionalHourPrice
								: pricing.additionalHourPrice;

						return (
							<div
								style={{
									fontSize: "13px",
									lineHeight: "1.5",
									marginBottom: "16px",
									color: "#666"
								}}
							>
								<div>
									{isDeepClean ? "Deep Clean" : "Standard"} ${rate}
									{pricing.minHours && ` for the first ${pricing.minHours} hours`}
									{additionalRate && ` ($${additionalRate}/hr afterwards)`}
								</div>
							</div>
						);
					}

					// Services without clean level support (regular, airbnb)
					if (!selectedOption.supportsCleanLevel) {
						return (
							<div
								style={{ fontSize: "13px", lineHeight: "1.5", marginBottom: "16px", color: "#666" }}
							>
								<div>
									Price: ${pricing.pricePerHour}
									{pricing.minHours && ` for the first ${pricing.minHours} hours`}
									{pricing.additionalHourPrice &&
										` ($${pricing.additionalHourPrice}/hr afterwards)`}
								</div>
							</div>
						);
					}

					return null;
				})()}
			{/* End-of-lease specific: Bathrooms and Toilets counters */}
			{selectedOption.id === "end-of-lease" && selectedPeriod && (
				<div style={{ marginBottom: "16px" }}>
					<Group gap="xl" mb="md">
						<div style={{ flex: 1 }}>
							<Text size="sm" fw={500} mb="xs">
								Bathrooms
							</Text>
							<Group gap="xs">
								<Button
									size="xs"
									variant="outline"
									onClick={() => onBathroomsChange(Math.max(0, bathrooms - 1))}
								>
									-
								</Button>
								<Text size="sm" style={{ minWidth: "30px", textAlign: "center" }}>
									{bathrooms}
								</Text>
								<Button
									size="xs"
									variant="outline"
									onClick={() => onBathroomsChange(bathrooms + 1)}
								>
									+
								</Button>
							</Group>
							<Text size="xs" c="dimmed" mt={4}>
								$30 each
							</Text>
						</div>

						<div style={{ flex: 1 }}>
							<Text size="sm" fw={500} mb="xs">
								Toilets
							</Text>
							<Group gap="xs">
								<Button
									size="xs"
									variant="outline"
									className="rounded-full"
									onClick={() => onToiletsChange(Math.max(0, toilets - 1))}
								>
									-
								</Button>
								<Text size="sm" style={{ minWidth: "30px", textAlign: "center" }}>
									{toilets}
								</Text>
								<Button size="xs" variant="outline" onClick={() => onToiletsChange(toilets + 1)}>
									+
								</Button>
							</Group>
							<Text size="xs" c="dimmed" mt={4}>
								$10 each
							</Text>
						</div>
					</Group>
				</div>
			)}
			{/* Airbnb specific: beds counters */}
			{selectedOption.id === "airbnb" && selectedPeriod && (
				<div style={{ marginBottom: "16px" }}>
					<Group gap="xl" mb="md">
						<div style={{ flex: 1 }}>
							<Text size="sm" fw={500} mb="xs">
								Beds
							</Text>
							<Group gap="xs">
								<Button
									size="xs"
									variant="outline"
									onClick={() => onBedsChange(Math.max(0, beds - 1))}
								>
									-
								</Button>
								<Text size="sm" style={{ minWidth: "30px", textAlign: "center" }}>
									{beds}
								</Text>
								<Button size="xs" variant="outline" onClick={() => onBedsChange(beds + 1)}>
									+
								</Button>
							</Group>
							<Text size="xs" c="dimmed" mt={4}>
								$15 each
							</Text>
						</div>
					</Group>
				</div>
			)}
			{/* Add-Ons - Universal for all services */}

			{selectedOption.addons && selectedOption.addons.length > 0 && (
				<>
					<Text size="sm" fw={500} mb="xs" mt="md">
						Add-Ons:
					</Text>
					<Grid gutter="xs" mb="md">
						{selectedOption.addons?.map(addon => (
							<Grid.Col key={addon.id} span={{ base: 12, sm: 6, md: 4 }}>
								<Card
									padding="sm"
									withBorder
									style={{
										cursor: "pointer",
										borderColor: selectedAddons.includes(addon.id)
											? "var(--mantine-color-brand-filled)"
											: undefined
									}}
									onClick={() => {
										const newAddons = selectedAddons.includes(addon.id)
											? selectedAddons.filter(id => id !== addon.id)
											: [...selectedAddons, addon.id];
										onAddonsSelect(newAddons);
									}}
								>
									<Group justify="space-between" wrap="nowrap" className="cursor-pointer">
										<div>
											<Text size="sm" fw={500}>
												{addon.name}
											</Text>
											<Text size="xs" c="dimmed">
												+${addon.price}
											</Text>
										</div>

										<Switch
											checked={selectedAddons.includes(addon.id)}
											onChange={() => {
												const newAddons = selectedAddons.includes(addon.id)
													? selectedAddons.filter(id => id !== addon.id)
													: [...selectedAddons, addon.id];
												onAddonsSelect(newAddons);
											}}
											aria-label={addon.name}
											style={{ cursor: "pointer" }}
										/>
									</Group>
								</Card>
							</Grid.Col>
						))}
					</Grid>
				</>
			)}

			{/* Price Summary after Add-Ons */}
			{(() => {
				const price = calculatePrice({
					selectedOption,
					selectedPeriod,
					selectedDuration,
					selectedCleanLevel,
					selectedAddons,
					bathrooms,
					toilets,
					beds,
					bookingType: selectedOption.id
				});
				if (!price) return null;

				// Show breakdown: $rate × hours (+ $additionalRate × additionalHours if any)
				const pricing = selectedOption.pricing.find(p => p.period === selectedPeriod);
				if (!pricing) return null;
				const minHours = pricing.minHours || 1;
				const isDeep = selectedCleanLevel === "deep";
				const rate =
					isDeep && pricing.deepCleanPricePerHour
						? pricing.deepCleanPricePerHour
						: pricing.pricePerHour;
				const additionalRate =
					isDeep && pricing.deepCleanAdditionalHourPrice
						? pricing.deepCleanAdditionalHourPrice
						: pricing.additionalHourPrice || pricing.pricePerHour;
				const additionalHours = selectedDuration - minHours;

				return (
					<Card withBorder padding="md" radius="md" bg="blue.0" mb="md">
						<Text fw={700} size="md" mb="xs">
							Pricing Overview
							<p className="text-xs font-normal">pay after service.</p>
						</Text>
						<Group justify="space-between" mt={"sm"}>
							<Text>{`Base Service (${minHours} hours)`}</Text>
							<div style={{ textAlign: "right" }}>
								<Text fw={"bold"}>
									<span className="text-gray-600 font-normal">
										${rate} X {minHours} ={" "}
									</span>
									${rate * minHours}
								</Text>
							</div>
						</Group>

						{additionalHours > 0 && (
							<Group justify="space-between">
								<Text>{`Additional (${additionalHours} hours)`}</Text>
								<div style={{ textAlign: "right" }}>
									<Text fw={"bold"}>
										<span className="text-gray-600 font-normal">
											${additionalRate} X {additionalHours} ={" "}
										</span>
										${additionalRate * additionalHours}
									</Text>
								</div>
							</Group>
						)}
						{selectedAddons.length > 0 && (
							<Group justify="space-between">
								<Text>Add-Ons: </Text>
								<Text fw={"bold"}>
									{selectedCleanLevel === "deep" && (
										<span className="text-gray-600 text-sm font-normal">
											included in deep clean
										</span>
									)}{" "}
									${price.addonsTotal}
								</Text>
							</Group>
						)}
						{price.endOfLeaseExtras > 0 && (
							<Group justify="space-between">
								<Text>Extra Bathrooms & Toilets:</Text>
								<Text fw={"bold"}>${price.endOfLeaseExtras}</Text>
							</Group>
						)}
						{price.airbnbExtras > 0 && (
							<Group justify="space-between">
								<Text>Extra Beds:</Text>
								<Text fw={"bold"}>${price.airbnbExtras}</Text>
							</Group>
						)}
						<Divider my="xs" />
						<Group justify="space-between">
							<Text size="lg" fw={700}>
								Total:
							</Text>
							<Text size="lg" fw={700} c="blue">
								${price.total}
							</Text>
						</Group>
					</Card>
				);
			})()}

			{/* Date and Time Selection */}
			<div style={{ marginTop: "24px", marginBottom: "24px" }}>
				<Text size="sm" fw={500} mb="xs">
					Preferred Date & Time
				</Text>
				<Grid gutter="md">
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<DatePickerInput
							leftSection={<IconCalendar size={16} />}
							placeholder="Select date"
							value={preferredDate}
							onChange={value => {
								// Handle both Date and string types from DatePickerInput
								if (typeof value === "string") {
									onDateSelect(value ? new Date(value) : null);
								} else {
									onDateSelect(value);
								}
							}}
							minDate={new Date()}
							clearable
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<Group gap="xs">
							<Button
								size="sm"
								leftSection={<IconClock size={16} />}
								variant={preferredTime === "morning" ? "filled" : "outline"}
								color="brand"
								onClick={() => onTimeSelect("morning")}
							>
								Morning
							</Button>
							<Button
								size="sm"
								leftSection={<IconClock size={16} />}
								variant={preferredTime === "afternoon" ? "filled" : "outline"}
								color="brand"
								onClick={() => onTimeSelect("afternoon")}
							>
								Afternoon
							</Button>
							<Button
								size="sm"
								leftSection={<IconClock size={16} />}
								variant={preferredTime === "evening" ? "filled" : "outline"}
								color="brand"
								onClick={() => onTimeSelect("evening")}
							>
								Evening
							</Button>
						</Group>
					</Grid.Col>
				</Grid>
			</div>

			<Textarea
				label="Additional Notes"
				placeholder="Any special requirements, areas to focus on, or additional notes."
				rows={4}
				value={notes}
				onChange={event => onNotesChange(event.target.value)}
				mb="md"
			/>

			{selectedOption.cleanLevelComparison && (
				<>
					<Button
						variant="subtle"
						size="xs"
						fullWidth
						onClick={toggleComparison}
						rightSection={
							expandedComparison ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />
						}
						mb="xs"
						mt="md"
					>
						{expandedComparison ? "Hide" : "See"} What's Included
					</Button>
					<Collapse in={expandedComparison} mb="md">
						<div style={{ overflowX: "auto" }}>
							<Table striped highlightOnHover withTableBorder withColumnBorders>
								<Table.Thead>
									<Table.Tr>
										<Table.Th style={{ width: "50%", fontSize: "12px" }}>Task</Table.Th>
										{selectedOption.supportsCleanLevel ? (
											<>
												<Table.Th style={{ textAlign: "center", width: "15%", fontSize: "12px" }}>
													Standard
												</Table.Th>
												<Table.Th style={{ textAlign: "center", width: "15%", fontSize: "12px" }}>
													Deep Clean
												</Table.Th>
											</>
										) : (
											<Table.Th style={{ textAlign: "center", width: "15%", fontSize: "12px" }}>
												Included
											</Table.Th>
										)}
									</Table.Tr>
								</Table.Thead>
								<Table.Tbody>
									{selectedOption.cleanLevelComparison?.map((area, areaIdx) => (
										<>
											<Table.Tr key={`area-${areaIdx}`}>
												<Table.Td
													colSpan={selectedOption.supportsCleanLevel ? 3 : 2}
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
													{selectedOption.supportsCleanLevel ? (
														<>
															<Table.Td style={{ textAlign: "center" }}>
																{task.standardClean === null ? (
																	<IconPlus size={16} color="navy" />
																) : task.standardClean ? (
																	<IconCheck size={16} color="green" />
																) : (
																	<IconX size={16} color="red" />
																)}
															</Table.Td>
															<Table.Td style={{ textAlign: "center" }}>
																{task.deepClean === null ? (
																	<IconPlus size={16} color="navy" />
																) : task.deepClean ? (
																	<IconCheck size={16} color="green" />
																) : (
																	<IconX size={16} color="red" />
																)}
															</Table.Td>
														</>
													) : (
														<Table.Td style={{ textAlign: "center" }}>
															{(() => {
																const isDeepCleanService = [
																	"end-of-lease",
																	"move-in",
																	"airbnb",
																	"ndis"
																].includes(selectedOption.id);

																const value = isDeepCleanService
																	? task.deepClean
																	: task.standardClean;
																return value === null ? (
																	<IconPlus size={16} color="navy" />
																) : value ? (
																	<IconCheck size={16} color="green" />
																) : (
																	<IconX size={16} color="red" />
																);
															})()}
														</Table.Td>
													)}
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
		</Card>
	);
}
