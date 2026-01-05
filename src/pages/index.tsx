import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import banner from "../assets/banner3.jpg";
import { Container, Title, Text, Button, Card, SimpleGrid, Box } from "@mantine/core";

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
						{/* <div className="mt-4 flex items-center gap-4 text-sm">
							<span className="flex items-center gap-2">🛡️ Police Checked</span>
							<span className="flex items-center gap-2">⭐ 4+ Years</span>
							<span className="flex items-center gap-2">✅ Fully Insured</span>
						</div> */}
						<p className="mt-6 max-w-xl text-base leading-7 text-zinc-700 sm:text-lg">
							Reliable, high-quality cleaning for homes and offices. Our trained pros make your
							spaces sparkle—on time, every time.
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<Button size="lg">Book Online</Button>
							<Button component={Link} href="/contact" size="lg" variant="outline">
								Contact Us
							</Button>
							{/* <Button
								component={Link}
								href="tel:1300886119"
								variant="outline"
								size="lg"
								color="brand"
							>
								Call 1300 886 119 →
							</Button> */}
						</div>
					</div>
				</div>
			</section>

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
						<Button component={Link} href="/contact" size="md">
							Get a Free Quote
						</Button>
					</div>
				</div>
			</section>

			{/* Green Promise inspired section */}
			<Box style={{ backgroundColor: "#6b7e64" }} className="py-12">
				<Container size="lg">
					<Title order={2} ta="center" c="white">
						Alexa's Green Promise
					</Title>
					<Text ta="center" mt="md" c="white">
						Our products are non-toxic, eco-friendly, and safe for pets and children. Customize your
						plan and enjoy a clean, fresh, healthy space.
					</Text>
					<div className="mt-6 flex justify-center">
						<Button component={Link} href="/contact" size="md" variant="white" color="brand">
							Request a Quote
						</Button>
					</div>
				</Container>
			</Box>
		</>
	);
}
