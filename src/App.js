import "./App.css";

import axios from "axios";
import { useState, useEffect} from "react";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
//Importación de componentes:
import Form from "./components/Form/Form"; 
import Nav from "./components/Nav/Nav"; 
import Cards from "./components/Cards/Cards.jsx";
import Detail from "./components/Detail/Detail";  
import About from "./components/About/About";
import Favorites from "./components/Favorites/Favorites"

const URL_BASE = "https://rickandmortyapi.com/api/character";
const URL_NEW = "http://localhost:3001/rickandmorty/character/${id}";
const API_KEY= "";
const email = "abs@gmail.com";
const password = "123456";

function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const login = (userData) => {
    if(email === userData.email && password === userData.password){
      setAccess(true);
      navigate("/home");
    
    }
  }


 //Con async/await:
//  async function login({ email, password }) {
//   const URL = "http://localhost:3001/rickandmorty/login/";
//   try {
//     const { data } = await axios(
//       URL + `?email=${email}&password=${password}`
//     );
//     const { access } = data;
//     setAccess(data);
//     access && navigate("/home");
//   } catch (error) {
//     alert("El email y el password no coinciden.");
//   }
// }

  //Con Promises:
  /*function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(`${URL}?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(access);
       access && navigate('/home');
    });
 }*/

 
  useEffect(() => {
    !access && navigate('/');
   },[access]);
 //onSearch con async/await:
 const onSearch = async (id) => {
  if (isNaN(id)) {
    alert("Por favor, ingrese un número como ID.");
    return;
  }
   try {const {data} = await axios(`https://rickandmortyapi.com/api/character/${id}`);
   const characterExists = characters.some((character) => character.id === data.id);
   if (data.id) {
     if (characterExists) {
       alert("Este personaje ya se encuentra en la lista.");
     } else {
      setCharacters((characters) => [...characters, data]);
     }
    }else {
      alert(`¡No hay personajes con ese ID!`);
    }
  }catch (error) {
      alert('Ocurrió un error al obtener los datos. Por favor, intente nuevamente más tarde.');
   }
 }  
  
 //onSearch con Promises:
/*  const onSearch = (id) => {
  if (isNaN(id)) {
    alert("Por favor, ingrese un número como ID.");
    return;
  }


  axios(`http://localhost:3001/rickandmorty/character/${id}`)
    .then(({ data }) => {
      const characterExists = characters.some((character) => character.id === data.id);
      if (data.id) {
        if (characterExists) {
          alert("Este personaje ya se encuentra en la lista.");
        } else {
          setCharacters((characters) => [...characters, data]);
        }
      } else {
        alert(`¡No hay personajes con ese ID!`);
      }
    })
    .catch((error) => {
      alert('Ocurrió un error al obtener los datos. Por favor, intente nuevamente más tarde.');
    });
  };*/
 

  const onClose =(id)=>{
    const characterFiltered = characters.filter((char)=>char.id !== id);
    setCharacters(characterFiltered);
  
  }
 
  return (
    <div className="App">
      {
        location.pathname !== '/' && <Nav onSearch={onSearch} setAccess = {setAccess} /> 
      }
      <Routes>
        <Route path ="/" element={<Form login= {login}/>}></Route>
        <Route path = "/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
        <Route path ="/about" element={<About/>}></Route>
        <Route path ="/Detail/:id" element={<Detail/>}></Route>
        <Route path ="/Favorites" element = {<Favorites/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
