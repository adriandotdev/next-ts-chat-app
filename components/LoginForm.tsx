import React from "react";

function LoginForm() {
	return (
		<form
			className="flex flex-col max-w-[30rem] w-full justify-center items-center gap-4 mt-4"
			action=""
		>
			{/* Username Field */}
			<section className="w-full">
				<label
					className="label label-text text-lg font-semibold"
					htmlFor="username"
				>
					Username
				</label>
				<input
					className="w-full input input-primary"
					type="text"
					name="username"
					id="username"
					placeholder="Please enter your username"
				/>
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
					className="w-full input input-primary"
					type="password"
					name="password"
					id="password"
					placeholder="Please enter your password"
				/>
			</section>

			<input
				type="submit"
				value="Login"
				className="btn btn-primary w-full mt-3"
			/>
		</form>
	);
}

export default LoginForm;
