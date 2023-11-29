export interface User {
	_id: string,
	email: string,
	username: string,
	roles: string[],
	permissions: string[],
	token: string
}

export default User;