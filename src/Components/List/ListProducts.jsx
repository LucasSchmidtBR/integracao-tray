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


        console.log(posts == undefined)
    return (
        posts == undefined ? <h1>Nenhum produto para ser atualizado</h1> : posts.map(element => {

                        return (
                            <li key={element.id} className="py-4 px-2 rounded-lg w-full hover:bg-gray-200 flex justify-between items-center border-b-2">
                                <div className="flex items-center justify-between space-x-4 rtl:space-x-reverse">
                                    <div className="flex-shrink-0">
                                        <img src={element.thumbnail} alt="" className="w-8 h-8" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {element.description}
                                        </p>
                                        <p className="test-sm text-gray-500 truncate dark:text-gray-400">
                                            {element.sku}
                                        </p>
                                    </div>
                                </div>
                                <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Remover</button>
            
                            </li>
                        )
                })
    ) 

    
    // (
//         if(posts){
//             
// }
    // )
}