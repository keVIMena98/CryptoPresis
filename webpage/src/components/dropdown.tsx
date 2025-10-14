import { useState } from 'react';
import { MenuItems } from './menuItems';
import { Link } from 'react-router-dom';

// interface DropdownProps {
// 	click: boolean;
// 	handleClick: () => void;
// }

const Dropdown = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	return (
		<ul
			onClick={handleClick}
			className={`w-48 absolute top-24 list-none text-left clicked:hidden ${
				click ? 'DropdownContainer Clicked' : 'DropdownContainer'
			}`}
		>
			{MenuItems.map((item, index) => (
				<li key={index} className="bg-[#232B2B] cursor-pointer">
					<Link
						to={item.Path}
						onClick={() => handleClick()}
						className="block w-full h-full no-underline text-white p-4 hover:transition-all hover:duration-200 hover:ease-in-out hover:text-[#00ffff]"
					>
						{item.Title}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Dropdown;
