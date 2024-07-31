import Link from 'next/link';
import styles from './styles.module.scss';
import { Inter } from 'next/font/google';
import classNames from 'classnames';

const inter = Inter({ subsets: ['latin'] });

export default function Footer() {
	return (
		<footer className={classNames(styles.footer, inter.className)}>
			<Link href='#'>Лицензионное соглашение</Link>
			<span className={styles.copyright}>&#169;RonixSystems</span>
			<Link href='#'>Политика конфиденциальности</Link>
		</footer>
	);
}
