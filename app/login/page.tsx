"use client";

import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import React from "react";

function LoginPage() {
	return (
		<main className="min-h-[100vh] flex justify-center items-center">
			<div className="w-full max-w-[30rem] px-8 py-12">
				<h1 className="text-primary font-bold text-2xl">
					Welcome to Humble 🐝
				</h1>

				<LoginForm />

				<div className="flex flex-col items-center mt-5 gap-2">
					{/* Forgot Password Link */}

					<span className="font-medium">
						Don't have an account yet?{" "}
						<Link href="/register">
							<span className="text-primary">Sign up</span>
						</Link>
					</span>

					<Link href="/forgot-password">
						<span className="text-primary text-center font-medium">
							Forgot your password?
						</span>
					</Link>
				</div>
			</div>
		</main>
	);
}

export default LoginPage;
