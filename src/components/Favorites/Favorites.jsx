
//import { connect } from 'react-redux';
import Card from '../Card/Card'; 
import { orderFav,filterFav } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import styles from './Favorites.module.css';

const Favorites = () => {

  const [aux, setAux]= useState(false);
  
  const optionGender = ['All','Male', 'Female', 'Unknown', 'Genderless']

  const myFavorites = useSelector(state => state.myFavorites)
  
  const dispatch = useDispatch();

  const handleOrder = (event) => {
      dispatch(orderFav(event.target.value))
      setAux(!aux)
  }
  const filterCards = (event) => {
      dispatch(filterFav(event.target.value))
  }


  return (   
    <div className={styles.favorites}> 

      <select onChange={handleOrder}>
        <option value='Ascendente'>ASCENDENTE</option>
        <option value = 'Descendente'>DESCENDENTE</option>
      </select>
      <select onChange={filterCards}>
        {optionGender.map(option=>
          <option value={option} key={option}>{option}</option>)}
      </select>
      {myFavorites?.map((favorite) => (
        <Card
          key={favorite.id}
          image={favorite.image}
          character= {favorite}
        />
      ))}
    </div>
  );
 
};

//const mapStateToProps = (state) => {
//  return {
//    myFavorites: state.myFavorites,
//  };
//};
//
//export default connect(mapStateToProps,null)(Favorites);


export default Favorites;
