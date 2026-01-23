import { Container, Title, Text, Accordion } from "@mantine/core";
import { IconQuestionMark } from "@tabler/icons-react";

interface FAQItem {
	question: string;
	answer: string;
}

const faqs: FAQItem[] = [
	{
		question: "How much do your cleaning services cost?",
		answer:
			"Please view our pricing page for detailed information on our rates. Our prices vary based on the type of service, property size, and specific requirements. We offer competitive rates and transparent pricing with no hidden fees. You can get an instant quote when you book online or contact us for a custom quote."
	},
	{
		question: "Do I need to provide cleaning supplies and equipment?",
		answer:
			"No! Our professional cleaners come fully equipped with all necessary cleaning supplies, equipment, and eco-friendly products. You don't need to provide anything. However, if you have specific products you'd prefer us to use, we're happy to accommodate."
	},
	{
		question: "What areas do you service?",
		answer:
			"We proudly serve Melbourne and surrounding suburbs. If you're unsure whether we service your area, please contact us or check our service area map on the homepage."
	},
	{
		question: "How long does a cleaning service take?",
		answer:
			"The duration depends on the service type and property size. Regular and once-off cleans typically have a 3-hour minimum. Deep cleans may take 4-6 hours. End of lease cleaning can take a full day depending on the property condition and size. We'll provide an estimated time when you book."
	},
	{
		question: "What's included in your cleaning services?",
		answer:
			"Our standard cleaning includes dusting, vacuuming, mopping, bathroom sanitization, kitchen cleaning, and taking out garbage. Deep cleans include additional tasks like cleaning inside cabinets, ovens, and fridges. End of lease cleaning covers everything required to pass property inspections. We can customize services based on your needs."
	},
	{
		question: "Do you offer regular/recurring cleaning services?",
		answer:
			"Yes! We offer flexible recurring cleaning plans including weekly, bi-weekly, and monthly schedules. Regular clients enjoy priority booking and special rates. You can easily set up and manage your recurring schedule through our online booking system."
	},
	{
		question: "Can you accommodate special requests or focus areas?",
		answer:
			"Absolutely! We're happy to customize our service to meet your specific needs. Whether you need extra attention in certain rooms, have specific cleaning products you'd like us to use, or have special requirements, just let us know when booking and we'll accommodate your requests."
	}
];

export default function FAQ() {
	return (
		<section className="py-16 bg-white">
			<Container size="md">
				<div className="text-center mb-12 flex flex-col items-center">
					<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
						<IconQuestionMark size={32} className="text-blue-600" />
					</div>
					<Title order={2} className="text-gray-800 font-bold text-3xl mb-4">
						Frequently Asked Questions
					</Title>
					<Text size="lg" c="dimmed" className="max-w-2xl mx-auto">
						Got questions? We've got answers! Find everything you need to know about our cleaning
						services.
					</Text>
				</div>

				<Accordion
					variant="separated"
					radius="md"
					chevronPosition="right"
					classNames={{
						item: "border border-gray-200 mb-3 hover:shadow-md transition-shadow",
						control: "hover:bg-gray-50",
						label: "font-semibold text-gray-800",
						content: "text-gray-600 leading-relaxed"
					}}
				>
					{faqs.map((faq, index) => (
						<Accordion.Item key={index} value={`faq-${index}`}>
							<Accordion.Control>{faq.question}</Accordion.Control>
							<Accordion.Panel>{faq.answer}</Accordion.Panel>
						</Accordion.Item>
					))}
				</Accordion>

				<div className="mt-8 text-center">
					<Text c="dimmed" size="sm">
						Still have questions?{" "}
						<a href="#contact" className="text-blue-600 hover:underline font-semibold">
							Contact us
						</a>{" "}
						and we'll be happy to help!
					</Text>
				</div>
			</Container>
		</section>
	);
}
