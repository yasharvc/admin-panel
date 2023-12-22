import Logo from "../../Logo/Index";

export default function Login() {
	return (
		<>
			<Glass />
		</>
	);
}
//https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2
const Glass = () =>{
	return (
		<div className="flex flex-col w-full lg:flex-row">
			<div
				className="grid rounded-none flex-grow h-32 card bg-base-300 place-items-center min-h-screen"
				style={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)",
					backgroundRepeat: "no-repeat,repeat",
					backgroundSize: "cover",
				}}
			>
				{/* <label className="swap swap-rotate">
					<input
						type="checkbox"
						className="theme-controller"
						value="synthwave"
						onChange={(e) => {
							alert(e.target.checked)
						}}
					/>
					<svg
						className="swap-on fill-current w-10 h-10"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
					</svg>
					<svg
						className="swap-off fill-current w-10 h-10"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
					</svg>
				</label> */}
				<div className="card w-96 glass backdrop-brightness-100">
					<figure className="backdrop-blur-sm glass px-10 pt-10">
						<img src="https://www.arcelikglobal.com/media/2828/arcelik_logo_kirmizi.png" />
					</figure>
					<div className="card-body p-0">
						<form className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									placeholder="email"
									className="input input-bordered"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									placeholder="password"
									className="input input-bordered"
									required
								/>
								<label className="label">
									<a
										href="#"
										className="label-text-alt link link-hover"
									>
										Forgot password?
									</a>
								</label>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">
									Login
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

const Divider = () => {
	return (
		<div className="flex flex-col w-full lg:flex-row">
			{/* <div
				className="flex-grow h-32 rounded-none card hidden lg:grid bg-base-300 place-items-center min-h-screen"
				style={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)",
					backgroundRepeat: "no-repeat,repeat",
					backgroundSize: "cover",
				}}
			></div> */}
			<div
				className="grid rounded-none flex-grow h-32 card bg-base-300 place-items-center min-h-screen"
				
			>
				<div className="hero min-h-screen bg-base-200" style={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)",
					backgroundRepeat: "no-repeat,repeat",
					backgroundSize: "cover",
				}}>
					<div className="hero-content flex-col rounded-lg  lg:flex-row-reverse w-full">
						<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 glass">
							<form className="card-body">
								<Logo size="small" />
								<div className="form-control">
									<label className="label">
										<span className="label-text">
											Email
										</span>
									</label>
									<input
										type="email"
										placeholder="email"
										className="input input-bordered"
										required
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">
											Password
										</span>
									</label>
									<input
										type="password"
										placeholder="password"
										className="input input-bordered"
										required
									/>
									<label className="label">
										<a
											href="#"
											className="label-text-alt link link-hover"
										>
											Forgot password?
										</a>
									</label>
								</div>
								<div className="form-control mt-6">
									<button className="btn btn-primary">
										Login
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Hero = () => {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Login now!</h1>
					<Logo size="large" />
				</div>
				<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								placeholder="email"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								placeholder="password"
								className="input input-bordered"
								required
							/>
							<label className="label">
								<a
									href="#"
									className="label-text-alt link link-hover"
								>
									Forgot password?
								</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
