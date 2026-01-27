import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

interface ImageSliderProps {
	images: string[];
	imagesInView?: number; // how many images to show at once
	intervalMs?: number; // auto-scroll interval
}

const ImageSlider: React.FC<ImageSliderProps> = ({
	images,
	imagesInView = 3,
	intervalMs = 2000
}) => {
	const autoplay = useRef(Autoplay({ delay: intervalMs, stopOnInteraction: true }));
	if (!images || images.length === 0) return null;
	console.log(images);
	return (
		<Carousel
			className="w-full"
			withIndicators
			slideSize={`${100 / imagesInView}%`}
			slideGap="md"
			plugins={[autoplay.current]}
			emblaOptions={{ loop: true }}
			onMouseEnter={autoplay.current.stop}
			onMouseLeave={autoplay.current.reset}
			styles={{ root: { maxWidth: 1200, margin: "auto" } }}
		>
			{images.map((img, i) => (
				<Carousel.Slide key={i}>
					<div
						style={{
							position: "relative",
							height: "600px",
							width: "300px",
							borderRadius: 8
						}}
					>
						<img
							src={img}
							alt={`Slide ${i + 1}`}
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								display: "block"
							}}
						/>
					</div>
				</Carousel.Slide>
			))}
		</Carousel>
	);
};

export default ImageSlider;
