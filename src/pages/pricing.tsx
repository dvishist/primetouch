import Head from "next/head";
import Link from "next/link";
import { Accordion } from "@mantine/core";
import { bookingOptions } from "@/data/bookingOptions";

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
						<Link href="/#contact" className="text-primary-700 underline">
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
						{bookingOptions.map(option => (
							<Accordion.Item key={option.id} value={option.id}>
								<Accordion.Control>{option.name}</Accordion.Control>
								<Accordion.Panel>
									<p className="text-base text-zinc-700">{option.description}</p>

									{/* Pricing Table */}
									<div className="mt-4 overflow-x-auto">
										<table className="w-full border-collapse text-left text-base">
											<thead>
												<tr className="border-b border-zinc-200 text-zinc-700">
													<th className="py-2 pr-4">
														{option.id === "end-of-lease" ? "Property Size" : "Plan"}
													</th>
													<th className="py-2 pr-4">
														{option.id === "end-of-lease" ? "Flat Price" : "Standard Rate"}
													</th>
													{option.supportsCleanLevel && (
														<th className="py-2 pr-4">Deep Clean Rate</th>
													)}
													{option.id !== "end-of-lease" && <th className="py-2">Minimum Hours</th>}
												</tr>
											</thead>
											<tbody className="text-zinc-800">
												{option.pricing.map((pricing, idx) => (
													<tr
														key={idx}
														className={
															idx < option.pricing.length - 1 ? "border-b border-zinc-100" : ""
														}
													>
														<td className="py-3 pr-4 capitalize">{pricing.period}</td>
														<td className="py-3 pr-4">
															{option.id === "end-of-lease"
																? pricing.period === "Five+ Bed"
																	? "Contact for Quote"
																	: `$${pricing.pricePerHour.toFixed(2)}`
																: `$${pricing.pricePerHour.toFixed(2)} per hour${
																		pricing.additionalHourPrice
																			? `($${pricing.additionalHourPrice.toFixed(2)} additional hours)`
																			: ""
																	}`}
														</td>
														{option.supportsCleanLevel && (
															<td className="py-3 pr-4">
																{pricing.deepCleanPricePerHour
																	? `$${pricing.deepCleanPricePerHour.toFixed(2)} per hour${
																			pricing.deepCleanAdditionalHourPrice
																				? ` ($${pricing.deepCleanAdditionalHourPrice.toFixed(2)} additional hours)`
																				: ""
																		}`
																	: "N/A"}
															</td>
														)}
														{option.id !== "end-of-lease" && (
															<td className="py-3">
																{pricing.minHours} hour{pricing.minHours !== 1 ? "s" : ""}
															</td>
														)}
													</tr>
												))}
											</tbody>
										</table>
									</div>

									{/* Addons Section */}
									{option.addons && option.addons.length > 0 && (
										<div className="mt-6">
											<h3 className="text-xl font-medium">Available Add-ons</h3>
											<ul className="mt-2 grid gap-2 text-base sm:grid-cols-2 md:grid-cols-3">
												{option.addons.map(addon => (
													<li
														key={addon.id}
														className="rounded-lg border border-zinc-200 px-3 py-2"
													>
														{addon.name}: ${addon.price}
													</li>
												))}
											</ul>
										</div>
									)}
								</Accordion.Panel>
							</Accordion.Item>
						))}
					</Accordion>

					{/* Notes + CTA */}
					<div className="mt-4">
						<Link
							href="/book"
							className="inline-flex items-center rounded-full bg-primary-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700"
						>
							Book Now
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
