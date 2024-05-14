import { data } from "../../Services/api"

export const Product = () => {

    console.log(data.data)
    return data.data.map(element => {
        // console.log(element.description)
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
}