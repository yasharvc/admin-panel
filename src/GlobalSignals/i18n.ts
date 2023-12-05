import { signal } from "@preact/signals-react";

const I18N = signal<{ [key: string]: string }>({});

export const translate = (key: string) => {
	return I18N.value[key] || key;
}

export const setDictionary = (dictionary: { [key: string]: string }) => {
	I18N.value = dictionary;
}

export const setEntry = (key: string, value: string) => {
	I18N.value[key] = value;
	console.log(I18N.value)
}

export default I18N;