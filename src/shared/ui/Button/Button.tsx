import classNames from 'classnames';
import { ComponentProps, FC, ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
	children: ReactNode;
	className?: string;
} & ComponentProps<'button'>;

export const Button: FC<Props> = ({ children, className, ...ComponentProps }) => {
	return (
		<button className={classNames(styles.button, className)} {...ComponentProps}>
			{children}
		</button>
	);
};
