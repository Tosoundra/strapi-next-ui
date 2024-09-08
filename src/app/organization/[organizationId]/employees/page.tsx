import { Inter } from 'next/font/google';
import styles from './styles.module.scss';
import classNames from 'classnames';

const inter = Inter({ subsets: ['cyrillic'] });

export default function Employees() {
	return <h1 className={classNames(styles.title, inter.className)}> ← Выберите сотрудника</h1>;
}
