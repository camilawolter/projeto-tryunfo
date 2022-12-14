import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
  cardListSaved: [],
};

class App extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  onInputChange = ({ target }) => {
    const { name, value, type, checked } = target;

    const valueNameCard = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valueNameCard,
    },
    () => {
      this.saveButtonDisabled();
    });
  };

  saveButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
    } = this.state;

    const SUM_MAX_ATTR = 210;
    const MAX_ATTR = 90;
    const MIN_ATTR = 0;
    const sumAttr = parseFloat(cardAttr1) + parseFloat(cardAttr2) + parseFloat(cardAttr3);

    const valid = [cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
      && sumAttr <= SUM_MAX_ATTR
      && cardAttr1 <= MAX_ATTR
      && cardAttr2 <= MAX_ATTR
      && cardAttr3 <= MAX_ATTR
      && cardAttr1 >= MIN_ATTR
      && cardAttr2 >= MIN_ATTR
      && cardAttr3 >= MIN_ATTR,
    ].every(Boolean);
    this.setState({ isSaveButtonDisabled: !valid });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardListSaved,
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    } = this.state;

    this.setState({
      cardListSaved: [...cardListSaved, {
        name: cardName,
        description: cardDescription,
        image: cardImage,
        rare: cardRare,
        attr1: cardAttr1,
        attr2: cardAttr2,
        attr3: cardAttr3,
        trunfo: cardTrunfo,
      }],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      hasTrunfo: cardTrunfo,
    });
  }

  buttonDeleteCard = ({ target: { name } }) => {
    const { cardListSaved } = this.state;
    const newCard = cardListSaved.filter((obj) => obj.name !== name);
    const isTrunfo = cardListSaved.find((obj) => obj.name === name).cardTrunfo;

    this.setState({
      cardListSaved: newCard,
      hasTrunfo: !isTrunfo,
    });
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      cardListSaved,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo!</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        <div className="saved-cards">
          <h2>Todas as cartas</h2>
          {cardListSaved.map((card, index) => (
            <div key={ index }>
              <Card
                key={ index }
                cardName={ card.name }
                cardDescription={ card.description }
                cardAttr1={ card.attr1 }
                cardAttr2={ card.attr2 }
                cardAttr3={ card.attr3 }
                cardImage={ card.image }
                cardRare={ card.rare }
                cardTrunfo={ card.trunfo }
              />

              <button
                type="button"
                data-testid="delete-button"
                name={ card.name }
                onClick={ this.buttonDeleteCard }
              >
                Excluir
              </button>
            </div>

          ))}
        </div>
      </div>
    );
  }
}

export default App;
