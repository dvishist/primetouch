import Head from "next/head";

export default function About() {
	return (
		<>
			<Head>
				<title>About Us | PrimeTouch</title>
				<meta
					name="description"
					content="Learn more about PrimeTouch, our mission, values, and the team behind our exceptional cleaning services."
				/>
			</Head>
			<main className="max-w-3xl mx-auto py-12 px-4">
				<h1 className="text-4xl font-bold mb-6 text-center">About PrimeTouch</h1>
				<p className="mb-4 text-md text-justify">
					We are a family-owned cleaning business founded by a brother and sister who share a
					passion for creating clean, healthy spaces. As hands-on owners, we are personally involved
					in every aspect of our work, ensuring that each job meets the high standards we set for
					ourselves and our team. Our journey began with a simple goal: to provide honest, reliable
					service with meticulous attention to detail, and to build lasting relationships with our
					clients. We believe that a clean environment is the foundation for well-being and peace of
					mind, and we take pride in delivering results that make a real difference. At the heart of
					our business is a commitment to integrity, quality, and customer satisfaction, because
					nothing matters more to us than seeing our clients happy, every single time.
				</p>
				<h2 className="text-2xl font-semibold mt-8 mb-2">Our Mission</h2>
				<p className="mb-4">
					To deliver exceptional cleaning services that exceed expectations, while maintaining a
					commitment to environmental responsibility and the well-being of our clients and staff.
				</p>
				<h2 className="text-2xl font-semibold mt-8 mb-2">Why Choose Us?</h2>
				<ul className="list-disc pl-6 mb-4">
					<li>Family-owned and operated</li>
					<li>Hands-on owners who care</li>
					<li>Honest, reliable, and detail-oriented service</li>
					<li>Eco-friendly cleaning products</li>
					<li>Flexible scheduling and transparent pricing</li>
					<li>100% satisfaction guarantee</li>
				</ul>
				{/* <h2 className="text-2xl font-semibold mt-8 mb-2">Meet the Team</h2>
				<p>
					Our team is made up of dedicated professionals who take pride in their work. We believe in
					continuous training and development to ensure the highest standards of service for our
					clients.
				</p> */}
				{/* Small CTA for Pricing/Booking */}
				<section className="my-12 flex flex-col items-center gap-3">
					<h2 className="text-xl font-semibold text-center">Ready to Get Started?</h2>
					<p className="text-center text-zinc-700 max-w-lg">
						Check out our transparent pricing or book your cleaning with PrimeTouch today!
					</p>
					<div className="flex gap-4 mt-2">
						<a
							href="/pricing"
							className="inline-block rounded bg-primary-600 px-5 py-2 text-white font-semibold hover:bg-primary-700 transition"
						>
							View Pricing
						</a>
						<a
							href="/book"
							className="inline-block rounded border border-primary-600 px-5 py-2 text-primary-600 font-semibold hover:bg-primary-50 transition"
						>
							Book Online
						</a>
					</div>
				</section>
			</main>
		</>
	);
}
