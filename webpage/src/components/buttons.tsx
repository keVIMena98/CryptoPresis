import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

type ButtonProps = {
	primary?: boolean;
	big?: boolean;
	dark?: boolean;
	fontBig?: boolean;
	children: React.ReactNode;
	to: string;
	href: string;
	smooth?: boolean;
	duration?: number;
	spy?: boolean;
	exact?: string;
	offset?: number;
	dark2: boolean;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
};

// Tailwind CSS classes for the Button component
export const ButtonA: React.FC<ButtonProps> = ({
	primary,
	big,
	dark,
	fontBig,
	children,
	to,
}: ButtonProps) => (
	<a
		href={to} // Use 'to' prop here
		className={`rounded whitespace-nowrap outline-0 border-none cursor-pointer grid justify-center items-center transition-all duration-200 ease-in-out bg-${
			primary ? '[#00ffff]' : '[#010606]'
		} ${big ? 'py-4 px-12' : 'py-3 px-8'} text-${
			dark ? '[#010606]' : 'white'
		} text-${fontBig ? '16' : '12'} hover:${
			primary ? 'bg-white' : 'bg-[#00ffff]'
		}`}
	>
		{children}
	</a>
);

// Tailwind CSS classes for the Button2 component
export const ButtonS: React.FC<ButtonProps> = ({
	primary,
	big,
	dark,
	fontBig,
	children,
	to,
	onMouseEnter,
	onMouseLeave,
}: ButtonProps) => (
	<LinkS
		to={to} // Added this line
		onMouseEnter={onMouseEnter}
		onMouseLeave={onMouseLeave}
		className={`rounded whitespace-nowrap outline-0 border-none cursor-pointer flex justify-center items-center transition-all duration-200 ease-in-out bg-${
			primary ? '[#00ffff]' : '[#010606]'
		} ${big ? 'py-4 px-12' : 'py-3 px-8'} text-${
			dark ? '[#010606]' : 'white'
		} text-${fontBig ? '16' : '12'} hover:${
			primary ? 'bg-white' : 'bg-[#00ffff]'
		}`}
	>
		{children}
	</LinkS>
);

// Tailwind CSS classes for the Button3 component
export const ButtonR: React.FC<ButtonProps> = ({
	primary,
	big,
	dark,
	fontBig,
	children,
	to,
}: ButtonProps) => (
	<LinkR
		to={to} // Added this line
		className={`rounded whitespace-nowrap outline-0 border-none cursor-pointer grid justify-center items-center transition-all duration-200 ease-in-out bg-${
			primary ? '[#00ffff]' : '[#010606]'
		} ${big ? 'py-4 px-12' : 'py-3 px-8'} text-${
			dark ? '[#010606]' : 'white'
		} text-${fontBig ? '16' : '12'} hover:${
			primary ? 'bg-white' : 'bg-[#00ffff]'
		}`}
	>
		{children}
	</LinkR>
);
