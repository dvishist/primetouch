import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MantineProvider
			theme={{
				colors: {
					brand: [
						"#eef3f7",
						"#d9e2ea",
						"#bdcbd7",
						"#a1b4c4",
						"#869eb1",
						"#6b879e",
						"#3e5c76",
						"#314a5e",
						"#243846",
						"#16262e"
					]
				},
				primaryColor: "brand",
				primaryShade: 6,
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
