import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import buckets from "../assets/buckets.png";
import ImageSlider from "@/components/ImageSlider";
import { Button } from "@mantine/core";
import ServicesGrid from "@/components/ServicesGrid";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import TrustBadges from "@/components/TrustBadges";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import CTABanner from "@/components/CTABanner";
import ProcessTimeline from "@/components/ProcessTimeline";

import img1 from "../assets/gallery/46C841CE-D4B8-44C6-9457-97B4A6289E66.png";
import img3 from "../assets/gallery/IMG_0519.jpg";
import img6 from "../assets/gallery/IMG_0769.jpg";
import img7 from "../assets/gallery/IMG_0777.jpg";
import img8 from "../assets/gallery/IMG_0919.jpg";
import img9 from "../assets/gallery/IMG_0984.jpg";
import img10 from "../assets/gallery/IMG_0987.jpg";
import img11 from "../assets/gallery/IMG_0988.jpg";

const sliderImages = [img1, img3, img6, img7, img8, img9, img10, img11];

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Primetouch Cleaning </title>
				<meta
					name="description"
					content="Professional residential and commercial cleaning services. Book reliable cleaners for deep cleans, move-in/move-out, and regular maintenance."
				/>
			</Head>

			{/* Hero */}
			<section className="hero-section-new">
				<div className="hero-gradient-bg">
					{/* Decorative SVG Elements */}
					<svg
						className="hero-decoration-1"
						viewBox="0 0 400 400"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="200" cy="200" r="150" fill="url(#gradient1)" opacity="0.4" />
						<circle cx="180" cy="220" r="100" fill="url(#gradient2)" opacity="0.3" />
						<defs>
							<linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
								<stop offset="100%" style={{ stopColor: "#60a5fa", stopOpacity: 0.8 }} />
							</linearGradient>
							<linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" style={{ stopColor: "#06b6d4", stopOpacity: 1 }} />
								<stop offset="100%" style={{ stopColor: "#22d3ee", stopOpacity: 0.6 }} />
							</linearGradient>
						</defs>
					</svg>
					<svg
						className="hero-decoration-2"
						viewBox="0 0 300 300"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M150 50 L250 150 L150 250 L50 150 Z" fill="url(#gradient3)" opacity="0.25" />
						<defs>
							<linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" style={{ stopColor: "#8b5cf6", stopOpacity: 0.5 }} />
								<stop offset="100%" style={{ stopColor: "#a78bfa", stopOpacity: 0.3 }} />
							</linearGradient>
						</defs>
					</svg>
					{/* Sparkle Icons */}
					<div className="hero-sparkles">
						<span className="sparkle sparkle-1">✨</span>
						<span className="sparkle sparkle-2">✨</span>
						<span className="sparkle sparkle-3">✨</span>
						<span className="sparkle sparkle-4">✨</span>
					</div>
					{/* Buckets Image */}
					<div className="hero-buckets">
						<Image src={buckets} alt="Cleaning buckets" width={250} height={250} priority />
					</div>
				</div>

				<div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-6">
					<div className="hero-content-new">
						<h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
							PrimeTouch Cleaning
						</h1>
						<div className="w-full flex justify-center">
							<p className="text-gray-500">"The perfect touch for every space."</p>
						</div>

						<p className="mt-6 max-w-xl text-lg leading-8 text-zinc-700 sm:text-xl">
							Experience top-notch cleaning services tailored to your needs.
							<br />
							Book now for a sparkling clean, every time.
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

			{/* Image Slider from local assets */}
			<div style={{ margin: "40px auto", maxWidth: 1200 }}>
				<ImageSlider images={sliderImages.map(img => img.src)} />
			</div>

			{/* Process Timeline */}
			<ProcessTimeline />

			{/* What's Included */}
			{/* <WhatsIncluded /> */}

			{/* Service Area Map */}
			<ServiceAreaMap />

			{/* Stats */}
			{/* <Stats /> */}

			{/* Testimonials */}
			{/* <Testimonials /> */}

			{/* CTA Banner */}
			<CTABanner variant="secondary" />

			{/* FAQ */}
			<FAQ />

			{/* Contact Form */}
			<ContactForm />
		</>
	);
}
