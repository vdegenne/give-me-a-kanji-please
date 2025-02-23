import {withController} from '@snar/lit';
import {LitElement, html} from 'lit';
import {withStyles} from 'lit-with-styles';
import {customElement} from 'lit/decorators.js';
import {materialShellLoadingOff} from 'material-shell';
import {store} from '../store.js';
import styles from './app-shell.css?inline';
import {googleImagesUrl, jishoOpen, jishoUrl, mdbgOpen} from '@vdegenne/links';
import {RI} from '../kanjis.js';
import {ICO_JISHO, SVG_GOOGLE_IMAGES} from '../assets/assets.js';

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
			<div class="absolute top-3 left-3 opacity-20">
				${store.kanji[RI.JLPT]}
			</div>
			<div
				class="flex items-center justify-center flex-1 text-[12rem]"
				jp
				@click="${() => {
					mdbgOpen(store.kanji[RI.KANJI]);
				}}"
			>
				${store.kanji[RI.KANJI]}
			</div>
			<div id="actions" class="m-5 flex opacity-20 gap-3">
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
				<div class="flex-1"></div>
				<md-icon-button @click="${() => store.giveMeAKanjiPlease()}">
					<md-icon>arrow_forward</md-icon>
				</md-icon-button>
			</div>
			<!-- -->`;
	}
}

export const app = (window.app = new AppShell());
