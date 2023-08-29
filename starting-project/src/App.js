import { createBrowserRouter, RouterProvider } from "react-router-dom"; //라우터 임포트
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
