import MenuButton from "./MenuButton" 

const Card = ({image, name, type}) => {
    return(
        <div className="flex flex-col items-center justify-between bg-white h-150 pb-10 rounded-3xl shadow-2xl w-100">
            <img src={image} className="w-100 h-75 object-cover"/>
            <h2 className="text-5xl font-bold">{name}</h2>
            <h3 className="text-3xl font-bold">{type}</h3>
            <MenuButton />
        </div>
    )
}

export default Card