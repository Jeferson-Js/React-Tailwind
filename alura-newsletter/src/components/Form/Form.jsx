import React from "react";

const Form = ({ onSubmit }) => {
  const safeSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const name = event.target[0].value;
    const email = event.target[1].value;
    onSubmit({ name, email });
  };
  return (
    <form onSubmit={safeSubmit}>
      <input type="text" name="name" placeholder="Digite o seu nome..." />
      <input type="email" name="email" placeholder="Digite o seu email..." />
      <button type="submit">Seguir</button>
    </form>
  );
};

export default Form;
