import MenuButton from "./MenuButton" 

const Card = ({image, name, desc, link}) => {
    return(
        <div className="flex flex-col items-center justify-between bg-white h-150 pb-10 rounded-3xl shadow-2xl w-75">
            <img src={image} className="w-75 h-75 object-cover"/>
            <h2 className="text-3xl font-bold">{name}</h2>
            <h3 className="text-2xl font-bold">{desc}</h3>
            <MenuButton link={link} />
        </div>
    )
}

export default Card