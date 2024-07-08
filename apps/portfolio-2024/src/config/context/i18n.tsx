"use client";

import { createContext, useContext } from "react";

const I18nContext = createContext<any>({
	t: null,
});

export default function I18nContextProvider({ children, value }: any) {
	return (
		<I18nContext.Provider
			value={{
				t: value,
			}}
		>
			{children}
		</I18nContext.Provider>
	);
}

export const useI18n = () => useContext(I18nContext);
