import { redirect, RedirectType } from "next/navigation";
import React from "react";

function Home() {
	return redirect("/login", RedirectType.replace);
}

export default Home;
