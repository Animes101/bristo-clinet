import React from 'react'
import useMenu from '../hooks/useMenu'
import SectionHeading from '../Components/SectionHeading'
import { Link } from 'react-router-dom'
import { axiosSecure } from '../hooks/useAxiosSecure'

const ManageAllItem = () => {
    const {menu}=useMenu()


    const handleDelete= async (id)=>{

        const result=  await axiosSecure.delete(`/menu/${id}`)

        console.log(result)



    }

    const handleUpdate=(id)=>{

        alert(id)


    }
  return (
    <div>
      <SectionHeading
        title={"Manag Item"}
        desc={"Wanna Update Delete"}
        time={""}
      ></SectionHeading>
       <div className="flex justify-between py-5 bg-red-300  px-3">
        <h1>Total Menu</h1>
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
              {menu &&
                menu.map((item, index) => {

                    console.log(menu)
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
                      <th>
                        <Link to={'/dashboard/menu/update'} state={item._id} onClick={() => handleUpdate(item._id)} className="btn bg-red-500 btn-xs">
                          Update
                        </Link>
                      </th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ManageAllItem