import React, { useState, useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import Page from 'src/components/Page';
import Profile from 'src/components/Profile';

import { Route, Switch } from 'react-router-dom';

import './styles.scss';

import * as crypto from 'crypto-js';
// import crypto from 'crypto';
// require('crypto');

const App = () => {
  const [hero, setHero] = useState([]);

  /* --UTILISATION D'UNE API TEMPORAIRE CAR LA CONNEXION
  A L'API MARVEL N'EST PAS ENCORE FONCTIONNELLE-- */

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`
  //     )
  //     .then((response) => {
  //       setHero(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    const timeStamp = Math.round(new Date().getTime() / 1000);
    const privateKey = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
    const publicKey = '298bab46381a6daaaee19aa5c8cafea5';

    const hashPass = crypto
      .createHash('md5')
      .update(`${timeStamp}${privateKey}${publicKey}`)
      .digest('hex');

    axios
      .get(
        `http://gateway.marvel.com:80/v1/public/characters?ts=${timeStamp}&apikey=298bab46381a6daaaee19aa5c8cafea5&hash=${hashPass}`,
      )
      .then((response) => {
        setHero(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Page hero={hero} />
        </Route>
        <Route path="/hero/:id">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
