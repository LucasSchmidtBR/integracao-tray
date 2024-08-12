import React, { useState, useEffect } from 'react';
import {api} from '../../Services/api.jsx'


export const Product = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
       api('products/all')
        //   .then((response) => response.json())
          .then((data) => {
            //  console.log(data);
             setPosts(data.data.data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);

    return(
        posts ? <OpenSideBar close={closeDrawer} /> :
        <CloseSidebar open={openDrawer}/>
    )
}