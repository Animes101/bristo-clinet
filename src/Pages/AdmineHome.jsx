import { useQuery } from "@tanstack/react-query";
import React from "react";
import { axiosSecure } from "../hooks/useAxiosSecure";
import SectionHeading from "../Components/SectionHeading";

const AdminHome = () => {
  const { data } = useQuery({
    queryKey: ["adminHome"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  console.log(data);
  return (
    <div>
      <SectionHeading title="Admin Dashboard" />
      <div className="space-x-5">
        <button className="btn">
          Customers{" "}
          <div className="badge badge-sm badge-secondary">
            +{data?.totalUsers || 0}
          </div>
        </button>
        <button className="btn">
          menuItems{" "}
          <div className="badge badge-sm badge-secondary">
            +{data?.menuItems || 0}
          </div>
        </button>
        <button className="btn">
          orders{" "}
          <div className="badge badge-sm badge-secondary">
            +{data?.orders || 0}
          </div>
        </button>
        <button className="btn">
          revenue{" "}
          <div className="badge badge-sm badge-secondary">
            +{data?.revenue || 0}
          </div>
        </button>
      </div>
    </div>
  );
};

export default AdminHome;
