import { createBrowserRouter, RouterProvider } from "react-router-dom"; //라우터 임포트
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";
//createBrowserRouter hook 임 생긴거보면 함수임 그럼 리턴값이 있겠지 그거 받아줄 상수값필요
// const router = createBrowserRouter([
//   //사용하려는 경로들을 도와주는 함수?
//   {
//     path: "/",
//     element: (
//         <HomePage />
//     ),
//   }, // / : 가장 상위디렉토리
//   //path: '/'에 element를 연결해줌
//   //HomePage 컴포넌트의 내용이 열리는 것
//   {},
// ]); //정의를 내리는것

// function App() {
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
//   //RouterProvider에 createBrowserRouter의 주소(경로)를 넣어줌
// }



// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions);

//router 객체
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,//RootLayout는 프로덕트홈페이지를 자식으로서 갖고있게됨
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:productId", element: <ProductDetailPage /> 
      },
      /*
      라우터를 이용해서 돔을 연결해줄텐데 제품 목록페이지는 하나고 거기에 클릭해서 연결되는 제품정보알려주는 페이지는 여러개겠지
      상세정보 페이지마다 1번제품이다 이러면 1번제품주소를 /products/product-detail", element: <ProductOnePage />
      이렇게 여러개 만들어줄순 없음 페이지가 수천개가될테니까 그걸 어케 하나하나다 만듦 ㅇㅋ?
      그래서 라우터는 path: "/products/:productId", element: <ProductDetailPage />  :productId 이런 형태로 동적파라미터를 제공함
      아이디를 할당한느 것처럼 중간에 :을 써주고 이름을 써준느것 productId 이부분은 변수처럼 내 맘대로 정해줄수있음
      여기서 :는 라우터돔한테 콜론뒤에 문자는 변할수있는동적값이라는걸 알려주는것(변수같은거라고 알려주는것)
      마치 함수의 매개변수 처럼 쓰이는것 여기서는 결국 제품 번호라는 뜻 productId=제품번호 
      products는 경로로서 활용이 되고 products/ 뒤의 주소는 상세페이지로 연결되는 값으로 사용됨 */
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
