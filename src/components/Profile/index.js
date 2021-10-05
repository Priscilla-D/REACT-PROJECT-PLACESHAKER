import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './styles.scss';

const Profile = () => {
  const params = useParams();
  const charactersId = params.id;

  const [oneHero, setOneHero] = useState([]);

  /* --UTILISATION D'UNE API TEMPORAIRE CAR LA CONNEXION
  A L'API MARVEL N'EST PAS ENCORE FONCTIONNELLE-- */

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${characterId}.json`
  //     )
  //     .then((response) => {
  //       setOneHero(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [heroId]);

  useEffect(() => {
    const timeStamp = Math.round(new Date().getTime() / 1000);
    const privateKey = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
    const publicKey = '298bab46381a6daaaee19aa5c8cafea5';

    const crypto = require('crypto');
    const hashPass = crypto
      .createHash('md5')
      .update(`${timeStamp}${privateKey}${publicKey}`)
      .digest('hex');

    axios
      .get(
        `http://gateway.marvel.com:80/v1/public/characters/${charactersId}?ts=${timeStamp}&apikey=298bab46381a6daaaee19aa5c8cafea5&hash=${hashPass}`
      )
      .then((response) => {
        setOneHero(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [charactersId]);

  return (
    <div className="hero">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={oneHero.images} />
        <Card.Body>
          <Card.Title>{oneHero.name}</Card.Title>
          <Card.Text>{oneHero.id}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
