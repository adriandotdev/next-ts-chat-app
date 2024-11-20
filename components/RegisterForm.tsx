"use client";

import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";

function RegisterForm() {
	type Inputs = {
		givenName: string;
		middleName: string;
		lastName: string;
		username: string;
		password: string;
		confirmPassword: string;
	};

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const OnSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
	};

	console.log(errors);

	const password = watch("password");

	return (
		<form
			onSubmit={handleSubmit(OnSubmit)}
			className="flex flex-col max-w-[30rem] w-full justify-center items-center gap-4 mt-4"
		>
			{/* Given Name */}
			<section className="w-full">
				<label
					className="label label-text text-lg font-semibold"
					htmlFor="given-name"
				>
					Given Name
				</label>
				<input
					className={`w-full input input-primary ${
						errors.givenName?.message && "input-error"
					}`}
					type="text"
					id="given-name"
					placeholder="Please enter your given name"
					{...register("givenName", {
						required: "Please provide your given name",
					})}
				/>
				<small className="text-red-700">
					{errors.givenName?.message && errors.givenName.message}
				</small>
			</section>

			{/* Middle Name */}
			<section className="w-full">
				<label
					className="label label-text text-lg font-semibold"
					htmlFor="middle-name"
				>
					Middle Name
				</label>
				<input
					className={`w-full input input-primary ${
						errors.middleName?.message && "input-error"
					}`}
					type="text"
					id="middle-name"
					placeholder="Please enter your middle name"
					{...register("middleName", {
						required: "Please provide your middle name",
					})}
				/>
				<small className="text-red-700">
					{errors.middleName?.message && errors.middleName.message}
				</small>
			</section>

			{/* Last Name */}
			<section className="w-full">
				<label
					className="label label-text text-lg font-semibold"
					htmlFor="last-name"
				>
					Last Name
				</label>
				<input
					className={`w-full input input-primary ${
						errors.lastName?.message && "input-error"
					}`}
					type="text"
					id="last-name"
					placeholder="Please enter your last name"
					{...register("lastName", {
						required: "Please provide your last name",
					})}
				/>

				<small className="text-red-700">
					{errors.lastName?.message && errors.lastName.message}
				</small>
			</section>

			{/* Username Field */}
			<section className="w-full">
				<label
					className="label label-text text-lg font-semibold"
					htmlFor="username"
				>
					Username
				</label>
				<input
					className={`w-full input input-primary ${
						errors.username?.message && "input-error"
					}`}
					type="text"
					id="username"
					placeholder="Please enter your username"
					{...register("username", {
						required: "Please provide your username",
						minLength: {
							value: 8,
							message: "Username must be at least 8 characters",
						},
					})}
				/>
				<small className="text-red-700">
					{errors.username?.message && errors.username.message}
				</small>
			</section>

			{/* Password Field */}
			<section className="w-full">
				<label
					className="label label-text text-lg font-semibold"
					htmlFor="password"
				>
					Password
				</label>
				<input
					className={`w-full input input-primary ${
						errors.password?.message && "input-error"
					}`}
					type="password"
					id="password"
					placeholder="Please enter your password"
					{...register("password", {
						required: "Please provide your password",
						minLength: {
							value: 8,
							message: "Password must be at least 8 characters",
						},
					})}
				/>
				<small className="text-red-700">
					{errors.password?.message && errors.password.message}
				</small>
			</section>

			{/* Confirm Password Field */}
			<section className="w-full">
				<label
					className="label label-text text-lg font-semibold"
					htmlFor="password"
				>
					Confirm your password
				</label>
				<input
					className={`w-full input input-primary ${
						errors.confirmPassword?.message && "input-error"
					}`}
					type="password"
					id="password"
					placeholder="Please confirm your password"
					{...register("confirmPassword", {
						required: "Please confirm your password",
						validate: (value) => value === password || "Password do not match",
					})}
				/>
				<small className="text-red-700">
					{errors.confirmPassword?.message && errors.confirmPassword.message}
				</small>
			</section>

			<input
				type="submit"
				value="Login"
				className="btn btn-primary w-full mt-3"
			/>
		</form>
	);
}

export default RegisterForm;
