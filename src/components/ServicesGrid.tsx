import { Container, Title, Text } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { bookingOptions } from "@/data/bookingOptions";
import onceOffImg from "@/assets/services/onceoff.jpg";
import regularImg from "@/assets/services/regular.png";
import endOfLeaseImg from "@/assets/services/endoflease.png";
import airbnbImg from "@/assets/services/airbnb.png";
import ndisImg from "@/assets/services/ndis.png";

const serviceImages: Record<string, any> = {
	"once-off": onceOffImg,
	regular: regularImg,
	"end-of-lease": endOfLeaseImg,
	airbnb: airbnbImg,
	ndis: ndisImg
};

export default function ServicesGrid() {
	return (
		<section className="py-16 bg-linear-to-b from-white to-gray-50">
			<Container size="lg" className="w-full">
				<Title order={2} ta="center" mb="xl" className="text-gray-700 font-bold text-3xl">
					Choose your service
				</Title>

				<div className="grid grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8 w-full">
					{bookingOptions.map(option => (
						<Link
							key={option.id}
							href={`/book?service=${option.id}`}
							className="group flex flex-col items-center text-center no-underline"
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
