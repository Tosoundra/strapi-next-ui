import { SessionProviderLayout } from '@shared/lib/utils';
import '@styles/globals.css';
import { Footer, Header, Loader } from '@shared/ui';
import classNames from 'classnames';
import type { Metadata, Viewport } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';
import Loading from './loading';

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

					<main>
						<Suspense fallback={<Loading />}>{children}</Suspense>
					</main>

					<Footer />
				</SessionProviderLayout>
				<ToastContainer
					autoClose={3000}
					closeButton
					closeOnClick
					hideProgressBar
					pauseOnHover={false}
					position='bottom-center'
					theme='colored'
					transition={Slide}
				/>
			</body>
		</html>
	);
}
