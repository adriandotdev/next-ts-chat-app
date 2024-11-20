import React, { createContext, useState } from "react";

interface UIContextType {
	alert: { message: string; show: boolean } | null;
	setAlert: React.Dispatch<
		React.SetStateAction<{ message: string; show: boolean } | null>
	>;
}

const UITriggerContext = createContext<UIContextType | undefined>(undefined);

export const UITriggerProvider = ({
	children,
}: {
	children?: React.ReactNode;
}) => {
	// Current user logged in. In this state, the info of the user is being set.
	const [alert, setAlert] = useState<{ message: string; show: boolean } | null>(
		() => null
	);

	return (
		<UITriggerContext.Provider value={{ alert, setAlert }}>
			{children}
		</UITriggerContext.Provider>
	);
};

export default UITriggerContext;
