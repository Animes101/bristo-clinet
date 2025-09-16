import React from 'react'
import useUsers from '../hooks/useUsers'
import SectionHeading from '../Components/SectionHeading';
import { axiosSecure } from '../hooks/useAxiosSecure';


const Users = () => {

    const {isPending, error, users, refetch}=useUsers()  

    const deleteUsers=(id)=>{

        axiosSecure.delete(`/users/${id}`)
        .then(res=> {
            
            if(res.data.deletedCount>0){

                console.log('delete ok')

                refetch()
            }else{
                console.log('delete faild')
            }
           
        })

    }
    


    if(isPending){
        return <p>Loaing.......</p>
    }



      return (
    <div className="">
      <SectionHeading
        title={"ALL users"}
        desc={"Wanna all users"}
        time={"2 min ago"}
      ></SectionHeading>

      <div className="flex justify-between py-5 bg-red-300  px-3">
        <h1>Total Users: {users.length}</h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>1</th>
                <th>Email</th>
                <th>Password</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {users &&
                users.map((item, index) => {
                  return (

                    console.log(item),
                    <tr key={item._id}>
                      <th>{index + 1}</th>
                      <td>
                        {item.email}
                        <br />
                      </td>
                      <td>{item.password}</td>
                      <th>
                        <button onClick={() => deleteUsers(item._id)} className="btn bg-red-500 btn-xs">
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


export default Users