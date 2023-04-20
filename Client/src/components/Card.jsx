import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/actions";

function Card({ id, name, status, species, gender, origin, image, onClose, myFavorites, addFav, removeFav }) {

  const [isFav, setIsFav] = useState (false)

  const handleFavorite = () => {
      if (isFav) {
         removeFav (id)
         setIsFav (false)
      } else {
         addFav ({id, name, status, species, gender, origin, image})
         setIsFav (true)
      }
   }
  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  return (
      <div>
        <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍' }</button>
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
         </Link>
         <h2>Estado: {status}</h2>
         <h2>Especie: {species}</h2>
         <h2>Género: {gender}</h2>
         <h2>Origen: {origin}</h2>
         <img src={image} alt='' />
      </div>
   );
}
const mapStateToProps = (state) => {
   return {
    myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => dispatch(removeFav(id)),
   };
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
