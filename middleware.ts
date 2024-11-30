import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;

	if (path.match(/\/chats\/*/)) {
		const token = cookies().get("token");

		if (!token) return NextResponse.redirect(new URL("/login", request.url));
	} else if (path.match(/\/login\/*/)) {
		const token = cookies().get("token");

		if (token) return NextResponse.redirect(new URL("/chats", request.url));
	}
}
