import React, { Children } from "react";

type SideMenuProps = {
	className:string,
	children?: React.ReactNode
};

export default function SideMenu({ children, className }: SideMenuProps) {
	return (
		<ul className={`menu bg-base-200 w-56 rounded-box ${className}`}>
			{children}
		</ul>
	);
}
