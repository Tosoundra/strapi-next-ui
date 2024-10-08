import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: `@import "index.scss";`,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	async redirects() {
		return [];
	},
};

export default nextConfig;
