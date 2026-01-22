import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import banner from "../assets/banner3.jpg";
import { Container, Title, Text, Button, Card, SimpleGrid, Box } from "@mantine/core";
import ServicesGrid from "@/components/ServicesGrid";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import TrustBadges from "@/components/TrustBadges";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import WhatsIncluded from "@/components/WhatsIncluded";
import CTABanner from "@/components/CTABanner";
import ProcessTimeline from "@/components/ProcessTimeline";

export default function Home() {
	return (
		<>
			<Head>
				<title>Primetouch Cleaning Services | Sparkling Clean, Every Time</title>
				<meta
					name="description"
					content="Professional residential and commercial cleaning services. Book reliable cleaners for deep cleans, move-in/move-out, and regular maintenance."
				/>
			</Head>

			{/* Hero */}
			<section className="hero-section">
				<div className="hero-background">
					<Image
						src={banner}
						alt="Professional cleaning service"
						fill
						priority
						className="hero-image"
						sizes="100vw"
					/>
				</div>
				<div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-6">
					<div className="hero-content">
						<h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
							Prime Touch Cleaning Services
						</h1>

						<p className="mt-6 max-w-xl text-base leading-7 text-zinc-700 sm:text-lg">
							Reliable, high-quality cleaning for homes and offices. Our trained pros make your
							spaces sparkle—on time, every time.
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<Button component={Link} href="/book" size="lg">
								Book Online
							</Button>
							<Button component="a" href="#contact" size="lg" variant="outline">
								Contact Us
							</Button>
						</div>
					</div>
				</div>
			</section>

			<ServicesGrid />

			{/* Trust Badges */}
			<TrustBadges />

			{/* Why Choose Us */}
			<WhyChooseUs />

			{/* Process Timeline */}
			<ProcessTimeline />

			{/* Highlights using Mantine */}
			<Container size="lg" className="py-12">
				<SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
					{[
						{
							title: "Reliable Pros",
							desc: "Background-checked, trained cleaners you can trust.",
							icon: "✅"
						},
						{
							title: "Flexible Plans",
							desc: "One-time, weekly, bi-weekly, or monthly.",
							icon: "📅"
						},
						{ title: "Transparent Pricing", desc: "Clear rates with no hidden fees.", icon: "💬" }
					].map(item => (
						<Card key={item.title} withBorder radius="lg" padding="lg">
							<Text fz={24}>{item.icon}</Text>
							<Title order={3} mt="xs">
								{item.title}
							</Title>
							<Text mt="xs" c="dimmed">
								{item.desc}
							</Text>
						</Card>
					))}
				</SimpleGrid>
			</Container>

			{/* How it works */}
			<section className="bg-zinc-50 py-12">
				<div className="mx-auto max-w-7xl px-4 md:px-6">
					<h2 className="text-center text-2xl font-bold">How it works</h2>
					<div className="mt-8 grid gap-6 sm:grid-cols-3">
						{[
							{ step: "1", title: "Book", desc: "Tell us what you need and when." },
							{ step: "2", title: "We Clean", desc: "Our pros arrive and make it sparkle." },
							{ step: "3", title: "Relax", desc: "Enjoy a spotless space, stress-free." }
						].map(s => (
							<div
								key={s.step}
								className="rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm"
							>
								<div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
									{s.step}
								</div>
								<h3 className="text-lg font-semibold">{s.title}</h3>
								<p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
							</div>
						))}
					</div>
					<div className="mt-8 flex justify-center">
						<Button component="a" href="#contact" size="md">
							Get a Free Quote
						</Button>
					</div>
				</div>
			</section>

			{/* What's Included */}
			<WhatsIncluded />

			{/* Service Area Map */}
			<ServiceAreaMap />

			{/* Stats */}
			<Stats />

			{/* Testimonials */}
			<Testimonials />

			{/* CTA Banner */}
			<CTABanner variant="secondary" />

			{/* FAQ */}
			<FAQ />

			{/* Contact Form */}
			<ContactForm />
		</>
	);
}
