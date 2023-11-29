import { createContext } from "react";

export interface LanguageDictionary {
	translation: { [key: string]: string };
	translate: (key: string) => string;
}

const emptyDictionary: LanguageDictionary = {
	translation: {},
	translate: (key: string) => {
		console.log("Empty Dictionary");
		return key;
	},
};

export const I18N = createContext(emptyDictionary);

export default function I18NProvider({
	children,
	dictionary,
}: {
	children: React.ReactNode;
	dictionary: { [key: string]: string };
}) {
	const dict: LanguageDictionary = {
		translation: dictionary,
		translate: (key: string) => {
			console.log("dictionary");
			return dictionary[key] || key;
		},
	};
	console.log(dict);
	return <I18N.Provider value={dict}>{children}</I18N.Provider>;
}
