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

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(formData)
			});

			const data = await response.json();

			if (data.success) {
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
			} else {
				throw new Error(data.message);
			}
		} catch (error) {
			notifications.show({
				title: "Error",
				message: "Failed to submit enquiry. Please try again or contact us directly.",
				color: "red"
			});
		} finally {
			setIsSubmitting(false);
		}

		setIsSubmitting(false);

		// In a real application, you would send this to a backend API or email service
		console.log("Form data:", formData);
	};

	const handleChange = (field: string, value: string) => {
		setFormData(prev => ({ ...prev, [field]: value }));
	};

	return (
		<section id="contact" className="py-16 bg-gradient-to-b from-white to-gray-50">
			<Container size="xl">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Left Side - Contact Info */}
					<div>
						<Title order={2} className="text-gray-800 font-bold text-3xl">
							Get In Touch
						</Title>
						<Text size="md" c="dimmed" className="mb-8">
							If you have questions about our services, or want to learn more about what we can do
							for you, don't hesitate to reach out.
						</Text>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
							{/* Call Us Card */}
							<Paper
								shadow="sm"
								p="lg"
								radius="md"
								className="bg-blue-50/50 border border-blue-100"
							>
								<div className="flex items-center gap-3 mb-4">
									<div className="p-2 bg-blue-100 rounded-lg">
										<IconPhone size={24} className="text-blue-600" />
									</div>
									<Text fw={600} size="lg" className="text-gray-800">
										Call Us
									</Text>
								</div>
								<Text size="sm" c="dimmed" className="mb-4">
									Phone: coming soon
								</Text>
								<Button
									variant="outline"
									fullWidth
									component="a"
									href="tel:0393081849"
									className="border-blue-600 text-blue-600 hover:bg-blue-50 mt-2"
								>
									Call Now
								</Button>
							</Paper>

							{/* Email Us Card */}
							<Paper
								shadow="sm"
								p="lg"
								radius="md"
								className="bg-teal-50/50 border border-teal-100"
							>
								<div className="flex items-center gap-3 mb-4">
									<div className="p-2 bg-teal-100 rounded-lg">
										<IconMail size={24} className="text-teal-600" />
									</div>
									<Text fw={600} size="lg" className="text-gray-800">
										Email Us
									</Text>
								</div>
								<Text size="sm" c="dimmed" className="mb-1">
									info.primetouchcleaning@gmail.com
								</Text>
								<Button
									variant="outline"
									fullWidth
									component="a"
									href="mailto:info@altivynhealth.com.au"
									className="border-teal-600 text-teal-600 hover:bg-teal-50 mt-2"
								>
									Send Email
								</Button>
							</Paper>
						</div>
					</div>

					{/* Right Side - Contact Form */}
					<div>
						<Paper shadow="md" p="xl" radius="md" withBorder>
							<Title order={3} className="text-gray-800 font-bold text-2xl mb-2">
								Send Us a Message
							</Title>
							<Text size="sm" c="dimmed" className="mb-6">
								Fill out the form below and we'll get back to you within 24 hours.
							</Text>

							<form onSubmit={handleSubmit}>
								<div className="space-y-4 mt-4">
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
										<TextInput
											label="First Name"
											placeholder="John"
											required
											value={formData.name.split(" ")[0] || ""}
											onChange={e => {
												const lastName = formData.name.split(" ").slice(1).join(" ");
												handleChange(
													"name",
													e.currentTarget.value + (lastName ? " " + lastName : "")
												);
											}}
											size="md"
										/>
										<TextInput
											label="Last Name"
											placeholder="Doe"
											required
											value={formData.name.split(" ").slice(1).join(" ") || ""}
											onChange={e => {
												const firstName = formData.name.split(" ")[0] || "";
												handleChange("name", firstName + " " + e.currentTarget.value);
											}}
											size="md"
										/>
									</div>

									<TextInput
										label="Email Address"
										placeholder="john@example.com"
										type="email"
										required
										value={formData.email}
										onChange={e => handleChange("email", e.currentTarget.value)}
										size="md"
									/>

									<TextInput
										label="Phone Number"
										placeholder="(555) 123-4567"
										type="tel"
										required
										value={formData.phone}
										onChange={e => handleChange("phone", e.currentTarget.value)}
										size="md"
									/>

									<Select
										label="Reason for Contact"
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
										placeholder="Tell us about your condition, symptoms, or questions..."
										required
										value={formData.message}
										onChange={e => handleChange("message", e.currentTarget.value)}
										minRows={4}
										size="md"
									/>

									<div className="pt-2">
										<Button
											type="submit"
											fullWidth
											size="lg"
											loading={isSubmitting}
											leftSection={<IconSend size={20} />}
											className="bg-teal-600 hover:bg-teal-700"
										>
											Send Message
										</Button>
									</div>

									<Text size="xs" c="dimmed" ta="center" className="pt-2">
										By submitting this form, you agree to our{" "}
										<a href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
											privacy policy
										</a>{" "}
										and consent to be contacted by our team.
									</Text>
								</div>
							</form>
						</Paper>
					</div>
				</div>
			</Container>
		</section>
	);
}
