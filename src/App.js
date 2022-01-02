import React, { useState, useEffect } from 'react';
import { Component } from 'react/cjs/react.production.min';
import './App.css';
import restaurant from './restaurant.jpeg';

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
      <img src={restaurant} width={600} alt='Glasses and silverware in a restaurant table' />
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjetive} food around.</p>
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.tittle}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>Copyright {props.year}</footer>
  );
}

const dishes = [
  "Salmon",
  "Lasagna",
  "Tomato Soup",
  "Macarroni and Chesse"
];

const dishObject = dishes.map((dish, i) => ({ id: i, tittle: dish }));

function SecretComponent() {
  return (
    <h1>It content is for autorized users only</h1>
  );
}

function PublicComponent() {
  return (
    <h1>I is a public component</h1>
  );
}

function Emotions() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`Its ${emotion} arround here`)
  }, [emotion]);

  useEffect (() => {
    console.log(`It's ${secondary} around here`)
  }, [secondary]);

  return (
    <>
      <h1>Current emotion is {emotion} and {secondary}.</h1>
      <h2 className='subTitle'>setState and useEffect</h2>
      <button onClick={() => setEmotion("happy")}>
        happy
      </button>
      <button onClick={() => setSecondary("kraby")}>
        kraby
      </button>
      <button onClick={() => setEmotion("frustrated")}>
        Frustrated
      </button>
      <button onClick={() => setEmotion("enthusiastic")}>
        enthuse
      </button>
    </>
  );
}

function App(props) {
  return (
    <div className="App">
      <Header name="Fabian" />
      <>
        {props.authorized ? <SecretComponent /> : <PublicComponent />}
      </>
      <Main adjetive="Amazing" dishes={dishObject} />
      <Footer year={new Date().getFullYear()} />
      <Emotions />
    </div>
  );
}

export default App;
