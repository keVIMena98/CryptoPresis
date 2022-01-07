import React, {useState} from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const DropdownContainer = styled.ul`
    width: 200px;
    position: absolute;
    top: 100px;
    list-style: none;
    text-align: start;

    &.clicked {
        display: none;
    }
`;

export const DropdownMenu = styled.li`
    background: #232B2B;
    cursor: pointer;

    // &:hover {
    //     background: #494F55;
    // }
`

export const MenuLink = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #fff;
    padding: 16px;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #00ffff;
    }
`

const Dropdown = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <>
            <DropdownContainer 
            onClick={handleClick} 
            className={click ? 'DropdownContainer Clicked' : 'DropdownContainer'}
            >
                {MenuItems.map((item, index) => {
                    return(
                        <DropdownMenu key={index}>
                            <MenuLink to={item.Path} onClick={() => setClick(false)}>
                                {item.Title}
                            </MenuLink>
                        </DropdownMenu>
                    )
                })}
            </DropdownContainer>
        </>
    );
}

export default Dropdown;