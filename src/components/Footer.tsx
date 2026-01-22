import { Container, Group, Text, Anchor } from "@mantine/core";
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandTwitter,
	IconMail,
	IconPhone,
	IconMapPin
} from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-900 text-gray-300">
			{/* Main Footer */}
			<div className="border-b border-gray-800">
				<Container size="lg" className="py-12">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Company Info */}
						<div>
							<h3 className="text-white font-bold text-lg mb-4">PrimeTouch Cleaning</h3>
							<Text size="sm" className="mb-4 text-gray-400">
								Professional cleaning services for homes and businesses across Melbourne. Quality
								you can trust.
							</Text>
							<div className="flex gap-3">
								<a
									href="https://facebook.com"
									target="_blank"
									rel="noopener noreferrer"
									className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
									aria-label="Facebook"
								>
									<IconBrandFacebook size={18} />
								</a>
								<a
									href="https://instagram.com"
									target="_blank"
									rel="noopener noreferrer"
									className="w-9 h-9 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors"
									aria-label="Instagram"
								>
									<IconBrandInstagram size={18} />
								</a>
								<a
									href="https://twitter.com"
									target="_blank"
									rel="noopener noreferrer"
									className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-400 flex items-center justify-center transition-colors"
									aria-label="Twitter"
								>
									<IconBrandTwitter size={18} />
								</a>
							</div>
						</div>

						{/* Quick Links */}
						<div>
							<h3 className="text-white font-semibold mb-4">Quick Links</h3>
							<div className="flex flex-col gap-2">
								<Link href="/" className="text-sm hover:text-blue-400 transition-colors">
									Home
								</Link>
								<Link href="/book" className="text-sm hover:text-blue-400 transition-colors">
									Book Now
								</Link>
								<Link href="/pricing" className="text-sm hover:text-blue-400 transition-colors">
									Pricing
								</Link>
								<Link href="/services" className="text-sm hover:text-blue-400 transition-colors">
									Services
								</Link>
								<Link href="/about" className="text-sm hover:text-blue-400 transition-colors">
									About Us
								</Link>
							</div>
						</div>

						{/* Services */}
						<div>
							<h3 className="text-white font-semibold mb-4">Our Services</h3>
							<div className="flex flex-col gap-2">
								<Text size="sm" className="hover:text-blue-400 transition-colors cursor-pointer">
									Once-off Cleaning
								</Text>
								<Text size="sm" className="hover:text-blue-400 transition-colors cursor-pointer">
									Regular Cleaning
								</Text>
								<Text size="sm" className="hover:text-blue-400 transition-colors cursor-pointer">
									End of Lease Clean
								</Text>
								<Text size="sm" className="hover:text-blue-400 transition-colors cursor-pointer">
									Airbnb Cleaning
								</Text>
								<Text size="sm" className="hover:text-blue-400 transition-colors cursor-pointer">
									Deep Cleaning
								</Text>
								<Text size="sm" className="hover:text-blue-400 transition-colors cursor-pointer">
									Office Cleaning
								</Text>
							</div>
						</div>

						{/* Contact Info */}
						<div>
							<h3 className="text-white font-semibold mb-4">Contact Us</h3>
							<div className="flex flex-col gap-3">
								<a
									href="tel:0412345678"
									className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
								>
									<IconPhone size={18} />
									<span>0412 345 678</span>
								</a>
								<a
									href="mailto:info@primetouch.com.au"
									className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
								>
									<IconMail size={18} />
									<span>info@primetouch.com.au</span>
								</a>
								<div className="flex items-start gap-2 text-sm">
									<IconMapPin size={18} className="mt-1 shrink-0" />
									<span>
										Melbourne VIC
										<br />
										Australia
									</span>
								</div>
								<Text size="sm" className="text-gray-400 mt-2">
									<strong className="text-gray-300">Hours:</strong>
									<br />
									Mon-Sat: 7:00am - 7:00pm
									<br />
									Sun: 8:00am - 5:00pm
								</Text>
							</div>
						</div>
					</div>
				</Container>
			</div>

			{/* Bottom Bar */}
			<div className="py-6">
				<Container size="lg">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						<Text size="sm" className="text-gray-400">
							© {currentYear} PrimeTouch Cleaning Services. All rights reserved.
						</Text>
						<div className="flex gap-6">
							<Link
								href="/privacy"
								className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
							>
								Privacy Policy
							</Link>
							<Link
								href="/terms"
								className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
							>
								Terms of Service
							</Link>
						</div>
					</div>
				</Container>
			</div>
		</footer>
	);
}
