import SearchBar from "../SearchBar/SearchBar";
import {NavLink,} from "react-router-dom";

const Nav = ({onSearch,setAccess}) => {
   const out = () => {
       setAccess=false;
       localStorage.clear();
       window.location.reload();    
   }

    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            <button>
                <NavLink to = "/About">ABOUT</NavLink>
                </button>
            <button>
                <NavLink to = "/home">HOME</NavLink>
                </button>
                <button onClick = {()=>out()}>
                    <NavLink to = "/">LOG OUT</NavLink>
                </button>
                <button>
                    <NavLink to = "/Favorites">Favorites</NavLink>
                </button>
                    
        </div>
    )

}
export default Nav;