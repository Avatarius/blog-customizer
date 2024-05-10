import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	FormTitles,
	OptionType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';
import { ArrowButton } from './components/arrow-button';
import { Select } from './components/select';
import { Text } from './components/text';
import { RadioGroup } from './components/radio-group';
import { Separator } from './components/separator';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [pageStyle, setPageStyle] = useState({
		'--font-family': defaultArticleState.fontFamilyOption.value,
		'--font-size': defaultArticleState.fontSizeOption.value,
		'--font-color': defaultArticleState.fontColor.value,
		'--container-width': defaultArticleState.contentWidth.value,
		'--bg-color': defaultArticleState.backgroundColor.value,
	});
	const [menuShown, setMenuShown] = useState(false);
	const [fontFamily, setFontFamily] = useState(
		defaultArticleState.fontFamilyOption
	);
	const [fontSize, setFontSize] = useState(defaultArticleState.fontSizeOption);
	const [fontColor, setFontColor] = useState(defaultArticleState.fontColor);
	const [backgroundColor, setBackgroundColor] = useState(
		defaultArticleState.backgroundColor
	);
	const [contentWidth, setContentWidth] = useState(
		defaultArticleState.contentWidth
	);

	function resetStyle() {
		setFontFamily(defaultArticleState.fontFamilyOption);
		setFontSize(defaultArticleState.fontSizeOption);
		setFontColor(defaultArticleState.fontColor);
		setContentWidth(defaultArticleState.contentWidth);
		setBackgroundColor(defaultArticleState.backgroundColor);
		setPageStyle({
			'--font-family': defaultArticleState.fontFamilyOption.value,
			'--font-size': defaultArticleState.fontSizeOption.value,
			'--font-color': defaultArticleState.fontColor.value,
			'--container-width': defaultArticleState.contentWidth.value,
			'--bg-color': defaultArticleState.backgroundColor.value,
		});
	}
	function applyStyle() {
		setPageStyle({
			'--font-family': fontFamily.value,
			'--font-size': fontSize.value,
			'--font-color': fontColor.value,
			'--container-width': contentWidth.value,
			'--bg-color': backgroundColor.value,
		});
	}

	return (
		<div className={clsx(styles.main)} style={pageStyle as CSSProperties}>
			<ArticleParamsForm
				menuShown={menuShown}
				arrowButton={
					<ArrowButton
						menuShown={menuShown}
						onClick={() => setMenuShown((prev) => !prev)}
					/>
				}
				onReset={resetStyle}
				onApply={applyStyle}>
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
				<RadioGroup
					options={fontSizeOptions}
					selected={fontSize}
					name='fontSize'
					title={FormTitles.fontSize}
					onChange={(option: OptionType) => setFontSize(option)}
				/>
				<Select
					title={FormTitles.fontColor}
					placeholder={FormTitles.fontColor}
					options={fontColors}
					selected={fontColor}
					onChange={(option: OptionType) => setFontColor(option)}
				/>
				<Separator />
				<Select
					title={FormTitles.backgroundColor}
					placeholder={FormTitles.backgroundColor}
					options={backgroundColors}
					selected={backgroundColor}
					onChange={(option: OptionType) => setBackgroundColor(option)}
				/>
				<Select
					title={FormTitles.contentWidth}
					placeholder={FormTitles.contentWidth}
					options={contentWidthArr}
					selected={contentWidth}
					onChange={(option: OptionType) => setContentWidth(option)}
				/>
			</ArticleParamsForm>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
