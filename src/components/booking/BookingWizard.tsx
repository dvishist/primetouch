import { useState } from "react";
import { Container, Stepper, Button, Group, Paper } from "@mantine/core";
import { BookingFormData, BookingType, BookingPeriod } from "@/types/booking";
import BookingTypeStep from "./steps/BookingTypeStep";
import CustomerDetailsStep from "./steps/CustomerDetailsStep";
import BookingSummaryStep from "./steps/BookingSummaryStep";

export default function BookingWizard() {
	const [active, setActive] = useState(0);
	const [formData, setFormData] = useState<BookingFormData>({
		bookingType: null,
		bookingPeriod: null,
		duration: null,
		customerDetails: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			address: "",
			city: "",
			postalCode: "",
			notes: ""
		}
	});

	const nextStep = () => setActive(current => (current < 2 ? current + 1 : current));
	const prevStep = () => setActive(current => (current > 0 ? current - 1 : current));

	const updateBookingType = (type: BookingType) => {
		setFormData({ ...formData, bookingType: type });
	};

	const updateBookingPeriod = (period: BookingPeriod) => {
		setFormData({ ...formData, bookingPeriod: period });
	};

	const updateDuration = (duration: number) => {
		setFormData({ ...formData, duration });
	};

	const updateCustomerDetails = (details: BookingFormData["customerDetails"]) => {
		setFormData({ ...formData, customerDetails: details });
	};

	const handleSubmit = () => {
		console.log("Booking submitted:", formData);
		// TODO: Implement actual submission
	};

	const canProceedFromStep = (step: number): boolean => {
		switch (step) {
			case 0:
				return (
					formData.bookingType !== null &&
					formData.bookingPeriod !== null &&
					formData.duration !== null
				);
			case 1:
				const { firstName, lastName, email, phone, address } = formData.customerDetails;
				return !!(firstName && lastName && email && phone && address);
			default:
				return true;
		}
	};

	return (
		<Container size="lg" py="xl">
			<Paper shadow="sm" p="xl" radius="md">
				<Stepper active={active} onStepClick={setActive}>
					<Stepper.Step label="Service Type" description="Choose your cleaning service">
						<BookingTypeStep
							selected={formData.bookingType}
							selectedPeriod={formData.bookingPeriod}
							selectedDuration={formData.duration}
							onSelect={updateBookingType}
							onPeriodSelect={updateBookingPeriod}
							onDurationSelect={updateDuration}
						/>
					</Stepper.Step>

					<Stepper.Step label="Your Details" description="Contact information">
						<CustomerDetailsStep
							details={formData.customerDetails}
							onUpdate={updateCustomerDetails}
						/>
					</Stepper.Step>

					<Stepper.Step label="Review" description="Confirm your booking">
						<BookingSummaryStep formData={formData} />
					</Stepper.Step>
				</Stepper>

				<Group justify="space-between" mt="xl">
					<Button variant="default" onClick={prevStep} disabled={active === 0}>
						Back
					</Button>
					{active < 2 ? (
						<Button onClick={nextStep} disabled={!canProceedFromStep(active)}>
							Next Step
						</Button>
					) : (
						<Button onClick={handleSubmit} disabled={!canProceedFromStep(1)}>
							Submit Booking
						</Button>
					)}
				</Group>
			</Paper>
		</Container>
	);
}
