import {Link} from "react-router-dom"

const PRODUCTS = [
  {id: 'p1', title: 'Product1'},
  {id: 'p2', title: 'Product2'},
  {id: 'p3', title: 'Product3'},
];

const ProductsPage = () => {
  return (
    <>
      <h1>The Products page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          // map : 내부에서 함수 선언해서 사용함
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
            {/* 백틱과 백틱사이에 /product/${prod.id} */}
          </li>
        ))}
      </ul>
      {/* 이렇게 하드코딩해서 하는 것 좋은 방법이 아니니까 map함수로 하나한 출력해서 가져오도록하자 */}
    </>
  );
};

export default ProductsPage;
