// import { Sidebar } from "./Components/Sidebar/Sidebar.jsx"
import { Dashboard } from "./Components/Dashboard/Dashboard.jsx"
import { Sidebar } from "./Components/Sidebar/Sidebar.jsx"
import { data } from "./Services/api.jsx"

export const App = () => {


  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full flex flex-col items-center mt-10 gap-10">
        <h1 className="text-4xl font-mono">Produtos</h1>
      <Dashboard />
      </div>
    </div>


  )
}