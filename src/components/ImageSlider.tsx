import React, { useState } from "react";

interface ImageSliderProps {
	images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
	const [current, setCurrent] = useState(0);
	if (!images || images.length === 0) return null;

	const prev = () => setCurrent(c => (c === 0 ? images.length - 1 : c - 1));
	const next = () => setCurrent(c => (c === images.length - 1 ? 0 : c + 1));

	return (
		<div style={{ position: "relative", width: "100%", maxWidth: 600, margin: "auto" }}>
			<img
				src={images[current]}
				alt={`Slide ${current + 1}`}
				style={{ width: "100%", borderRadius: 8, boxShadow: "0 2px 8px #0002" }}
			/>
			<button
				onClick={prev}
				style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)" }}
			>
				&lt;
			</button>
			<button
				onClick={next}
				style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)" }}
			>
				&gt;
			</button>
			<div style={{ textAlign: "center", marginTop: 8 }}>
				{images.map((_, i) => (
					<span
						key={i}
						style={{
							display: "inline-block",
							width: 8,
							height: 8,
							borderRadius: "50%",
							background: i === current ? "#333" : "#ccc",
							margin: "0 4px"
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default ImageSlider;
