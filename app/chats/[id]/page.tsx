"use client";

import ChatContext from "@/contexts/ChatContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

function Chat({ params }: { params: { id: string } }) {
	console.log("Chat Page");
	const context = useContext(ChatContext);

	const router = useRouter();
	const id = params.id;

	return (
		<div className="px-5 pt-5 pb-2 min-h-[100vh] max-h-[100vh] flex flex-col h-full">
			<div className="flex gap-2 justify-between">
				<div className="flex gap-2 items-center">
					<div className="avatar online">
						<div className="w-12 rounded-full">
							<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
						</div>
					</div>
					<h1 className="font-bold">Shayna</h1>
				</div>
				<button
					className="btn btn-outline btn-sm lg:hidden"
					onClick={() => {
						context?.setSelectedChat(null);
						router.replace("/chats");
					}}
				>
					Back
				</button>
			</div>

			{/* Chat bubbles */}
			<div className="mt-5 max-h-[85vh] overflow-y-auto h-full pb-3">
				<div className="chat chat-start">
					<div className="chat-bubble bg-secondary text-black max-w-[50%]">
						It's over Anakin, I have the high ground. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Tempora neque, corrupti earum
						doloribus natus architecto error? Dicta dolores saepe molestiae
						eveniet autem porro culpa sunt, repellat nulla est, consectetur
						eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Libero odit voluptatum earum, minus magnam animi rem obcaecati
						voluptatibus molestiae consequatur enim rerum. Cupiditate vitae
						quaerat impedit obcaecati voluptatem dolor officia, sequi, delectus
						facilis in commodi nulla suscipit. Modi amet magnam laudantium
						quibusdam. Impedit, exercitationem necessitatibus!
					</div>
				</div>
				<div className="chat chat-end">
					<div className="chat-bubble chat-bubble-primary">
						You underestimate my power!
					</div>
				</div>
			</div>
			<div className="w-full flex gap-3 self-end">
				<input
					className="input input-primary w-full"
					type="text"
					name="chat-message"
					id="chat-message"
					placeholder="Type here..."
				/>
				<button className="btn btn-primary">Send</button>
			</div>
		</div>
	);
}

export default Chat;
