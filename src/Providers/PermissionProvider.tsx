import React, { createContext } from "react";
import User from "../Types/User";
import Role from "../Types/Role";
const nullUser: User = {
	_id: "",
	email: "",
	username: "",
	roles: [],
	permissions: [],
	token: "",
};

export const UserContext = createContext(nullUser);

type PermissionProviderProps = {
	children: React.ReactNode;
	onDenyChildren?: React.ReactNode;
	roles: Role[] | Role;
	currentUser: User;
};

const PermissionProvider = (props: PermissionProviderProps) => {
	const currentUser = props.currentUser;
	const hasRole = (roleNames: Role[] | Role) => {
		const { roles } = currentUser || [];
		if (roles.length === 0) {
			return false;
		} else if (Array.isArray(roleNames)) {
			let res = false;
			roles.forEach((role) => {
				res = res || roleNames.includes(role);
				if (res) return;
			});
			return res;
		} else {
			return roles.includes(roleNames);
		}
	};
	return hasRole(props.roles) ? (
		<UserContext.Provider value={currentUser}>
			{props.children}
		</UserContext.Provider>
	) : (
		<UserContext.Provider value={currentUser}>
			{props.onDenyChildren}
		</UserContext.Provider>
	);
};

export default PermissionProvider;
