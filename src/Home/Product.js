// import React from 'react';
// import { Card } from 'antd';
// const { Meta } = Card;
// const navigate = useNavigate();




// const Products = () => (
//     <div style={{display:"flex",justifyContent:"space-around",textAlign:"center",flexWrap:"wrap",alignItems:"center"}}>
//   <Card onClick={() => navigate("/sign-in")}
//     hoverable
//     style={{
//       width: 240,
//     }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//     <Meta title="T-shirt" description="Rs 800" />
//   </Card>
//   <Card
//     hoverable
//     style={{
//       width: 240,
//     }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//     <Meta title="T-shirt" description="Rs 800" />
//   </Card>
//   <Card
//     hoverable
//     style={{
//       width: 240,
//     }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//     <Meta title="T-shirt" description="Rs 800" />
//   </Card>
//   <Card
//     hoverable
//     style={{
//       width: 240,
//     }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//     <Meta title="T-shirt" description="Rs 800" />
//   </Card>
//   <Card
//     hoverable
//     style={{
//       width: 240,
//     }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//     <Meta title="T-shirt" description="Rs 800" />
//   </Card>
  
//   </div>
// );
// export default Products;


import { useNavigate } from "react-router-dom";
import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

function Products() {
  const navigate = useNavigate();

 
  return(
    <>
     <div style={{display:"flex",justifyContent:"space-around",textAlign:"center",flexWrap:"wrap",alignItems:"center"}}>
  <Card onClick={() => navigate("/Product-Details")}
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="T-shirt" description="Rs 800" />
  </Card>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="T-shirt" description="Rs 800" />
  </Card>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="T-shirt" description="Rs 800" />
  </Card>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="T-shirt" description="Rs 800" />
  </Card>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="T-shirt" description="Rs 800" />
  </Card>
  
  </div>
    </>
  )
}
export default Products