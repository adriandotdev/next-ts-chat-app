import React from "react";
import Link from "next/link";
import RegisterForm from "@/components/RegisterForm";
function RegisterPage() {
	return (
		<main className="min-h-[100vh] flex justify-center items-center">
			<div className="w-full max-w-[30rem] px-8 py-5">
				<h1 className="text-primary font-bold text-2xl">
					Create and Connect 🐝
				</h1>
				<RegisterForm />
				<div className="flex flex-col items-center mt-5 gap-2">
					{/* Forgot Password Link */}

					<span className="font-medium">
						Already have an account?{" "}
						<Link href="/login">
							<span className="text-primary">Sign in</span>
						</Link>
					</span>
				</div>
			</div>
		</main>
	);
}

export default RegisterPage;
