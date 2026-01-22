import { Stack, TextInput, Textarea, Grid } from "@mantine/core";
import { useState } from "react";
import { BookingFormData } from "@/types/booking";

interface CustomerDetailsStepProps {
	details: BookingFormData["customerDetails"];
	onUpdate: (details: BookingFormData["customerDetails"]) => void;
}

export default function CustomerDetailsStep({ details, onUpdate }: CustomerDetailsStepProps) {
	const [emailError, setEmailError] = useState("");
	const [phoneError, setPhoneError] = useState("");

	// Email validation
	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!email) {
			setEmailError("");
			return true;
		}
		if (!emailRegex.test(email)) {
			setEmailError("Please enter a valid email address");
			return false;
		}
		setEmailError("");
		return true;
	};

	// Phone validation (basic format check)
	const validatePhone = (phone: string) => {
		const phoneRegex = /^[\d\s\-\+\(\)]+$/;
		if (!phone) {
			setPhoneError("");
			return true;
		}
		// Remove all non-digit characters for length check
		const digitsOnly = phone.replace(/\D/g, "");
		if (digitsOnly.length < 10) {
			setPhoneError("Phone number must be at least 10 digits");
			return false;
		}
		if (!phoneRegex.test(phone)) {
			setPhoneError("Please enter a valid phone number");
			return false;
		}
		setPhoneError("");
		return true;
	};

	const handleChange =
		(field: keyof BookingFormData["customerDetails"]) =>
		(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const value = event.target.value;
			onUpdate({ ...details, [field]: value });

			// Validate on change
			if (field === "email") {
				validateEmail(value);
			} else if (field === "phone") {
				validatePhone(value);
			}
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
						error={emailError}
						onBlur={() => validateEmail(details.email)}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 6 }}>
					<TextInput
						label="Phone"
						placeholder="+61 400 000 000"
						type="tel"
						required
						value={details.phone}
						onChange={handleChange("phone")}
						error={phoneError}
						onBlur={() => validatePhone(details.phone)}
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
		</Stack>
	);
}
