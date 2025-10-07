import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../hooks/useAxiosSecure";
import SectionHeading from "../Components/SectionHeading";

const PaymentHistry = () => {
  const { user } = useContext(AuthContext);

  const { data } = useQuery({
    queryKey: ["phistory"],

    queryFn: async () => {
      const result = await axiosSecure.get(`/payments/${user?.email}`);

      return result.data;
    },
    enabled: !!user?.email,
  });

  return (
    <div>
        <SectionHeading title={"Payment History"} 
        desc={""} 
        time={"---Payment History---"}>
      </SectionHeading>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>EMAIL</th>
              <th>TOTAL PRICE</th>
              <th>PAYMENT DATE</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {data?.map((item, index) => {

                console.log(item)
              return (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.email}</td>
                  <td>{item.amount}</td>
                  <td>{item.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistry;
