import Header from "./Header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="flex min-h-screen flex-col bg-white text-zinc-900">
			<Header />
			<main className="flex-1">{children}</main>
			<footer className="border-t border-zinc-200 bg-white py-6 text-sm">
				<div className="mx-auto max-w-7xl px-4 md:px-6">
					<p className="text-zinc-600">
						© {new Date().getFullYear()} Primetouch Cleaning Services. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
