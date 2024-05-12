import { useEffect } from 'react';

interface IUseOutsideClickClose {
	isMenuShown: boolean;
	setIsMenuShown: (state: boolean) => void;
	asideRef: React.RefObject<HTMLElement>;
	arrowButtonRef: React.RefObject<HTMLElement>;
}

export function useOutsideClickClose({
	asideRef,
	arrowButtonRef,
	isMenuShown,
	setIsMenuShown,
}: IUseOutsideClickClose) {
	function handleClick(evt: MouseEvent) {
		const { target } = evt;
		if (
			target instanceof Node &&
			!asideRef.current?.contains(target) &&
			!arrowButtonRef.current?.contains(target)
		) {
			isMenuShown && setIsMenuShown(false);
		}
	}

	useEffect(() => {
		window.addEventListener('click', handleClick);
		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, [isMenuShown]);
}
