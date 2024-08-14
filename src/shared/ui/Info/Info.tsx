import { ComponentProps, FC, ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
	children: ReactNode;
} & ComponentProps<'svg'>;

export const Info: FC<Props> = ({ children, ...SVGProps }) => {
	return (
		<div className={styles.info}>
			<svg {...SVGProps} width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<circle cx='10.5' cy='10.5' r='10.5' fill='#DFE5E2' />
				<circle cx='10.5' cy='5.5' r='1.5' fill='white' />
				<rect x='9' y='9' width='3' height='8' rx='1.5' fill='white' />
			</svg>
			<div className={styles.tooltip}>{children}</div>
		</div>
	);
};
