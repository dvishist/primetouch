import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Stepper, Button, Group, Paper } from "@mantine/core";
import {
	BookingFormData,
	BookingType,
	BookingPeriod,
	LeaseType,
	ContactPreference
} from "@/types/booking";
import SelectServiceStep from "./steps/SelectServiceStep";
import BookingTypeStep from "./steps/BookingTypeStep";
import CustomerDetailsStep from "./steps/CustomerDetailsStep";
import BookingSummaryStep from "./steps/BookingSummaryStep";

export default function BookingWizard() {
	const router = useRouter();
	const [active, setActive] = useState(0);
	const [formData, setFormData] = useState<BookingFormData>({
		bookingType: null,
		bookingPeriod: null,
		duration: null,
		cleanLevel: null,
		contactPreferences: [],
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

	// Check for service query parameter on mount
	useEffect(() => {
		if (router.isReady) {
			const serviceParam = router.query.service as string;
			if (serviceParam) {
				const validServices: BookingType[] = [
					"once-off",
					"regular",
					"deep-cleaning",
					"end-of-lease",
					"commercial",
					"airbnb"
				];
				if (validServices.includes(serviceParam as BookingType)) {
					setFormData(prev => ({ ...prev, bookingType: serviceParam as BookingType }));
					setActive(1); // Start at step 2 (Booking Details)
				}
			}
		}
	}, [router.isReady, router.query.service]);

	const nextStep = () => setActive(current => (current < 3 ? current + 1 : current));
	const prevStep = () => setActive(current => (current > 0 ? current - 1 : current));

	const updateBookingType = (type: BookingType) => {
		setFormData({ ...formData, bookingType: type });
	};

	const updateBookingPeriod = (period: BookingPeriod | LeaseType) => {
		// For end-of-lease, set a default duration of 1 since it's not user-selectable
		if (formData.bookingType === "end-of-lease") {
			setFormData({ ...formData, bookingPeriod: period, duration: 1 });
		} else {
			setFormData({ ...formData, bookingPeriod: period });
		}
	};

	const updateDuration = (duration: number) => {
		setFormData({ ...formData, duration });
	};

	const updateCleanLevel = (cleanLevel: "normal" | "deep") => {
		setFormData({ ...formData, cleanLevel });
	};

	const updateCustomerDetails = (details: BookingFormData["customerDetails"]) => {
		setFormData({ ...formData, customerDetails: details });
	};

	const updateContactPreferences = (preferences: ContactPreference[]) => {
		setFormData({ ...formData, contactPreferences: preferences });
	};

	const handleSubmit = () => {
		console.log("Booking submitted:", formData);
		// TODO: Implement actual submission
	};

	const canProceedFromStep = (step: number): boolean => {
		switch (step) {
			case 0:
				return formData.bookingType !== null;
			case 1:
				// For end-of-lease, duration is auto-set so only check type and period
				if (formData.bookingType === "end-of-lease") {
					return formData.bookingType !== null && formData.bookingPeriod !== null;
				}
				return (
					formData.bookingType !== null &&
					formData.bookingPeriod !== null &&
					formData.duration !== null
				);
			case 2:
				const { firstName, lastName, email, phone, address, city, postalCode } =
					formData.customerDetails;
				return !!(firstName && lastName && email && phone && address && city && postalCode);
			default:
				return true;
		}
	};

	return (
		<Container size="lg" py="xl">
			<Paper shadow="sm" p="xl" radius="md">
				<Stepper active={active} onStepClick={setActive}>
					<Stepper.Step label="Service Type" description="Choose your cleaning service">
						<SelectServiceStep selected={formData.bookingType} onSelect={updateBookingType} />
					</Stepper.Step>

					<Stepper.Step label="Booking Details" description="Configure your service">
						<BookingTypeStep
							selected={formData.bookingType}
							selectedPeriod={formData.bookingPeriod}
							selectedDuration={formData.duration}
							selectedCleanLevel={formData.cleanLevel}
							onPeriodSelect={updateBookingPeriod}
							onDurationSelect={updateDuration}
							onCleanLevelSelect={updateCleanLevel}
						/>
					</Stepper.Step>

					<Stepper.Step label="Your Details" description="Contact information">
						<CustomerDetailsStep
							details={formData.customerDetails}
							onUpdate={updateCustomerDetails}
						/>
					</Stepper.Step>

					<Stepper.Step label="Review" description="Confirm your booking">
						<BookingSummaryStep
							formData={formData}
							onContactPreferencesChange={updateContactPreferences}
						/>
					</Stepper.Step>
				</Stepper>

				<Group justify="space-between" mt="xl">
					<Button variant="default" onClick={prevStep} disabled={active === 0}>
						Back
					</Button>
					{active < 3 ? (
						<Button onClick={nextStep} disabled={!canProceedFromStep(active)}>
							Next Step
						</Button>
					) : (
						<Button onClick={handleSubmit} disabled={!canProceedFromStep(2)}>
							Submit Booking
						</Button>
					)}
				</Group>
			</Paper>
		</Container>
	);
}
