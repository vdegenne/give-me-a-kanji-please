import {ReactiveController, state} from '@snar/lit';
import {saveToLocalStorage} from 'snar-save-to-local-storage';
import {kanjis, RI} from './kanjis.js';

@saveToLocalStorage('give-me-a-kanji-please:store')
export class AppStore extends ReactiveController {
	@state() kanji = '';

	updated() {
		if (this.kanji === '') {
			this.giveMeAKanjiPlease();
		}
	}

	giveMeAKanjiPlease() {
		this.kanji = kanjis[Math.floor(Math.random() * kanjis.length)][RI.KANJI];
	}
}

export const store = new AppStore();
