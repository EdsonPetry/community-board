import Canopy from "./assets/canopy.png"
import CardContainer from "./components/CardContainer"
import "./index.css"

const App = () => {

  return (
    <div className="bg-gray-500 flex flex-col justify-center items-center ml-50 mr-50 mt-20 mb-20 ">
      <img src={Canopy} alt="canopy image" className="h-auto w-200 pb-30"></img>
      <h1 className="text-white text-7xl pb-40">
        Edson's Top CS Resources
      </h1>
      <CardContainer />
    </div>
  )
}

export default App