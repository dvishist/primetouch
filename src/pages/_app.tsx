import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MantineProvider
			theme={{
				primaryColor: "teal",
				fontFamily:
					"Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans'",
				headings: { fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto" },
				defaultRadius: "md"
			}}
		>
			<Notifications position="top-right" />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</MantineProvider>
	);
}
