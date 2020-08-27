import React, {Component} from 'react';
import {Button, Card, ListGroup} from "react-bootstrap";

import {getMewData, getDittoData, getCorsolaData, getUnownData} from './services/pokemonService';

//sprites
import mewLogo from './151MS.png';
import ditto from './Spr_2c_Ditto_credits.png';
import mew from './Spr_2c_151.png';
import corsola from './Spr_2c_222_s.png';
import unown from './Spr_2c_201.png';

//css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mewData: {},
      dittoData: {},
      corsolaData: {},
      unownData: {},
    }

  }
  // reusable Card for displaying Pokemon info after the user catches them!
    displayCard = (cardData) => {
      return (
        <ListGroup>
          You caught {cardData.name.toString().toUpperCase()}!! <hr/>
          <ListGroup.Item>{cardData.name.toString().toUpperCase()} says: {cardData.name} {cardData.name}</ListGroup.Item>
          <ListGroup.Item>NO. : {cardData.id}</ListGroup.Item>
          <ListGroup.Item>TYPE: {cardData.types[0].type.name.toString().toUpperCase()}</ListGroup.Item>
        </ListGroup>
      );
    }

  // methods for fetching/catching pokemon data
  // catch a Mew!
  setMewData = async () => {
   await getMewData().then(response => {
      this.setState({mewData: response.valueOf()})
    })
  }
  // catch a Ditto!
  setDittoData = async () => {
    await getDittoData().then(response => {
      this.setState({dittoData: response.valueOf()})
    })
  }
  // catch a Corsola!
  setCorsolaData = async () => {
   await getCorsolaData().then(response => {
      this.setState({corsolaData: response.valueOf()})
    })
  }
  // catch a Unown!
  setUnownData = async () => {
    await getUnownData().then(response => {
      this.setState({unownData: response.valueOf()});
    })
  }

  render()
    {
      return (
        <div className="App">
          <header className="App-header">
            <img src={mewLogo} className="App-logo" alt="mew"/>
            <h4 style={{"fontStyle": "italic"}}>....A wild Pokémon testing web application appeared!</h4>
            <hr style={{"border": "1px solid"}}/>
            <br/>
            . . .
            <br/>
            <p>
              Retrieve Pokémon data from the <a href="https://pokeapi.co/">PokéAPI</a><br/>
              for testing mocking of <a href="https://github.com/axios/axios">axios</a><br />
              with a <a href="https://reactjs.org/">ReactJS</a> web component.
            </p>
            <br/>
            <h1>Let's test!</h1>
            <h5>Time to catch some Pokémon at some endpoints!</h5>
            <br/>
            <container className="pokemon-container">
              <div className="mew-div">
                <h3>Test 1:</h3>
                <img src={mew} alt="mew sprite from Crystal"/><br/>
                <Button
                  variant="info"
                  className="poke-button"
                  onClick={() => this.setMewData()}
                >
                  Catch a Mew!
                </Button>
                <Card variant="light" style={{"color": "black", "marginBottom": "20px", "height": "225px"}}>
                  <Card.Body>
                    {Object.keys(this.state.mewData).length !== 0 ?
                      this.displayCard(this.state.mewData) :
                      "There is no Mew data currently...Perhaps you should try catching one?"}
                  </Card.Body>
                </Card>
              </div>
              <div className="ditto-div">
                <h3>Test 2:</h3>
                <img src={ditto} style={{"marginTop": "5px", "marginBottom": "20px"}}
                     alt="ditto from ending credits"/><br/>
                <Button
                  variant="info"
                  className="poke-button"
                  onClick={() => this.setDittoData()}
                >
                  Catch a Ditto!
                </Button>
                <Card variant="light" style={{"color": "black", "marginBottom": "20px", "height": "225px"}}>
                  <Card.Body>
                    {Object.keys(this.state.dittoData).length !== 0 ?
                      this.displayCard(this.state.dittoData) :
                      "There is no Ditto data currently...Perhaps you should try catching one?"}
                  </Card.Body>
                </Card>
              </div>
              <div className="unown-div">
                <h3>Test 3:</h3>
                <img src={unown} style={{"marginTop": "5px", "marginBottom": "20px"}} alt="unown"/><br/>
                <Button
                  variant="info"
                  className="poke-button"
                  onClick={() => this.setUnownData()}
                >
                  Catch an Unown!
                </Button>
                <Card variant="light" style={{"color": "black", "marginBottom": "20px", "height": "225px"}}>
                  <Card.Body>
                    {Object.keys(this.state.unownData).length !== 0 ?
                      this.displayCard(this.state.unownData) :
                      "There is no Unown data currently...Perhaps you should try catching one?"}
                  </Card.Body>
                </Card>
              </div>
              <div className="corsola-div">
                <h3>Test 4:</h3>
                <img src={corsola} style={{"marginTop": "5px", "marginBottom": "20px"}}
                     alt="corsola from crystal"/><br/>
                <Button
                  variant="info"
                  className="poke-button"
                  onClick={() => this.setCorsolaData()}
                >
                  Catch a Corsola!
                </Button>
                <Card variant="light" style={{"color": "black", "marginBottom": "20px", "height": "225px"}}>
                  <Card.Body>
                    {Object.keys(this.state.corsolaData).length !== 0 ?
                      this.displayCard(this.state.corsolaData) :
                      "There is no Corsola data currently...Perhaps you should try catching one?"}
                  </Card.Body>
                </Card>
              </div>
            </container>
            {/*<h3> Test Runner Results </h3>*/}
            {/*<container className="test-container">*/}

            {/*</container>*/}
          </header>

          <footer>
            . . .
            <br/>
            Pokémon and Pokémon character names are trademarks of <a href="nintendo.com">Nintendo</a>.
            All Pokémon sprites were acquired from <a
            href="https://bulbapedia.bulbagarden.net/wiki/Main_Page">Bulbapedia</a>.
          </footer>
        </div>
      )
    }
}
export default App;
