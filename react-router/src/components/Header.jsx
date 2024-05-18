import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <NavLink
        // className={({ isActive, isPending, isTransitioning }) => [
        //     isPending ? 'pending' : '',
        //     isActive? 'active' : '',
        //     isTransitioning? 'transitioning' : '',
          
        // ].join(" ")}

        // style ={({isActive, isPending, isTransitioning}) => {
        //     return {
        //         fontWeight: isActive ? 'bold' : '',
        //         color: isPending? 'gred' : 'black',
        //         textDecoration: isTransitioning? 'slide' : '', 
        //     }
        // }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink to="/posts">Posts</NavLink>
    </header>
  );
}
