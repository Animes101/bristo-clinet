import React, { useEffect, useState } from 'react'

const useMenu = () => {
 
    const [menu , setMenu]=useState(null)

    useEffect(() => {
        fetch("http://localhost:5000/menu")
          .then((res) => res.json())
          .then((data) => {
                setMenu(data.data);
          });
      }, []);


      return { menu }
}

export default useMenu