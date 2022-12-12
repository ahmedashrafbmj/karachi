import OrderItem from "./Order/OrderItem.jsx";
import classes from './Order/Order.module.css';
import Navbar1 from './Home/Navbar1';
import Footer1 from './Home/Footer';

// import doenload from "../../../public/img/"
const Orders =[
  {id:1, Category:"China T-shirt",weight:1, quantity:1, price:399, Image:'/img/download.jpg', pID:"569843848493fsfr9292" },
  {id:2, Category:"China T-shirt1",weight:1, quantity:1, price:399, Image:"/img/images (1).jpg", pID:"569843848493fsfr9292" },
  {id:3, Category:"China T-shirt2",weight:1, quantity:1, price:399, Image:"/img/images (2).jpg", pID:"569843848493fsfr9292" },
  {id:4, Category:"China T-shirt3",weight:1, quantity:1, price:399, Image:"/img/images (3).jpg", pID:"569843848493fsfr9292" },
  {id:5, Category:"China T-shirt4",weight:1, quantity:1, price:399, Image:"/img/images (4).jpg", pID:"569843848493fsfr9292" },
]


const OrdersTable = () => {
  return (
    <>
    <Navbar1/>
      <div style={{ backgroundColor: "", minHeight: "100vh" }}>
        <div className="container-xxl py-5">
          <div className={`me-lg-4`}>
            <h2 className={`text-center pt-2 fw-bold`}>Order</h2>
            <div className="table-responsive px-4 pt-4">
              <table className={`table  ${classes.table}`}>
                <thead className={classes.thead}>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Category</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                    <th scope="col">Product Id</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Orders.map((item)=>(
                      <OrderItem item={item}/>
                    ))
                  }
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer1 />
      </div>
    </>
  );
};

export default OrdersTable;
