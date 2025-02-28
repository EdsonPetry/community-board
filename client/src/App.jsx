import Card from "./components/Card"
import "./index.css"
import Canopy from "./assets/canopy.png"
import Truck1 from "./assets/truck1.jpg"
import Truck2 from "./assets/truck2.jpg"
import Truck3 from "./assets/truck3.jpg"
import Truck4 from "./assets/truck4.jpg"
import Truck5 from "./assets/truck5.jpg"
import Truck6 from "./assets/truck6.jpg"
import Truck7 from "./assets/truck7.jpg"
import Truck8 from "./assets/truck8.jpg"
import Truck9 from "./assets/truck9.jpg"
import Truck10 from "./assets/truck10.jpg"

const App = () => {

  return (
    <div className="bg-blue-300 flex flex-col justify-center items-center ml-50 mr-50 mt-20 mb-20 ">
      <img src={Canopy} alt="canopy image" className="h-auto w-200 pb-30"></img>
      <h1 className="text-white text-7xl pb-40">
        Food Truck Favorites
      </h1>
      <div className="flex flex-wrap  justify-around gap-50 pb-15 pl-20 pr-20">
        <Card image={Truck1} name="D'Albano" type="Italian" link="https://g.co/kgs/GMo92Dz" />
        <Card image={Truck2} name="Cube 55" type="Asian"link="https://www.yelp.com/biz/cube-55-new-york" />
        <Card image={Truck3} name="Tajeen Halal" type="Halal"link="https://g.co/kgs/Rnpu3LY" />
        <Card image={Truck4} name="Birria-Landia" type="Mexican" link="https://g.co/kgs/9XaJ9yo" />
        <Card image={Truck5} name="Amazigh Food Truck" type="Mediterranean" link="https://g.co/kgs/ZrzTdLP" />
        <Card image={Truck6} name="Madison Halal Food Truck" type="Halal" link="https://www.yelp.com/biz/28th-and-madison-halal-stand-new-york" />
        <Card image={Truck7} name="Egyptian Express Halal Food truck" type="Halal" link="https://www.yelp.com/biz/egyptian-halal-food-new-york" />
        <Card image={Truck8} name="Mystical Cuisine Halal Food Truck" type="American" link="https://g.co/kgs/sSrtAqz" />
        <Card image={Truck9} name="Chop Steak New York Food Truck" type="Barbecue" link="https://g.co/kgs/FypQgGz" />
        <Card image={Truck10} name="El Jefe Food Truck" type="Mexican" link="https://www.yelp.com/biz/el-jefe-food-truck-brooklyn-2" />
      </div>
    </div>
  )
}

export default App