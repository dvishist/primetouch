import Head from "next/head";
import Link from "next/link";
import { Accordion } from "@mantine/core";

export default function PricingPage() {
	return (
		<>
			<Head>
				<title>Pricing | Primetouch Cleaning Services</title>
				<meta
					name="description"
					content="Transparent cleaning prices for regular, one-off, Airbnb, end-of-lease and commercial services. Minimum hours apply; extras available."
				/>
			</Head>

			{/* Hero */}
			<section className="bg-linear-to-b from-primary-50 to-white">
				<div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
					<h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
						Pricing & Packages
					</h1>
					<p className="mt-3 max-w-2xl text-lg text-zinc-700">
						Premium clean, personal touch — The Perfect Touch for Every Space. Clear, upfront
						pricing below. Questions?{" "}
						<Link href="/contact" className="text-primary-700 underline">
							Contact us
						</Link>
						.
					</p>
				</div>
			</section>

			{/* Pricing sections (Collapsible) */}
			<section className="py-6">
				<div className="mx-auto max-w-7xl px-4 md:px-6">
					<Accordion
						multiple
						variant="separated"
						radius="lg"
						defaultValue={[]}
						className="[&_.mantine-Accordion-control]:text-lg"
					>
						{/* Regular Cleaning */}
						<Accordion.Item value="regular">
							<Accordion.Control>Regular Cleaning</Accordion.Control>
							<Accordion.Panel>
								<p className="text-base text-zinc-700">Weekly, Fortnightly, or Monthly.</p>
								<div className="mt-4 overflow-x-auto">
									<table className="w-full border-collapse text-left text-base">
										<thead>
											<tr className="border-b border-zinc-200 text-zinc-700">
												<th className="py-2 pr-4">Plan</th>
												<th className="py-2 pr-4">Rate</th>
												<th className="py-2">Minimum</th>
											</tr>
										</thead>
										<tbody className="text-zinc-800">
											<tr className="border-b border-zinc-100">
												<td className="py-3 pr-4">Weekly</td>
												<td className="py-3 pr-4">$40 per hour</td>
												<td className="py-3">2 hours</td>
											</tr>
											<tr className="border-b border-zinc-100">
												<td className="py-3 pr-4">Fortnightly</td>
												<td className="py-3 pr-4">$40 per hour</td>
												<td className="py-3">3 hours</td>
											</tr>
											<tr>
												<td className="py-3 pr-4">Monthly</td>
												<td className="py-3 pr-4">$45 per hour</td>
												<td className="py-3">3 hours</td>
											</tr>
										</tbody>
									</table>
								</div>
							</Accordion.Panel>
						</Accordion.Item>

						{/* Once-off Cleaning */}
						<Accordion.Item value="oneoff">
							<Accordion.Control>Once-off Cleaning</Accordion.Control>
							<Accordion.Panel>
								<div className="mt-2 grid gap-4 sm:grid-cols-2">
									<div className="rounded-xl border border-zinc-200 p-4">
										<h3 className="text-lg font-medium">Standard Deep Clean</h3>
										<p className="mt-1 text-base text-zinc-700">$45 per hour</p>
										<p className="text-sm text-zinc-500">Minimum 3 hours</p>
									</div>
									<div className="rounded-xl border border-zinc-200 p-4">
										<h3 className="text-lg font-medium">Premium Deep Clean</h3>
										<p className="mt-1 text-base text-zinc-700">$48 per hour</p>
										<p className="text-sm text-zinc-500">Minimum 6 hours</p>
									</div>
								</div>
							</Accordion.Panel>
						</Accordion.Item>

						{/* Airbnb */}
						<Accordion.Item value="airbnb">
							<Accordion.Control>Airbnb Cleaning</Accordion.Control>
							<Accordion.Panel>
								<div className="mt-2 overflow-x-auto">
									<table className="w-full border-collapse text-left text-base">
										<thead>
											<tr className="border-b border-zinc-200 text-zinc-700">
												<th className="py-2 pr-4">Type</th>
												<th className="py-2 pr-4">Rate</th>
												<th className="py-2">Minimum</th>
											</tr>
										</thead>
										<tbody className="text-zinc-800">
											<tr className="border-b border-zinc-100">
												<td className="py-3 pr-4">Once-off</td>
												<td className="py-3 pr-4">$60 per hour</td>
												<td className="py-3">3 hours</td>
											</tr>
											<tr>
												<td className="py-3 pr-4">Regular</td>
												<td className="py-3 pr-4">$55 per hour</td>
												<td className="py-3">2 hours</td>
											</tr>
										</tbody>
									</table>
								</div>
							</Accordion.Panel>
						</Accordion.Item>

						{/* End of lease */}
						<Accordion.Item value="eol">
							<Accordion.Control>End of Lease (Move-In/Move-Out)</Accordion.Control>
							<Accordion.Panel>
								<div className="overflow-x-auto">
									<table className="w-full border-collapse text-left text-base">
										<thead>
											<tr className="border-b border-zinc-200 text-zinc-700">
												<th className="py-2 pr-4">Property</th>
												<th className="py-2">Flat Price</th>
											</tr>
										</thead>
										<tbody className="text-zinc-800">
											<tr className="border-b border-zinc-100">
												<td className="py-3 pr-4">1 Bedroom</td>
												<td className="py-3">$190</td>
											</tr>
											<tr className="border-b border-zinc-100">
												<td className="py-3 pr-4">2 Bedroom</td>
												<td className="py-3">$290</td>
											</tr>
											<tr className="border-b border-zinc-100">
												<td className="py-3 pr-4">3 Bedroom</td>
												<td className="py-3">$405</td>
											</tr>
											<tr>
												<td className="py-3 pr-4">4 Bedroom</td>
												<td className="py-3">$550</td>
											</tr>
										</tbody>
									</table>
								</div>

								<h3 className="mt-6 text-xl font-medium">Extras</h3>
								<ul className="mt-2 grid gap-2 text-base sm:grid-cols-2 md:grid-cols-3">
									<li className="rounded-lg border border-zinc-200 px-3 py-2">Toilet: $10</li>
									<li className="rounded-lg border border-zinc-200 px-3 py-2">Garage: $35</li>
									<li className="rounded-lg border border-zinc-200 px-3 py-2">Balcony: $45</li>
									<li className="rounded-lg border border-zinc-200 px-3 py-2">Bathroom: $25</li>
									<li className="rounded-lg border border-zinc-200 px-3 py-2">Kitchen: $80</li>
								</ul>
							</Accordion.Panel>
						</Accordion.Item>

						{/* Commercial */}
						<Accordion.Item value="commercial">
							<Accordion.Control>Commercial Cleaning</Accordion.Control>
							<Accordion.Panel>
								<div className="mt-2 overflow-x-auto">
									<table className="w-full border-collapse text-left text-base">
										<thead>
											<tr className="border-b border-zinc-200 text-zinc-700">
												<th className="py-2 pr-4">Type</th>
												<th className="py-2">Rate</th>
											</tr>
										</thead>
										<tbody className="text-zinc-800">
											<tr className="border-b border-zinc-100">
												<td className="py-3 pr-4">Once-off</td>
												<td className="py-3">$45 per hour</td>
											</tr>
											<tr>
												<td className="py-3 pr-4">Regular</td>
												<td className="py-3">$40 per hour</td>
											</tr>
										</tbody>
									</table>
								</div>
							</Accordion.Panel>
						</Accordion.Item>
					</Accordion>

					{/* Notes + CTA */}
					<div className="mt-10 rounded-2xl border border-zinc-200 bg-primary-50 p-6 text-primary-900">
						<h3 className="text-xl font-semibold">Good to know</h3>
						<ul className="mt-2 list-disc space-y-1 pl-5 text-base">
							<li>All hourly services have minimum hours as listed.</li>
							<li>Prices are in AUD and may vary with scope and condition.</li>
							<li>Supplies and equipment included unless stated otherwise.</li>
						</ul>
						<div className="mt-4">
							<Link
								href="/contact"
								className="inline-flex items-center rounded-full bg-primary-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700"
							>
								Request a Free Quote
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
