import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Stepper, Button, Group, Paper } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
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
		selectedAddons: [],
		contactPreferences: [],
		preferredDate: null,
		preferredTime: null,
		bathrooms: 0,
		toilets: 0,
		beds: 0,
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
					"airbnb",
					"ndis",
					"move-in"
				];
				if (validServices.includes(serviceParam as BookingType)) {
					setActive(1); // Start at step 2 (Booking Details)

					if (serviceParam === "once-off" || serviceParam === "move-in") {
						setFormData({ ...formData, bookingType: serviceParam, bookingPeriod: "once-off" });
					} else {
						setFormData({ ...formData, bookingType: serviceParam as BookingType });
					}
				}
			}
		}
	}, [router.isReady, router.query.service]);

	const nextStep = () => setActive(current => (current < 3 ? current + 1 : current));
	const prevStep = () => setActive(current => (current > 0 ? current - 1 : current));

	const updateBookingType = (type: BookingType) => {
		// Auto-select once-off period for once-off cleaning
		if (type === "once-off" || type === "move-in") {
			setFormData({ ...formData, bookingType: type, bookingPeriod: "once-off" });
		} else {
			setFormData({ ...formData, bookingType: type });
		}
		nextStep();
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

	const updateCleanLevel = (cleanLevel: "standard" | "deep") => {
		setFormData({ ...formData, cleanLevel });
	};

	const updateAddons = (addons: string[]) => {
		setFormData({ ...formData, selectedAddons: addons });
	};

	const updateBathrooms = (count: number) => {
		setFormData({ ...formData, bathrooms: count });
	};

	const updateToilets = (count: number) => {
		setFormData({ ...formData, toilets: count });
	};

	const updateBeds = (count: number) => {
		setFormData({ ...formData, beds: count });
	};

	const updateNotes = (notes: string) => {
		setFormData({ ...formData, customerDetails: { ...formData.customerDetails, notes } });
	};

	const updateDate = (date: Date | null) => {
		setFormData({ ...formData, preferredDate: date });
	};

	const updateTime = (time: "morning" | "afternoon" | "evening") => {
		setFormData({ ...formData, preferredTime: time });
	};

	const updateCustomerDetails = (details: BookingFormData["customerDetails"]) => {
		setFormData({ ...formData, customerDetails: details });
	};

	const updateContactPreferences = (preferences: ContactPreference[]) => {
		setFormData({ ...formData, contactPreferences: preferences });
	};

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async () => {
		setIsSubmitting(true);

		try {
			const response = await fetch("/api/booking", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(formData)
			});

			const data = await response.json();

			if (data.success) {
				notifications.show({
					title: "Booking Submitted! 🎉",
					message:
						"Thank you! We've received your booking and will contact you within 24 hours to confirm.",
					color: "green",
					icon: <IconCheck size={18} />,
					autoClose: 8000
				});

				// Redirect to home page after short delay
				setTimeout(() => {
					router.push("/");
				}, 2000);
			} else {
				throw new Error(data.message);
			}
		} catch (error) {
			notifications.show({
				title: "Submission Error",
				message: "Failed to submit booking. Please try again or contact us directly.",
				color: "red",
				autoClose: 6000
			});
		} finally {
			setIsSubmitting(false);
		}
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
				<Stepper active={active} allowNextStepsSelect={false}>
					<Stepper.Step label="Service Type" description="Choose your cleaning service">
						<SelectServiceStep selected={formData.bookingType} onSelect={updateBookingType} />
					</Stepper.Step>

					<Stepper.Step label="Booking Details" description="Configure your service">
						<BookingTypeStep
							selected={formData.bookingType}
							selectedPeriod={formData.bookingPeriod}
							selectedDuration={formData.duration || 0}
							selectedCleanLevel={formData.cleanLevel}
							selectedAddons={formData.selectedAddons}
							preferredDate={formData.preferredDate}
							preferredTime={formData.preferredTime}
							bathrooms={formData.bathrooms || 0}
							toilets={formData.toilets || 0}
							beds={formData.beds || 0}
							notes={formData.customerDetails.notes}
							onPeriodSelect={updateBookingPeriod}
							onDurationSelect={updateDuration}
							onCleanLevelSelect={updateCleanLevel}
							onAddonsSelect={updateAddons}
							onDateSelect={updateDate}
							onTimeSelect={updateTime}
							onBathroomsChange={updateBathrooms}
							onToiletsChange={updateToilets}
							onBedsChange={updateBeds}
							onNotesChange={updateNotes}
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
						<Button onClick={handleSubmit} disabled={!canProceedFromStep(2)} loading={isSubmitting}>
							Submit Booking
						</Button>
					)}
				</Group>
			</Paper>
		</Container>
	);
}
