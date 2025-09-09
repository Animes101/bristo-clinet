import React, { useEffect, useState } from 'react'

const useMenu = () => {
 
    const [menu , setMenu]=useState(null)

    useEffect(() => {
        fetch("Papular.json")
          .then((res) => res.json())
          .then((data) => {
            
            setMenu(data);
          });
      }, []);


      return { menu }
}

export default useMenu