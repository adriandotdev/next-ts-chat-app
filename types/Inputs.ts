export interface SignUpInput {
	givenName: string;
	middleName: string;
	lastName: string;
	username: string;
	password: string;
	confirmPassword: string;
}

export interface LoginInput {
	username: string;
	password: string;
}
