import Card from "../components/Card"
import { connect, useDispatch } from 'react-redux'
import { filterCards, orderCards } from "../redux/actions";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();

  const handleOrder= (event) => {
    dispatch(orderCards(event.target.value))
    setAux(true);
  }
  const handleFilter= (event) => {
    dispatch(filterCards(event.target.value))
  }
  const [aux, setAux] = useState(false)

  return (
  <div>
    <select onChange={handleOrder}>
      <option value="A">Ascendente</option>
      <option value="D">Descendente</option>
    </select>
    <select onChange={handleFilter}>
      <option value="Male">Masculino</option>
      <option value="Female">Femenino</option>
      <option value="Genderless">Sin género</option>
      <option value="unknown">Desconocido</option>
    </select>
    {
      myFavorites?.map(fav => {
        return (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            status={fav.status}
            species={fav.species}
            gender={fav.gender}
            image={fav.image}
            origin={fav.origin}
            onClose={fav.onClose}
          />
          )
      })
    }
  </div>
  )
}
const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);

