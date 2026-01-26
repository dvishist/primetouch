import { useState } from "react";
import Link from "next/link";
import { IconPhone } from "@tabler/icons-react";
import Image from "next/image";
import primetouchIcon from "@/assets/primetouch-icon.png";

export default function Header() {
	const [open, setOpen] = useState(false);

	return (
		<>
			{/* Top bar with contact info */}
			{/* <div className="hidden md:block bg-blue-600 text-white py-2">
				<div className="mx-auto max-w-7xl px-4 md:px-6 flex items-center justify-between">
					<div className="flex items-center gap-6">
						<a
							href="tel:0412345678"
							className="flex items-center gap-2 text-sm hover:text-blue-100 transition-colors"
						>
							<IconPhone size={16} />
							<span>0412 345 678</span>
						</a>
						<span className="text-sm text-blue-100">Mon-Sat: 7am - 7pm</span>
					</div>
					<div className="flex items-center gap-4">
						<a
							href="mailto:info@primetouch.com.au"
							className="text-sm hover:text-blue-100 transition-colors"
						>
							info@primetouch.com.au
						</a>
					</div>
				</div>
			</div> */}

			<header className="sticky top-0 z-30 w-full border-b border-zinc-200 bg-white/90 backdrop-blur">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
					<Link href="/" className="flex items-center gap-3">
						<Image
							src={primetouchIcon}
							alt="PrimeTouch Cleaning Icon"
							width={40}
							height={40}
							className="rounded-lg"
							priority
						/>
						<span className="text-lg font-bold tracking-tight text-zinc-900">
							PrimeTouch Cleaning
						</span>
					</Link>

					{/* Desktop nav */}
					<nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
						<Link href="/" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
							Home
						</Link>
						<Link href="/pricing" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
							Pricing
						</Link>

						<Link href="/about" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
							About
						</Link>

						<a
							href="/#contact"
							className="inline-flex items-center rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700"
							onClick={e => {
								if (window.location.pathname !== "/") {
									e.preventDefault();
									window.location.href = "/#contact";
								}
							}}
						>
							Contact Us
						</a>
					</nav>

					{/* Mobile menu button */}
					<button
						type="button"
						className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 md:hidden"
						aria-label="Open menu"
						aria-controls="mobile-nav"
						aria-expanded={open}
						onClick={() => setOpen(v => !v)}
					>
						<svg
							className="h-6 w-6"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							{open ? (
								<path
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									d="M6 18 18 6M6 6l12 12"
								/>
							) : (
								<path
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
								/>
							)}
						</svg>
					</button>
				</div>

				{/* Mobile nav drawer */}
				<div
					id="mobile-nav"
					className={`md:hidden ${open ? "block" : "hidden"}`}
					role="dialog"
					aria-label="Mobile navigation"
				>
					<nav className="space-y-1 border-t border-zinc-200 bg-white px-4 py-4">
						<Link
							href="/"
							className="block rounded-md px-2 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
							onClick={() => setOpen(false)}
						>
							Home
						</Link>
						<Link
							href="/pricing"
							className="block rounded-md px-2 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
							onClick={() => setOpen(false)}
						>
							Pricing
						</Link>

						<Link
							href="/about"
							className="block rounded-md px-2 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
							onClick={() => setOpen(false)}
						>
							About
						</Link>

						<Link
							href="#contact"
							className="mt-2 block rounded-full bg-primary-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-primary-700"
							onClick={e => {
								if (window.location.pathname !== "/") {
									e.preventDefault();
									window.location.href = "/#contact";
								} else {
									setOpen(false);
								}
							}}
						>
							Contact Us
						</Link>
					</nav>
				</div>
			</header>
		</>
	);
}
