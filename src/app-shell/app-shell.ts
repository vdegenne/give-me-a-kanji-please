import {withController} from '@snar/lit';
import {LitElement, html} from 'lit';
import {withStyles} from 'lit-with-styles';
import {customElement} from 'lit/decorators.js';
import {materialShellLoadingOff} from 'material-shell';
import {store} from '../store.js';
import styles from './app-shell.css?inline';
import {jishoOpen} from '@vdegenne/links';

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
			<div
				class="flex items-center justify-center flex-1 text-[12rem]"
				jp
				@click="${() => {
					jishoOpen(store.kanji);
				}}"
			>
				${store.kanji}
			</div>
			<div id="actions" class="m-2 flex justify-end opacity-20">
				<md-icon-button @click="${() => store.giveMeAKanjiPlease()}">
					<md-icon>arrow_forward</md-icon>
				</md-icon-button>
			</div>
			<!-- -->`;
	}
}

export const app = (window.app = new AppShell());
