import type { Route } from "./+types/_index";

export function meta(_args: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Page() {
	return <h1>Home</h1>;
}
