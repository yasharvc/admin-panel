import Footer from "./Footer/Index";
import SideMenu from "./SideMenu";
import { DefaultTheme } from "../../Providers/Theme";

export default function Default({ children }: { children: React.ReactNode }) {
	return (
		<>
			<nav
				className={`bg-base-100 text-base-content sticky top-0 z-30 flex h-${DefaultTheme.navBarHeight} w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)]`}
			>
				<div className={`flex w-full top-0`}>
					<div className="flex-none m-auto">
						<label
							htmlFor="side-drawer"
							aria-label="Open menu"
							className="btn btn-sm btn-square btn-ghost drawer-button"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-5 h-5 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
						</label>
					</div>
					<div className="flex-1 m-auto">
						<a className="btn btn-sm btn-ghost text-lg">Yashar</a>
					</div>
					<div className="flex-none">
						<button className="btn btn-square btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-5 h-5 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
								></path>
							</svg>
						</button>
					</div>
				</div>
			</nav>
			<div className="drawer min-h-full">
				<input
					id="side-drawer"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-content flex flex-col items-center justify-center">
					{children}
				</div>
				<div className={`drawer-side z-40 h-fit`}>
					<label
						htmlFor="side-drawer"
						aria-label="close sidebar"
						className="drawer-overlay min-h-screen"
					></label>
					<SideMenu className="menu w-80 min-h-screen bg-base-200 text-base-content">
						<li>
							<a>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								Item 1
							</a>
						</li>
						<li>
							<a>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
									/>
								</svg>
								Item 3
							</a>
						</li>

						<ul className="menu bg-base-200 w-56 rounded-box">
							<li>
								<a>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
										/>
									</svg>
									Item 2
								</a>
							</li>
							<li>
								<details open>
									<summary>Parent</summary>
									<ul>
										<li>
											<a>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-5 w-5"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
													/>
												</svg>
												Item 2
											</a>
										</li>
										<li>
											<a>Submenu 2</a>
										</li>
										<li>
											<details open>
												<summary>Parent</summary>
												<ul>
													<li>
														<a>Submenu 1</a>
													</li>
													<li>
														<a>Submenu 2</a>
													</li>
												</ul>
											</details>
										</li>
									</ul>
								</details>
							</li>
							<li>
								<a>Item 3</a>
							</li>
						</ul>
					</SideMenu>
				</div>
			</div>
		</>
	);
}
