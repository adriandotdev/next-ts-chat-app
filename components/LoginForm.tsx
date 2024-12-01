import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInput } from "@/types/Inputs";
import axios, { AxiosError } from "axios";
import Response from "@/types/Response";
import { useRouter } from "next/navigation";

function LoginForm() {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
		reset,
		setFocus,
	} = useForm<LoginInput>();

	const API_URL = String(process.env.NEXT_PUBLIC_API_URL);

	const Login: SubmitHandler<LoginInput> = async (data) => {
		try {
			const result = await axios.post(
				`/api/v1/accounts/login`,
				{
					username: data.username,
					password: data.password,
				},
				{ withCredentials: true, baseURL: API_URL }
			);

			if (result.status === 200) {
				console.log(result);
				reset();
				router.push("/chats");
			}

			console.log(result);
		} catch (err) {
			let error = err as AxiosError;
			let data = error.response?.data as Response;

			if (data.message === "INVALID_CREDENTIALS") {
				setError("username", { message: "Invalid credentials" });
				setError("password", { message: "Invalid credentials" });
				setFocus("username", { shouldSelect: true });
			}
		}
	};

	return (
		<form
			className="flex flex-col max-w-[30rem] w-full justify-center items-center gap-4 mt-4"
			onSubmit={handleSubmit(Login)}
		>
			{/* Username Field */}
			<section className="w-full">
				<label
					className="label label-text text-base font-semibold"
					htmlFor="username"
				>
					Username
				</label>
				<input
					className={`w-full input input-primary ${
						errors.username?.message && "input-error"
					}`}
					type="text"
					id="given-name"
					placeholder="Please enter your given name"
					{...register("username", {
						required: "Please provide your username",
					})}
				/>
				<small className="text-red-700">
					{errors.username?.message && errors.username.message}
				</small>
			</section>

			{/* Password Field */}
			<section className="w-full">
				<label
					className="label label-text text-base font-semibold"
					htmlFor="password"
				>
					Password
				</label>
				<input
					className={`w-full input input-primary ${
						errors.password?.message && "input-error"
					}`}
					type="password"
					id="given-name"
					placeholder="Please enter your given name"
					{...register("password", {
						required: "Please provide your password",
					})}
				/>
				<small className="text-red-700">
					{errors.password?.message && errors.password.message}
				</small>
			</section>

			<button className="btn btn-primary w-full mt-3">
				{isSubmitting ? "Loading..." : "Sign In"}
			</button>
		</form>
	);
}

export default LoginForm;
