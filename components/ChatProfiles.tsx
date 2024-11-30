"use client";

import ChatContext from "@/contexts/ChatContext";
import React, { useContext } from "react";
import Link from "next/link";

function ChatProfiles() {
	const { selectedChat, chatProfiles, setSelectedChat } =
		useContext(ChatContext);

	return (
		<div className="min-h-[60vh] overflow-y-auto flex flex-col gap-2">
			{chatProfiles.map((profile: any) => (
				<Link href={`/chats/${profile.id}`}>
					<div
						key={profile.id}
						className="bg-slate-50 p-3 rounded-md hover:bg-slate-100  hover:cursor-pointer"
						onClick={() => {
							setSelectedChat(profile.id);
						}}
					>
						<p className="font-semibold text-secondary">{profile.name}</p>
						<p className="font-normal text-sm">{profile.message}</p>
					</div>
				</Link>
			))}
		</div>
	);
}

export default ChatProfiles;
