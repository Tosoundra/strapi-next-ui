import { SessionProviderLayout } from '@shared/lib/utils';
import '@styles/globals.css';
import { Footer, Header } from '@shared/ui';
import classNames from 'classnames';
import type { Metadata, Viewport } from 'next';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({ subsets: ['cyrillic'] });
const montserrat = Montserrat({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
	title: 'База заявок Ronix Systems',
	description:
		'База заявок Ronix - внутренний инструмент контроля задач и учёта статуса работы над входящими запросами.',
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
			<body className={classNames(montserrat.className, inter.className)}>
				<SessionProviderLayout>
					<Header />
					<main>{children}</main>
					<Footer />
				</SessionProviderLayout>
			</body>
		</html>
	);
}
