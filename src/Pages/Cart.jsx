import SectionHeading from "../Components/SectionHeading";
import { axiosSecure } from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const Cart = () => {
  const { cart ,refetch} = useCart();

  const totalOrders = cart.length;
  const totalPrice = parseInt(cart.reduce((sum, item) => sum + item.price, 0));


  const handleDelete = (id) => {

    axiosSecure.delete(`/carts/${id}`)
    .then(res=>{
      console.log(res);
      if(res.data.deletedCount>0){
        alert('deleted successfully')
        refetch();
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  };

  return (
    <div className="">
      <SectionHeading
        title={"My Cart"}
        desc={"Wanna Add More"}
        time={"2 min ago"}
      ></SectionHeading>

      <div className="flex justify-between py-5 bg-red-300  px-3">
        <h1>Total orders: {totalOrders}</h1>
        <h1>total price: {totalPrice}TK</h1>
        <button className="btn btn-secondary">Pay</button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>1</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {cart &&
                cart.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <th>{index + 1}</th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={`${item.image}`}
                                alt={`${item.name}`}
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {item.name}
                        <br />
                      </td>
                      <td>{item.price}</td>
                      <th>
                        <button onClick={() => handleDelete(item._id)} className="btn bg-red-500 btn-xs">
                          Delete
                        </button>
                      </th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
