import {getThemeStore} from './imports.js';
import {store} from './store.js';

window.addEventListener('keydown', async (event: KeyboardEvent) => {
	// console.log(event);
	if (event.altKey || event.ctrlKey) {
		return;
	}

	const target = event.composedPath()[0] as Element;
	if (['TEXTAREA', 'INPUT'].includes(target.tagName)) {
		return;
	}

	switch (event.key) {
		case 'd':
			(await getThemeStore()).toggleMode();
			break;
		case ' ':
			store.toggleQuizState();
			break;
		case 'ArrowRight':
			store.giveMeAKanjiPlease();
			break;
	}
});

export {};
