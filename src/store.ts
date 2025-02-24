import {ReactiveController, state} from '@snar/lit';
import {saveToLocalStorage} from 'snar-save-to-local-storage';
import {kanjis, RI, Kanji} from './kanjis.js';

export enum Mode {
	KANJI,
	QUIZ,
}

export enum QuizState {
	QUESTION,
	ANSWER,
}

@saveToLocalStorage('give-me-a-kanji-please:store')
export class AppStore extends ReactiveController {
	@state() kanji: Kanji | null = null;
	@state() mode: Mode = Mode.KANJI;
	@state() quizState: QuizState = QuizState.QUESTION;
	@state() fontSize = 10;

	updated() {
		if (this.kanji === null) {
			this.giveMeAKanjiPlease();
		}
	}

	giveMeAKanjiPlease() {
		this.kanji = kanjis[Math.floor(Math.random() * kanjis.length)];
		this.quizState = QuizState.QUESTION;
	}

	toggleMode() {
		switch (this.mode) {
			case Mode.KANJI:
				this.mode = Mode.QUIZ;
				break;
			case Mode.QUIZ:
				this.mode = Mode.KANJI;
				break;
		}
		this.quizState = QuizState.QUESTION;
	}

	toggleQuizState() {
		switch (this.quizState) {
			case QuizState.QUESTION:
				this.quizState = QuizState.ANSWER;
				break;
			case QuizState.ANSWER:
				this.quizState = QuizState.QUESTION;
				break;
		}
	}
}

export const store = new AppStore();
