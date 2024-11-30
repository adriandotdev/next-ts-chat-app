import React, { createContext, useState } from "react";

interface ChatContextType {
	selectedChat: string | null;
	setSelectedChat: React.Dispatch<React.SetStateAction<string | null>>;
	chatProfiles: any[];
}

const ChatContext = createContext<ChatContextType>({
	selectedChat: null,
	setSelectedChat: () => {}, // Empty function as default
	chatProfiles: [],
});

export const ChatProvider = ({ children }: { children?: React.ReactNode }) => {
	// Current user logged in. In this state, the info of the user is being set.
	const [selectedChat, setSelectedChat] = useState<string | null>(() => null);
	const [chatProfiles, setChatProfiles] = useState<any>(() => [
		{
			id: 1,
			name: "Shayna",
			message: "I love you, Bebee",
		},
		{
			id: 2,
			name: "Senior Shayna",
			message: "Working lang po ako ha",
		},
		{
			id: 3,
			name: "Shayna",
			message: "Hello po",
		},
		{
			id: 4,
			name: "Shayna",
			message: "I love you, Bebee",
		},
		{
			id: 5,
			name: "Senior Shayna",
			message: "Working lang po ako ha",
		},
		{
			id: 6,
			name: "Shayna",
			message: "Hello po",
		},
	]);
	return (
		<ChatContext.Provider
			value={{ selectedChat, setSelectedChat, chatProfiles }}
		>
			{children}
		</ChatContext.Provider>
	);
};

export default ChatContext;
