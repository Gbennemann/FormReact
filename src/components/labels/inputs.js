import React from "react";

//props é um objeto, e representa todos os valores passados para o componente

function InputForm({ titulo, ...rest }) {
  return (
    // className é uma propriedade passada para o componente label
    <label className="form-label">
      {/* acessando as propriedade titulo do componente */}
      {titulo}
      <input className={"form-input"} {...rest} />
    </label>
  );
}

export default InputForm;
