import { NavLink } from "react-router-dom"; 
const Error = ()=>{
    return(
        <div>
            <h1>This page does not exist.
                Please return to  <NavLink to="/home">Homepage</NavLink>.</h1>
        </div>  
    )
}
export default Error;