import { Stack, TextInput, Textarea, Grid } from "@mantine/core";
import { BookingFormData } from "@/types/booking";

interface CustomerDetailsStepProps {
	details: BookingFormData["customerDetails"];
	onUpdate: (details: BookingFormData["customerDetails"]) => void;
}

export default function CustomerDetailsStep({ details, onUpdate }: CustomerDetailsStepProps) {
	const handleChange =
		(field: keyof BookingFormData["customerDetails"]) =>
		(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			onUpdate({ ...details, [field]: event.target.value });
		};

	return (
		<Stack gap="md" mt="md">
			<Grid>
				<Grid.Col span={{ base: 12, sm: 6 }}>
					<TextInput
						label="First Name"
						placeholder="John"
						required
						value={details.firstName}
						onChange={handleChange("firstName")}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 6 }}>
					<TextInput
						label="Last Name"
						placeholder="Doe"
						required
						value={details.lastName}
						onChange={handleChange("lastName")}
					/>
				</Grid.Col>
			</Grid>

			<Grid>
				<Grid.Col span={{ base: 12, sm: 6 }}>
					<TextInput
						label="Email"
						placeholder="john.doe@example.com"
						type="email"
						required
						value={details.email}
						onChange={handleChange("email")}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 6 }}>
					<TextInput
						label="Phone"
						placeholder="+1 (555) 000-0000"
						type="tel"
						required
						value={details.phone}
						onChange={handleChange("phone")}
					/>
				</Grid.Col>
			</Grid>

			<TextInput
				label="Address"
				placeholder="123 Main Street"
				required
				value={details.address}
				onChange={handleChange("address")}
			/>

			<Grid>
				<Grid.Col span={{ base: 12, sm: 6 }}>
					<TextInput
						label="City"
						required
						placeholder="New York"
						value={details.city}
						onChange={handleChange("city")}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 6 }}>
					<TextInput
						label="Postal Code"
						required
						placeholder="10001"
						value={details.postalCode}
						onChange={handleChange("postalCode")}
					/>
				</Grid.Col>
			</Grid>

			<Textarea
				label="Additional Notes"
				placeholder="Any special instructions or requirements..."
				rows={4}
				value={details.notes}
				onChange={handleChange("notes")}
			/>
		</Stack>
	);
}
