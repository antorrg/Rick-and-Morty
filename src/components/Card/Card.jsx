import style from './Card.module.css';
import { NavLink, useLocation } from "react-router-dom"; 
import { addFav, removeFav } from "../../redux/actions";
import {connect}from 'react-redux';
import {useState, useEffect} from 'react';



const Card =({character, onClose, addFavorites, removeFavorites, myFavorites})=> {
   const { id, name, image, gender} = character;
   //console.log(character, onClose);
  
   useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
  }, [myFavorites]);

  console.log(character)
   const [IsFav, setIsFav]= useState (false);
   
   const handleFavorite=()=>{
      if(IsFav){
        setIsFav(false);
        removeFavorites(id);
      }
      else{
        setIsFav(true);
        addFavorites({id, name,image,gender});
      }
   }
   
   return (
     <div className = {style.card} id={id}>
       {useLocation().pathname === "/home" && <button className = {style.btn} onClick={() => onClose(id)}>X</button>}
       <button className = {style.btn1} onClick={handleFavorite}>{IsFav ? '❤️' : '🤍'}</button>
       <NavLink to={`/detail/${id}`} ><h2 className="card-name">{name}</h2></NavLink>
       <img src={image} alt="Image not found" />
       
     </div>
   );
 }

function mapDispatchToProps(dispatch){
  return {
     addFavorites: function (character){
        dispatch(addFav(character))
     },
     removeFavorites: function (id){
        dispatch(removeFav(id))
     }
  }
}

function mapStateToProps(state){
    return{
      myFavorites:state.myFavorites
    }
}
export default connect(mapStateToProps, mapDispatchToProps )(Card)