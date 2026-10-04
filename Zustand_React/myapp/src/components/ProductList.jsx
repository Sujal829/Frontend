import { compose } from "../utils/helper";
import withAuth from "./WithAuth";
import withData from "./WithData";
import withLoader from "./WithLoader";

const fetchComments = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  return data;
};

const ProductList = ({ data = [] }) => {
  return data.map((product) => <div key={product.id}>{product.name}</div>);
};

// const ProductListWithData = withData(fetchComments)(
//   withAuth(withLoader(ProductList)),
// );
// export default ProductListWithData;

export default compose(
  withData(fetchComments),
  withAuth,
  withLoader,
)(ProductList);
