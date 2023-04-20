import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import About from './components/About';
import Detail from './components/Deatil';
import Form from './components/Form';
import Favorites from './components/Favorites';

const URL_BASE = "http://localhost:3001/rickandmorty/character"

function App() {

  const [characters, setCharacters] = useState([])
         
   function onSearch(id) {
    axios(`${URL_BASE}/${id}`)
    .then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
   })}
  const onClose= (id) => {
    const charactersFiltered = characters.filter(character => character.id !== (id))
    setCharacters(charactersFiltered)
  }
  const location = useLocation();

  // verifica si la ruta actual es diferente a la ruta de inicio
  const showNav = location.pathname !== '/';

  const navigate = useNavigate();
  const [access, setAccess] = useState (false);
  const EMAIL = "ivosoria@hotmail.com";
  const PASSWORD = "123456";

  const login = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate('/home');
    } 
  }
  const logout = () => {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

           
  return (
    <div className='App'>
      {showNav && <Nav onSearch= {onSearch} logout={logout} />}
        <Routes>
          <Route path= "/" element= {<Form login= {login} />}/>
          <Route path= "/home" element= {<Cards characters={characters} onClose={onClose}/>}/>
          <Route path= "/about" element= {<About/>}/>
          <Route path= "/detail/:id" element= {<Detail/>}/>
          <Route path= "/favorites" element= {<Favorites/>}/>
        </Routes>
    </div>
  );
}

export default App;
      