import {withController} from '@snar/lit';
import {googleImagesUrl, jishoUrl, mdbgOpen, mdbgUrl} from '@vdegenne/links';
import {LitElement, html} from 'lit';
import {withStyles} from 'lit-with-styles';
import {customElement} from 'lit/decorators.js';
import {materialShellLoadingOff} from 'material-shell';
import {ICO_JISHO, ICO_MDBG, SVG_GOOGLE_IMAGES} from '../assets/assets.js';
import {RI} from '../kanjis.js';
import {Mode, QuizState, store} from '../store.js';
import styles from './app-shell.css?inline';
import {openSettingsDialog} from '../imports.js';
import {copyToClipboard} from '../utils.js';

declare global {
	interface Window {
		app: AppShell;
	}
	interface HTMLElementTagNameMap {
		'app-shell': AppShell;
	}
}

@customElement('app-shell')
@withStyles(styles)
@withController(store)
export class AppShell extends LitElement {
	firstUpdated() {
		materialShellLoadingOff.call(this);
	}

	render() {
		return html`<!-- -->
			<div class="m-2 flex z-10">
				<div class="ml-1">${store.kanji[RI.JLPT]}</div>
				<div class="flex-1"></div>
				<md-icon-button @click="${() => openSettingsDialog()}">
					<md-icon>settings</md-icon>
				</md-icon-button>
			</div>
			<div
				class="flex items-center justify-center flex-1 cursor-pointer select-none"
				jp
				@click=${() => store.toggleQuizState()}
			>
				${store.mode === Mode.KANJI || store.quizState === QuizState.ANSWER
					? html`
							<span
								class="relative"
								style="font-size:${store.fontSize}rem;height:0px;line-height:0px;top:-18px"
								>${store.kanji[RI.KANJI]}</span
							>
						`
					: html`<span>${store.kanji[RI.MEANING]}</span>`}
			</div>

			<div id="actions" class="m-5 flex opacity-20 gap-4">
				<md-icon-button
					href="${googleImagesUrl(store.kanji[RI.KANJI])}"
					target="_blank"
				>
					<md-icon>${SVG_GOOGLE_IMAGES}</md-icon>
				</md-icon-button>
				<md-icon-button
					href="${jishoUrl(store.kanji[RI.KANJI])}"
					target="_blank"
				>
					<md-icon> <img src=${ICO_JISHO} /></md-icon>
				</md-icon-button>
				<md-icon-button
					href="${mdbgUrl(store.kanji[RI.KANJI])}"
					target="_blank"
				>
					<md-icon> <img src=${ICO_MDBG} /></md-icon>
				</md-icon-button>
				<md-icon-button
					@click=${() => {
						copyToClipboard(store.kanji[RI.KANJI]);
					}}
				>
					<md-icon>content_copy</md-icon>
				</md-icon-button>
				<div class="flex-1"></div>
				<md-icon-button @click="${() => store.giveMeAKanjiPlease()}">
					<md-icon>arrow_forward</md-icon>
				</md-icon-button>
			</div>
			<!-- -->`;
	}
}

export const app = (window.app = new AppShell());
