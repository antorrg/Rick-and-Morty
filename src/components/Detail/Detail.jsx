import axios from "axios";
import {useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import style from "./Detail.module.css"





const Detail =()=>{
    const [character, setCharacter] = useState({});
    const {id} = useParams();
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
     
    return(
        <div>
        
                <div className={style.text}>
                 <h2>Name: {character?.name}</h2>
                 <h2>Status: {character?.status}</h2>
                 <h2>Specie: {character?.species}</h2>
                 <h2>Gender: {character?.gender}</h2>
                 <h2>Origin: {character.origin?.name}</h2>
                 <img src={character?.image} alt={character?.name} />
               </div>
    
        
       
        </div>
    )
}
export default Detail;