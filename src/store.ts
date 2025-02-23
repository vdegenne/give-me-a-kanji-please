import {ReactiveController, state} from '@snar/lit';
import {saveToLocalStorage} from 'snar-save-to-local-storage';
import {kanjis, RI, Kanji} from './kanjis.js';

@saveToLocalStorage('give-me-a-kanji-please:store')
export class AppStore extends ReactiveController {
	@state() kanji: Kanji | null = null;

	updated() {
		if (this.kanji === null) {
			this.giveMeAKanjiPlease();
		}
	}

	giveMeAKanjiPlease() {
		this.kanji = kanjis[Math.floor(Math.random() * kanjis.length)];
	}
}

export const store = new AppStore();
