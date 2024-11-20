import React, { createContext, useState } from "react";

interface SessionContextType {
	user: { id: string; name: string } | null;
	setUser: React.Dispatch<
		React.SetStateAction<{ id: string; name: string } | null>
	>;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider = ({
	children,
}: {
	children?: React.ReactNode;
}) => {
	// Current user logged in. In this state, the info of the user is being set.
	const [user, setUser] = useState<any>(() => null);

	return (
		<SessionContext.Provider value={{ user, setUser }}>
			{children}
		</SessionContext.Provider>
	);
};

export default SessionContext;
