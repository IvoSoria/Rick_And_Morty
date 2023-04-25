import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Deatil';
import Form from './components/Form';
import Favorites from './components/Favorites';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'

const URL_BASE = "http://localhost:3001/rickandmorty/character"

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState (false);    
  
  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`)
    .then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
    });
  }
  
  useEffect(() => {
    !access && navigate('/');
  }, [access]);  

  function onSearch(id) {
    axios(`${URL_BASE}/${id}`)
    .then(response => response.data)
    .then((data) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    })
  }
  
  const onClose= (id) => {
    const charactersFiltered = characters.filter(character => character.id !== (id))
    setCharacters(charactersFiltered)
  }
    
  
  return (
    <div className='App'>
      {location.pathname !== '/' && <Nav onSearch= {onSearch} setAccess={setAccess} />
      }
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
      