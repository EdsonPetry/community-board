import Card from "./components/Card"
import "./index.css"
import Canopy from "./assets/canopy.png"
import Truck1 from "./assets/truck1.jpg"
import Truck2 from "./assets/truck2.jpg"
import Truck3 from "./assets/truck3.jpg"

const App = () => {

  return (
    <div className="bg-blue-300 flex flex-col justify-center items-center ml-50 mr-50 ">
      <img src={Canopy} alt="canopy image" className="h-auto w-350 pb-30"></img>
      <h1 className="text-white text-9xl pb-40">
        Food Truck Favorites
      </h1>
      <div className="flex justify-around gap-50 pb-15 pl-20 pr-20">
        <Card image={Truck1} name="D'Albano" type="Mexican type"/>
        <Card image={Truck2} name="Cube 55" type="Asian"/>
        <Card image={Truck3} name="Tajeen Halal" type="Middle Eastern"/>
      </div>
    </div>
  )
}

export default App