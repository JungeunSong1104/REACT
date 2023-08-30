import {useParams} from "react-router-dom";

const ProductDetailPage = () => {
    const params = useParams();//params에 들어가는 값은 

    return (
    <>
    <h1>Product Details</h1>
    <p>{params.productId}</p>
    {/* {params.productId} 경로 설정 하는 곳에 :뒤에 나오는걸 변수처럼 생각하는거라고했지 아무거나 쳐도 된다고했지
    그게 productId에 들어간다고 보면 됨? */}
    </>
    );
};

export default ProductDetailPage;