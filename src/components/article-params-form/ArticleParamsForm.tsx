import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import clsx from 'clsx';
import {
	FormTitles,
	OptionType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	ArticleStateType,
} from 'src/constants/articleProps';
import { ArrowButton } from '../arrow-button';
import { Text } from '../text';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

type IStyle = {
	[K in keyof ArticleStateType]: string;
};

interface IArticleParamsFormProps {
	setPageStyle: Dispatch<SetStateAction<IStyle>>;
}

export const ArticleParamsForm = ({
	setPageStyle,
}: IArticleParamsFormProps) => {
	const [isMenuShown, setIsMenuShown] = useState(false);
	const [formState, setFormState] = useState(defaultArticleState);

	function handleChange(type: keyof ArticleStateType, value: OptionType) {
		setFormState((prev) => ({
			...prev,
			[type]: value,
		}));
	}

	function handleSubmit(evt: FormEvent<HTMLFormElement>) {
		evt.preventDefault();
		setPageStyle({
			fontFamilyOption: formState.fontFamilyOption.value,
			fontSizeOption: formState.fontSizeOption.value,
			fontColor: formState.fontColor.value,
			contentWidth: formState.contentWidth.value,
			backgroundColor: formState.backgroundColor.value,
		});
	}

	function handleReset() {
		setFormState(defaultArticleState);
		setPageStyle({
			fontFamilyOption: defaultArticleState.fontFamilyOption.value,
			fontSizeOption: defaultArticleState.fontSizeOption.value,
			fontColor: defaultArticleState.fontColor.value,
			contentWidth: defaultArticleState.contentWidth.value,
			backgroundColor: defaultArticleState.backgroundColor.value,
		});
	}

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
				<form className={styles.form} onSubmit={handleSubmit}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						title={FormTitles.fontFamily}
						placeholder={FormTitles.fontFamily}
						options={fontFamilyOptions}
						selected={formState.fontFamilyOption}
						onChange={(option: OptionType) =>
							handleChange('fontFamilyOption', option)
						}
					/>
					<RadioGroup
						options={fontSizeOptions}
						selected={formState.fontSizeOption}
						name='fontSize'
						title={FormTitles.fontSize}
						onChange={(option: OptionType) =>
							handleChange('fontSizeOption', option)
						}
					/>
					<Select
						title={FormTitles.fontColor}
						placeholder={FormTitles.fontColor}
						options={fontColors}
						selected={formState.fontColor}
						onChange={(option: OptionType) => handleChange('fontColor', option)}
					/>
					<Separator />
					<Select
						title={FormTitles.backgroundColor}
						placeholder={FormTitles.backgroundColor}
						options={backgroundColors}
						selected={formState.backgroundColor}
						onChange={(option: OptionType) =>
							handleChange('backgroundColor', option)
						}
					/>
					<Select
						title={FormTitles.contentWidth}
						placeholder={FormTitles.contentWidth}
						options={contentWidthArr}
						selected={formState.contentWidth}
						onChange={(option: OptionType) =>
							handleChange('contentWidth', option)
						}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={handleReset} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
