import Product from "../components/products";
import { Layout } from "../layout";

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto my-5">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </Layout>
  );
}
