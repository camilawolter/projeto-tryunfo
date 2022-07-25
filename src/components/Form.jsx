import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>

        <label htmlFor="name">
          Nome
          <input
            type="text"
            data-testid="name-input"
            name="name"
            id="name"
            placeholder="Digite o nome"
          />
        </label>

        <label htmlFor="description">
          Descrição
          <input
            type="textarea"
            data-testid="description-input"
            name="description"
            id="description"
          />
        </label>

        <label htmlFor="attr1">
          Atributo 01
          <input type="number" data-testid="attr1-input" name="attr1" id="attr1" />
        </label>

        <label htmlFor="attr2">
          Atributo 02
          <input type="number" data-testid="attr2-input" name="attr2" id="attr2" />
        </label>

        <label htmlFor="attr3">
          Atributo 03
          <input type="number" data-testid="attr3-input" name="attr3" id="attr3" />
        </label>

        <label htmlFor="image">
          Imagem
          <input type="text" data-testid="image-input" name="image" id="image" />
        </label>

        <label htmlFor="rare">
          Raridade
          <select data-testid="rare-input" name="rare" id="rare">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          <input type="checkbox" data-testid="trunfo-input" name="trunfo" id="trunfo" />
          Super Trybe Trunfo
        </label>

        <input type="button" data-testid="save-button" value="Salvar" />
      </form>
    );
  }
}

export default Form;
