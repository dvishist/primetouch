import {
	Container,
	Title,
	Text,
	TextInput,
	Textarea,
	Button,
	Select,
	Group,
	Paper
} from "@mantine/core";
import { IconMail, IconPhone, IconUser, IconMessageCircle, IconSend } from "@tabler/icons-react";
import { useState } from "react";
import { notifications } from "@mantine/notifications";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		serviceType: "",
		message: ""
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission (frontend only)
		await new Promise(resolve => setTimeout(resolve, 1500));

		// Show success notification
		notifications.show({
			title: "Enquiry Submitted!",
			message:
				"Thank you for your enquiry! We'll get back to you within 24 hours. Check your email for confirmation.",
			color: "green",
			icon: <IconSend size={18} />
		});

		// Reset form
		setFormData({
			name: "",
			email: "",
			phone: "",
			serviceType: "",
			message: ""
		});

		setIsSubmitting(false);

		// In a real application, you would send this to a backend API or email service
		console.log("Form data:", formData);
	};

	const handleChange = (field: string, value: string) => {
		setFormData(prev => ({ ...prev, [field]: value }));
	};

	return (
		<section id="contact" className="py-16 bg-linear-to-b from-white to-gray-50">
			<Container size="md">
				<div className="text-center mb-12">
					<Title order={2} className="text-gray-800 font-bold text-3xl mb-4">
						Get in Touch
					</Title>
					<Text size="lg" c="dimmed" className="max-w-2xl mx-auto">
						Have a question or ready to book? Fill out the form below and we'll respond within 24
						hours.
					</Text>
				</div>

				<Paper shadow="md" p="xl" radius="md" withBorder>
					<form onSubmit={handleSubmit}>
						<div className="space-y-4">
							<TextInput
								label="Full Name"
								placeholder="John Smith"
								required
								value={formData.name}
								onChange={e => handleChange("name", e.currentTarget.value)}
								leftSection={<IconUser size={18} />}
								size="md"
							/>

							<TextInput
								label="Email Address"
								placeholder="john@example.com"
								type="email"
								required
								value={formData.email}
								onChange={e => handleChange("email", e.currentTarget.value)}
								leftSection={<IconMail size={18} />}
								size="md"
							/>

							<TextInput
								label="Phone Number"
								placeholder="0412 345 678"
								type="tel"
								required
								value={formData.phone}
								onChange={e => handleChange("phone", e.currentTarget.value)}
								leftSection={<IconPhone size={18} />}
								size="md"
							/>

							<Select
								label="Service Interested In"
								placeholder="Select a service"
								required
								value={formData.serviceType}
								onChange={value => handleChange("serviceType", value || "")}
								data={[
									{ value: "once-off", label: "Once-off Clean" },
									{ value: "regular", label: "Regular Cleaning" },
									{ value: "end-of-lease", label: "End of Lease Clean" },
									{ value: "airbnb", label: "Airbnb Cleaning" },
									{ value: "deep-clean", label: "Deep Clean" },
									{ value: "other", label: "Other / Not Sure" }
								]}
								size="md"
							/>

							<Textarea
								label="Message"
								placeholder="Tell us about your cleaning needs, property size, preferred date/time, or any special requirements..."
								required
								value={formData.message}
								onChange={e => handleChange("message", e.currentTarget.value)}
								minRows={5}
								leftSection={<IconMessageCircle size={18} />}
								size="md"
							/>

							<div className="pt-4">
								<Button
									type="submit"
									fullWidth
									size="lg"
									loading={isSubmitting}
									leftSection={<IconSend size={20} />}
								>
									Send Enquiry
								</Button>
							</div>

							<Text size="xs" c="dimmed" ta="center" className="pt-2">
								We respect your privacy. Your information will only be used to respond to your
								enquiry.
							</Text>
						</div>
					</form>
				</Paper>

				<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="text-center p-6 rounded-lg bg-white border border-gray-200">
						<IconPhone size={32} className="mx-auto text-blue-600 mb-3" />
						<Text fw={600} className="mb-1">
							Call Us
						</Text>
						<Text size="sm" c="dimmed">
							0412 345 678
						</Text>
					</div>

					<div className="text-center p-6 rounded-lg bg-white border border-gray-200">
						<IconMail size={32} className="mx-auto text-blue-600 mb-3" />
						<Text fw={600} className="mb-1">
							Email Us
						</Text>
						<Text size="sm" c="dimmed">
							info@primetouch.com.au
						</Text>
					</div>

					<div className="text-center p-6 rounded-lg bg-white border border-gray-200">
						<IconMessageCircle size={32} className="mx-auto text-blue-600 mb-3" />
						<Text fw={600} className="mb-1">
							Response Time
						</Text>
						<Text size="sm" c="dimmed">
							Within 24 hours
						</Text>
					</div>
				</div>
			</Container>
		</section>
	);
}
