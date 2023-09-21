import { NavLink } from "react-router-dom"; 
const Error = ()=>{
    return(
        <div>
            <h2>This page does not exist. Please go back to the <NavLink to="">homepage</NavLink>.</h2>
        </div>  
    )
}
export default Error;