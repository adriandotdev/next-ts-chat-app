"use client";

import React, { useContext, useState } from "react";

import ChatProfiles from "@/components/ChatProfiles";
import ChatContext from "@/contexts/ChatContext";

function ChatLayoutPage({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { selectedChat, setSelectedChat } = useContext(ChatContext);

	return (
		<main className="lg:grid lg:grid-cols-12">
			{/* Chats */}
			<div
				className={`${
					selectedChat ? "hidden" : "block"
				} lg:flex px-5 py-5 flex flex-col gap-5 max-h-[100vh] lg:border lg:rounded-md lg:h-full lg:min-h-[100vh] lg:col-span-4`}
			>
				<div>
					<h1 className="text-3xl font-bold text-primary">Chat</h1>
				</div>

				<input
					type="text"
					name="search"
					id="search"
					className="input input-primary"
					placeholder="Search chat..."
				/>
				<ChatProfiles />
			</div>
			{/* Chat */}
			<div className="lg:block lg:col-span-8">
				{selectedChat ? (
					React.cloneElement(children as React.ReactElement, {
						setSelectedChat,
					})
				) : (
					<div className="hidden lg:block">Start a conversation</div>
				)}
			</div>
		</main>
	);
}

export default ChatLayoutPage;
