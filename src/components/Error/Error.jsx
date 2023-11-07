import { NavLink } from "react-router-dom"; 
const Error = ()=>{
    return(
        <div>
            <h2>This page does not exist. <NavLink to="/home">Homepage</NavLink>.</h2>
        </div>  
    )
}
export default Error;