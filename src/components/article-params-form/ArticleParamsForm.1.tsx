import { Button } from 'components/button';
import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { FormTitles, fontFamilyOptions } from 'src/constants/articleProps';
import { ArrowButton } from '../arrow-button';
import { Text } from '../text';
import { Select } from '../select';

/* export const ArticleParamsForm = (props: IArticleParamsFormProps) => {
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
}; */

export const ArticleParamsForm = () => {
	const [isMenuShown, setIsMenuShown] = useState(false);
	return (
		<>
			<ArrowButton
				isMenuShown={isMenuShown}
				onClick={() => setIsMenuShown((prev) => !prev)}
			/>
			<aside
				className={clsx({
					[styles.container]: true,
					[styles.container_open]: isMenuShown,
				})}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						title={FormTitles.fontFamily}
						placeholder={FormTitles.fontFamily}
						options={fontFamilyOptions}
						selected={fontFamily}
						onChange={(option: OptionType) => setFontFamily(option)}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
