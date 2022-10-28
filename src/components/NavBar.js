import {Link, NavLink} from 'react-router-dom';
import "./NavBar.css";


const NavBar = () => {
  return (
    
    <nav>  
    <NavLink to="/orders"> Order History </NavLink>  
    <NavLink to="/order/new/"> New Order </NavLink>  
    </nav>  
   
  );
};

export default NavBar;
  