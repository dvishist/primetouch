import { Container, Title, Text, List } from "@mantine/core";
import Head from "next/head";

export default function PrivacyPolicy() {
	return (
		<>
			<Head>
				<title>Privacy Policy - PrimeTouch Cleaning</title>
				<meta
					name="description"
					content="PrimeTouch Cleaning's privacy policy and how we handle your personal information."
				/>
			</Head>

			<div className="bg-gradient-to-b from-blue-50 to-white py-16">
				<Container size="md">
					<Title order={1} className="text-gray-900 font-bold text-4xl mb-4 text-center">
						Privacy Policy
					</Title>
					<Text size="md" c="dimmed" className="text-center mb-8">
						Last Updated: January 25, 2026
					</Text>

					<div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
						<section>
							<Title order={2} className="text-gray-900 font-semibold text-2xl mb-3">
								1. Introduction
							</Title>
							<Text className="text-gray-700 mb-4">
								PrimeTouch Cleaning ("we," "our," or "us") is committed to protecting your privacy.
								This Privacy Policy explains how we collect, use, disclose, and safeguard your
								information when you visit our website or use our services.
							</Text>
						</section>

						<section>
							<Title order={2} className="text-gray-900 font-semibold text-2xl mb-3">
								2. Information We Collect
							</Title>
							<Text className="text-gray-700 mb-3">
								We collect information that you provide directly to us, including:
							</Text>
							<List className="text-gray-700 mb-4">
								<List.Item>
									Personal identification information (name, email address, phone number)
								</List.Item>
								<List.Item>Property address and details</List.Item>
								<List.Item>Service preferences and booking information</List.Item>
								<List.Item>
									Payment information (processed securely through third-party providers)
								</List.Item>
								<List.Item>
									Communication records (emails, messages, and feedback you send to us)
								</List.Item>
							</List>
						</section>

						<section>
							<Title order={2} className="text-gray-900 font-semibold text-2xl mb-3">
								3. How We Use Your Information
							</Title>
							<Text className="text-gray-700 mb-3">We use the information we collect to:</Text>
							<List className="text-gray-700 mb-4">
								<List.Item>Provide, maintain, and improve our cleaning services</List.Item>
								<List.Item>Process bookings and payments</List.Item>
								<List.Item>Send you service updates, confirmations, and reminders</List.Item>
								<List.Item>Respond to your inquiries and provide customer support</List.Item>
								<List.Item>Send promotional communications (with your consent)</List.Item>
								<List.Item>Comply with legal obligations and protect our rights</List.Item>
							</List>
						</section>

						<section>
							<Title order={2} className="text-gray-900 font-semibold text-2xl mb-3">
								4. Information Sharing
							</Title>
							<Text className="text-gray-700 mb-4">
								We do not sell, trade, or rent your personal information to third parties. We may
								share your information with:
							</Text>
							<List className="text-gray-700 mb-4">
								<List.Item>
									Service providers who assist us in operating our business (e.g., payment
									processors, scheduling tools)
								</List.Item>
								<List.Item>
									Our cleaning team members who need the information to provide services to you
								</List.Item>
								<List.Item>
									Legal authorities when required by law or to protect our rights
								</List.Item>
							</List>
						</section>

						<section>
							<Title order={2} className="text-gray-900 font-semibold text-2xl mb-3">
								5. Data Security
							</Title>
							<Text className="text-gray-700 mb-4">
								We implement appropriate technical and organizational security measures to protect
								your personal information against unauthorized access, alteration, disclosure, or
								destruction. However, no method of transmission over the internet is 100% secure,
								and we cannot guarantee absolute security.
							</Text>
						</section>

						<section>
							<Title order={2} className="text-gray-900 font-semibold text-2xl mb-3">
								6. Your Rights
							</Title>
							<Text className="text-gray-700 mb-3">You have the right to:</Text>
							<List className="text-gray-700 mb-4">
								<List.Item>Access the personal information we hold about you</List.Item>
								<List.Item>Request correction of inaccurate information</List.Item>
								<List.Item>Request deletion of your personal information</List.Item>
								<List.Item>Opt-out of marketing communications</List.Item>
								<List.Item>Withdraw your consent at any time</List.Item>
							</List>
						</section>

						<section>
							<Title order={2} className="text-gray-900 font-semibold text-2xl mb-3">
								7. Cookies and Tracking
							</Title>
							<Text className="text-gray-700 mb-4">
								We use cookies and similar tracking technologies to improve your browsing experience
								and analyze website traffic. You can control cookies through your browser settings.
							</Text>
						</section>

						<section>
							<Title order={2} className="text-gray-900 font-semibold text-2xl mb-3">
								8. Children's Privacy
							</Title>
							<Text className="text-gray-700 mb-4">
								Our services are not directed to individuals under 18 years of age. We do not
								knowingly collect personal information from children.
							</Text>
						</section>

						<section>
							<Title order={2} className="text-gray-900 font-semibold text-2xl mb-3">
								9. Changes to This Policy
							</Title>
							<Text className="text-gray-700 mb-4">
								We may update this Privacy Policy from time to time. We will notify you of any
								changes by posting the new policy on this page and updating the "Last Updated" date.
							</Text>
						</section>

						<section>
							<Title order={2} className="text-gray-900 font-semibold text-2xl mb-3">
								10. Contact Us
							</Title>
							<Text className="text-gray-700 mb-4">
								If you have any questions about this Privacy Policy or our data practices, please
								contact us at:
							</Text>
							<Text className="text-gray-700">
								<strong>Email:</strong> info.primetouchcleaning@gmail.com
								<br />
								<strong>Location:</strong> Melbourne VIC, Australia
							</Text>
						</section>
					</div>
				</Container>
			</div>
		</>
	);
}
