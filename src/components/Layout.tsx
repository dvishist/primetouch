import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="flex min-h-screen flex-col bg-white text-zinc-900">
			<Header />
			<main className="flex-1">{children}</main>
			<Footer />
		</div>
	);
}
