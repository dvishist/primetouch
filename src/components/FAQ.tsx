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
			"Our pricing varies depending on the service type and property size. Once-off and regular cleans start from $50/hour with a 3-hour minimum. End of lease cleaning starts from $50/hour. Airbnb cleaning is priced per service. We provide transparent, upfront pricing with no hidden fees. Book online or contact us for a custom quote."
	},
	{
		question: "Do I need to provide cleaning supplies and equipment?",
		answer:
			"No! Our professional cleaners come fully equipped with all necessary cleaning supplies, equipment, and eco-friendly products. You don't need to provide anything. However, if you have specific products you'd prefer us to use, we're happy to accommodate."
	},
	{
		question: "Are your cleaners background checked and insured?",
		answer:
			"Absolutely! All our cleaning professionals undergo thorough background checks and are fully insured. We take your safety and security seriously. Our team members are trained, experienced, and trusted to deliver exceptional service."
	},
	{
		question: "Can I reschedule or cancel my booking?",
		answer:
			"Yes, we understand that plans change. You can reschedule or cancel your booking up to 24 hours before your scheduled service without any penalty. For cancellations within 24 hours, a cancellation fee may apply. Simply contact us or manage your booking online."
	},
	{
		question: "What areas do you service?",
		answer:
			"We proudly serve Melbourne and surrounding suburbs. This includes Melbourne CBD, Richmond, South Yarra, Brunswick, Preston, Footscray, and many more areas. If you're unsure whether we service your area, please contact us or check our service area map on the homepage."
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
		question: "What if I'm not satisfied with the cleaning?",
		answer:
			"Your satisfaction is our priority! We offer a happiness guarantee - if you're not completely satisfied with our service, contact us within 24 hours and we'll send a team back to re-clean any areas of concern at no extra charge."
	},
	{
		question: "Do I need to be home during the cleaning?",
		answer:
			"Not at all! Many of our clients prefer to have their homes cleaned while they're at work or running errands. You can provide us with access instructions, and our trusted professionals will take care of everything. We'll lock up and ensure your property is secure when we're done."
	},
	{
		question: "Can you accommodate special requests or focus areas?",
		answer:
			"Absolutely! We're happy to customize our service to meet your specific needs. Whether you need extra attention in certain rooms, have specific cleaning products you'd like us to use, or have special requirements, just let us know when booking and we'll accommodate your requests."
	},
	{
		question: "How do I prepare for the cleaning service?",
		answer:
			"Minimal preparation is needed! We recommend picking up personal items, toys, and clutter to allow our team to focus on cleaning surfaces. For end of lease cleans, the property should be empty of all belongings. We'll take care of the rest!"
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
