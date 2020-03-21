import { useRouter } from "next/router";
import Layout from "../../../components/Layout";

export default function Product() {
  const router = useRouter();

  return (
    <Layout>
      <h1>Product # {router.query.id}</h1>
      <p>Product description</p>
    </Layout>
  );
};
