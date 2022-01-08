import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const GymsHub = () => {
	const router = useRouter();
	console.log("router", router);
	return (
		<div>
			<Head>
				<title>{}</title>
			</Head>
			Gyms Hub Page {router.query.id}
			<Link href="/">
				<a> Back to home</a>
			</Link>
		</div>
	);
};

export default GymsHub;
