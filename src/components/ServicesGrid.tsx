import { Container, Title, Text } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { bookingOptions } from "@/data/bookingOptions";
import onceOffImg from "@/assets/services/onceoff.jpg";
import regularImg from "@/assets/services/regular.png";
import endOfLeaseImg from "@/assets/services/endoflease.png";
import airbnbImg from "@/assets/services/airbnb.png";
import moveInImg from "@/assets/services/move-in.png";
import ndisImg from "@/assets/services/ndis.png";
import { useEffect, useRef, useState } from "react";

const serviceImages: Record<string, any> = {
	"once-off": onceOffImg,
	regular: regularImg,
	"end-of-lease": endOfLeaseImg,
	airbnb: airbnbImg,
	ndis: ndisImg,
	"move-in": moveInImg
};

export default function ServicesGrid() {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	return (
		<section ref={sectionRef} className="py-16 bg-linear-to-b from-white to-gray-50">
			<Container size="lg" className="w-full">
				<Title
					order={2}
					ta="center"
					mb="xl"
					className={`text-gray-700 font-bold text-3xl transition-all duration-700 ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
					}`}
				>
					Choose your service
				</Title>

				<div className="grid grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8 w-full">
					{bookingOptions.map((option, index) => (
						<Link
							key={option.id}
							href={`/book?service=${option.id}`}
							className={`group flex flex-col items-center text-center no-underline transition-all duration-700 ${
								isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
							}`}
							style={{ transitionDelay: `${index * 100}ms` }}
						>
							<div className="relative w-32 h-32 sm:w-48 sm:h-48 hover:border-2  flex justify-center items-center rounded-full transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:scale-105 overflow-hidden bg-white">
								<div className="absolute inset-0 rounded-full overflow-hidden">
									<Image
										src={serviceImages[option.id]}
										alt={option.name}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-110"
									/>
								</div>
							</div>

							<Text
								size="xl"
								fw={600}
								mt="xs"
								className="text-gray-800 group-hover:text-blue-600 transition-colors text-sm sm:text-base"
							>
								{option.name}
							</Text>
						</Link>
					))}
				</div>
			</Container>
		</section>
	);
}
