import kanji5 from 'japanese-data-module/tagless-noroman/kanji-jlpt5.json';
import kanji4 from 'japanese-data-module/tagless-noroman/kanji-jlpt4.json';
import kanji3 from 'japanese-data-module/tagless-noroman/kanji-jlpt3.json';
import kanji2 from 'japanese-data-module/tagless-noroman/kanji-jlpt2.json';
import kanji1 from 'japanese-data-module/tagless-noroman/kanji-jlpt1.json';

export * from 'japanese-data-module/tagless-noroman';

export const kanjis = [...kanji5, ...kanji4, ...kanji3, ...kanji2, ...kanji1];
