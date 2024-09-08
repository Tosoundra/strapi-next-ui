import classNames from 'classnames';
import { ComponentProps, FC, ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
	children: ReactNode;
	className?: string;
	noneBordered?: boolean;
} & ComponentProps<'button'>;

export const Button: FC<Props> = ({ children, noneBordered = false, className, ...buttonProps }) => {
	return (
		<button
			className={classNames(styles.button, noneBordered ? styles['none-border'] : '', className)}
			{...buttonProps}>
			{children}
		</button>
	);
};
