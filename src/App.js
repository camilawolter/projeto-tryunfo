import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
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
      </div>
    );
  }
}

export default App;
