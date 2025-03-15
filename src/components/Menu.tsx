import { Link, useLocation } from 'react-router-dom';

type MenuProps = {
    items: MenuItems[]
}
interface MenuItems{
    name: string;
    link: string;
}
const Menu : React.FC<MenuProps> = ({items}) => {
    const location = useLocation();

    return (
        <ul className="flex flex-row gap-[40px]">
            {items.map((item: MenuItems) => {
                let isActive = location.pathname === item.link;
                let itemClasses = 'relative text-sm text-black5 hover:text-primary transition duration-300 ';

                if(isActive){
                    itemClasses += "text-primary after:content-[''] after:w-2 after:h-2 after:bg-primary after:absolute after:left-1/2 after:-bottom-1/2 after:-translate-x-1/2 after:rounded-full";
                }
                return (
                    <li key={item.name}>
                        <Link to={item.link} className={itemClasses}>{item.name}</Link>
                    </li>
                )
            })}
        </ul>
    )
}   

export default Menu;