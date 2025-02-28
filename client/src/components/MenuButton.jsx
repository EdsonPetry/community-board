
const MenuButton = ({ link }) => {
    return (
        <>
        <button className="bg-red-600 text-white pt-3 pb-3 pl-5 pr-5 rounded-2xl font-semibold hover:bg-red-900 cursor-pointer">
            <a href={link}>View Menu</a>
        </button>
        </>
    )
}

export default MenuButton