import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	reactStrictMode: true,
	experimental: {
		turbopackUseSystemTlsCerts: true
	}
};

export default nextConfig;
