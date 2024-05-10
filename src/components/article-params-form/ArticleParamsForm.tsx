import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { FormEvent, ReactNode } from 'react';
import clsx from 'clsx';

interface IArticleParamsFormProps {
	menuShown: boolean;
	onReset: () => void;
	onApply: () => void;
	arrowButton: ReactNode;
	children: ReactNode;
}

export const ArticleParamsForm = (props: IArticleParamsFormProps) => {
	const { menuShown, arrowButton, onReset, onApply, children } = props;

	return (
		<>
			{arrowButton}
			<aside
				className={clsx({
					[styles.container]: true,
					[styles.container_open]: menuShown,
				})}>
				<form
					className={styles.form}
					onSubmit={(evt: FormEvent<HTMLFormElement>) => evt.preventDefault()}>
					{children}
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={onReset} />
						<Button title='Применить' type='submit' onClick={onApply} />
					</div>
				</form>
			</aside>
		</>
	);
};
