import {useState } from "react";

const Form = (props) => {

  const [userData, setUserData] = useState({ 
    email: '', password: '' 
  })
  const handleChangeEmail = (event) => {
    setUserData({...userData, [event.target.name]: event.target.value });
  
  validateEmail();
  };  
  const handleChangePassword = (event) => {
    setUserData({...userData, [event.target.name]: event.target.value });

  validatePassword();
  };
  const [errors, setErrors] = useState({
    email: '', password: ''
  })  
  const validateEmail = () => {
    
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.email) || userData.email === "" || userData.email.length > 35) {
      setErrors({
        ...errors,
        email: "Por favor, revisa tu email",
      });
    } else {
      setErrors({
        ...errors,
        email: "",
      });
    };
  }
  const validatePassword = () => {
    if (!/^\d+$/.test(userData.password) || userData.password.length < 5 || userData.password.length > 9) {
      setErrors({
        ...errors,
        password: "la contraseña tiene que tener una longitud entre 6 y 10 caracteres numéricos",
      });
    } else {
      setErrors({
       ...errors,
        password: "",
      });
    };
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    //!falta decirle qué hace con esos datos cargados.
    props.login(userData)
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <h1>Formulario de registro</h1>
      <label htmlFor="email">Email: </label>
      <input
        name="email"
        type="email"
        placeholder="Ingrese su email"
        value={userData.email}
        onChange={handleChangeEmail}
      />
      {errors.email && <p>{errors.email}</p>}
      <hr />
      <label htmlFor="password">Contraseña: </label>
      <input
        name="password"
        type="password"
        placeholder="Ingrese su contraseña"
        value={userData.password}
        onChange={handleChangePassword}
      />
      {errors.password && <p>{errors.password} </p>}
      <hr />

      <button
        type="submit"
        disabled={!userData.email || !userData.password || errors.email || errors.password}
      >
        Enviar
      </button>
    </form>
  );
}

export default Form;
