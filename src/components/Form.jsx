import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
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
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description">
          Descrição
          <input
            type="textarea"
            data-testid="description-input"
            name="description"
            id="description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1">
          Atributo 01
          <input
            type="number"
            data-testid="attr1-input"
            name="attr1"
            id="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2">
          Atributo 02
          <input
            type="number"
            data-testid="attr2-input"
            name="attr2"
            id="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3">
          Atributo 03
          <input
            type="number"
            data-testid="attr3-input"
            name="attr3"
            id="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            name="image"
            id="image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rare">
          Raridade
          <select
            data-testid="rare-input"
            name="rare"
            id="rare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="trunfo"
            id="trunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trybe Trunfo
        </label>

        <input
          type="button"
          data-testid="save-button"
          value="Salvar"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
