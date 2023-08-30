import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  //const navigate = useNavigate();
  // const navigateHandler = () => {
  //   navigate('/products');
  //navigate라는 함수를 사용하는데 이걸 사용하려면 navigate hook 을 사용해야함
  // };
  return (
      // div를 안쓰고 <></>이렇게 쓰면 가상으로 묶어주는 태그를 제공합니다.
      // div를 남발하는것보다 이 방법이 더 좋습니다.
      <>
        <h1>My Home Page</h1>
        <p>
          Go to <Link to="/products">the list of products</Link>
        </p>
        {/* <p>
          <button onClick={navigateHandler}>Navigate</button>
        </p> */}
        {/* 버튼만들어서 페이지 이동 구현하는 방법은 좋은 방법이 아님 */}
        
      </>
    );
  }; 
  
  export default HomePage;