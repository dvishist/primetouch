import { useState } from "react";
import Link from "next/link";

export default function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-30 w-full border-b border-zinc-200 bg-white/90 backdrop-blur">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
				<Link href="/" className="flex items-center gap-2">
					<span className="inline-block h-8 w-8 rounded-md bg-primary-600" aria-hidden="true" />
					<span className="text-base font-bold tracking-tight text-zinc-900">
						Primetouch Cleaning
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
					<Link href="/services" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
						Services
					</Link>
					<Link href="/about" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
						About
					</Link>
					<Link href="/contact" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
						Contact
					</Link>
					<Link
						href="/contact"
						className="inline-flex items-center rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700"
					>
						Get a Quote
					</Link>
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
						href="/services"
						className="block rounded-md px-2 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
						onClick={() => setOpen(false)}
					>
						Services
					</Link>
					<Link
						href="/about"
						className="block rounded-md px-2 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
						onClick={() => setOpen(false)}
					>
						About
					</Link>
					<Link
						href="/contact"
						className="block rounded-md px-2 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
						onClick={() => setOpen(false)}
					>
						Contact
					</Link>
					<Link
						href="/contact"
						className="mt-2 block rounded-full bg-primary-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-primary-700"
						onClick={() => setOpen(false)}
					>
						Get a Quote
					</Link>
				</nav>
			</div>
		</header>
	);
}
