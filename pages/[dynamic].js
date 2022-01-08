import { useRouter } from "next/dist/client/router";
import Head from "next/head";


const DynamicRoute = () => {
  const route = useRouter();
  const query = route.query.daynamic;
  console.log("query", query);

  return (
    <div>
      <Head>
        <title>{query}</title>
      </Head>
      Hi i am Dynamic page:{query}
    </div>
  );
};

export default DynamicRoute;
