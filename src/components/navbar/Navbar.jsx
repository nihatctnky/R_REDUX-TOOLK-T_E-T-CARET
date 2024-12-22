import NavbarLeft from "./NavbarItem/NavbarLeft"
import NavbarRight from "./NavbarItem/NavbarRight"


const Navbar = () => {
    return (
        <div className="flex items-center justify-between my-5 mx-auto gap-6 sm:gap-4">
            <NavbarLeft />
            <NavbarRight />

        </div>
    )
}

export default Navbar