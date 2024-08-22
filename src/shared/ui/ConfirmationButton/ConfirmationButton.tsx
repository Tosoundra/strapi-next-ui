import { Button } from '@shared/ui';
import { ComponentProps, FC, ReactNode } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

type Props = {
	children: ReactNode;
} & ComponentProps<'button'>;

export const ConfirmationButton: FC<Props> = ({ children, className, ...buttonProps }) => {
	return (
		<Button className={classNames(styles['confirmation-button'], className)} {...buttonProps}>
			{children}
		</Button>
	);
};
