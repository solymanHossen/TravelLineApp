import logo from "../Asset/logo.png"

import styled from 'styled-components';
import '../Style/NavBar.css'
import { MdOutlineCall } from "react-icons/md"



const Logo = styled.img`
height: 83px;
`;

const NavBar = () => {
  return (
    <div className="navBGC">
      <div className="navContainer ">
        <div className="mainNav d-flex justify-content-between align-items-center">
          <Logo src={logo} />
          <ul className="main-item-grid">
            <li> <a href="" className="text-decoration-none">Home</a> </li>
            <li> <a href="" className="text-decoration-none">Events</a></li>
            <li><a href="" className="text-decoration-none">About</a></li>
            <li><a href="" className="text-decoration-none">Blog</a></li>
            <li><a href="" className="text-decoration-none">Contact</a></li>
          </ul>
          <div className="phone-button">
            <button className="btn-nav" ><MdOutlineCall></MdOutlineCall> +1 (000) 000 000</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default NavBar;