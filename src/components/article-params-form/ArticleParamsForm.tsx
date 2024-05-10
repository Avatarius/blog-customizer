import { Button } from 'components/button';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';
import { ReactNode } from 'react';

interface IArticleParamsForm {
	menuShown: boolean;
	arrowButton: ReactNode;
}

export const ArticleParamsForm = ({
	menuShown,
	arrowButton,
}: IArticleParamsForm) => {
	return (
		<>
			{arrowButton}
			<aside
				className={clsx({
					[styles.container]: true,
					[styles.container_open]: menuShown,
				})}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
