import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@styles/globals.css';
import { Header } from '@components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'База заявок Ronix Systems',
	description: 'База заявок Ronix - внутренний инструмент контроля задач и учёта статуса работы над входящими запросами.',
};

export const viewport: Viewport = {
	colorScheme: 'light',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />

				<main>{children}</main>
			</body>
		</html>
	);
}
