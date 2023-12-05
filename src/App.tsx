import { useContext, useState } from "react";
import PermissionProvider, {
	UserContext,
} from "./Providers/PermissionProvider";
import User from "./Types/User";
import Default from "./Layout/Default";
import { signal } from "@preact/signals-react";
import { PromiseStatus } from "./Enums/PromiseStatus";
import I18n,{ setEntry, setDictionary, translate } from "./GlobalSignals/i18n";
import Example from "./Table";
const count = signal(0);
const pageStatus = signal<string>(PromiseStatus.PENDING);
setDictionary({
	name: "Yashar",
	family: "Aliabbasi",
});

setInterval(() => {
	switch (pageStatus.value) {
		case PromiseStatus.RESOLVED:
			pageStatus.value = PromiseStatus.REJECTED;
			break;
		case PromiseStatus.REJECTED:
			pageStatus.value = PromiseStatus.PENDING;
			break;
		case PromiseStatus.PENDING:
			pageStatus.value = PromiseStatus.RESOLVED;
			break;
	}
	setDictionary({
		name: "Samad" + count.value,
		family: "Aliabbasi",
	})
}, 1000);

function App() {
	return (
		<>
			{pageStatus.value === PromiseStatus.PENDING ? (
				<span className="loading loading-dots loading-xs"></span>
			) : null}
			{pageStatus.value === PromiseStatus.REJECTED ? (
				<span className="loading loading-spinner loading-xs"></span>
			) : null}
			{pageStatus.value === PromiseStatus.RESOLVED ? (
				<span className="loading loading-ball loading-xs"></span>
			) : null}
			<Counter />
			{count.value}
			<UI/>
			<Example/>
		</>
	);
}

const Counter = () => {
	return (
		<>
			<button
				className="btn btn-primary"
				onClick={() => {
					count.value++;
				}}
			>
				Count: {count.value}
			</button>
		</>
	);
};

const UI = () => {
	const user: User = {
		_id: "test",
		email: "yashar@gmail.com",
		username: "administrator",
		roles: ["admin", "user", "decorator", "asdass", "DASD"],
		permissions: ["read_books"],
		token: "",
	};

	const [currentUser, setCurrentUser] = useState<User>(user);
	setDictionary({
		name: "Yashar",
		family: "Aliabbasi",
	});
	return (
			<PermissionProvider
				roles={["user", "dmin"]}
				onDenyChildren={
					<NotAuthorized
						onClick={() => setEntry("name", "Sahar" )}
					/>
				}
				currentUser={currentUser}
			>
				<Default>
					
					<button
						className="btn btn-primary"
						onClick={() =>
							setCurrentUser({ ...user, roles: ["admin"] })
						}
					>
						Change Role
					</button>
					<button
						data-theme="dim"
						className="btn btn-primary"
						onClick={() => setEntry("name", "Narges")}
					>
						Change name
					</button>
				</Default>
			</PermissionProvider>
	);
};

function NotAuthorized({ onClick }: { onClick: () => void }) {
	const currentUser = useContext(UserContext);
	return (
		<>
			<h1>Not Authorized</h1>
			{I18N.value("name")}
			{currentUser?.roles}
			<button
				data-theme="cyberpunk"
				className="btn btn-primary"
				onClick={onClick}
			>
				change user
			</button>
		</>
	);
}

export default App;
