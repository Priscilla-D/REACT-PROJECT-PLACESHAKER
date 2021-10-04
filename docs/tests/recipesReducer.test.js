// fichier pour les tests du reducer des recettes

// on importe l'une des syntaxes de chai
import { expect } from 'chai';

import recipesReducer from '../../src/reducers/recipesReducer';

// on se sert de l'action creator dans le test
import { saveRecipes } from '../../src/actions/recipes';

import recipesData from '../data/recipes';

describe('recipesReducer', () => {
  it('is a function', () => {
    expect(recipesReducer).to.be.a('function');
  });

  // on voudrait être alertés si on a changé temporairement une valeur dans le state
  // et qu'on a oublié de l'enlever
  it('test initial state', () => {
    // on "prend une photo" du state initial qu'on devrait avoir
    const expectedInitialState = {
      recipesList: [],
    };

    // on compare le state initial réel (obtenu en appelant le reducer) avec le
    // state initial qu'on devrait avoir
    // pour obtenir le state initial du reducer : on appelle la fonction sans
    // fournir de state
    const realInitialState = recipesReducer();
    // console.log(realInitialState);

    // comparaison en profondeur ("deep") : on compare chaque propriété des deux objets
    // une comparaison to.equal regarde si les raccourcis font référence au même objet
    expect(realInitialState).to.deep.equal(expectedInitialState);
  });

  it('check treatment of action SAVE_RECIPES', () => {
    // on prépare un state d'avant
    const stateBefore = {
      recipesList: [],
    };

    // on prépare une action : soit on crée directement l'objet, soit on fait
    // appel à l'action creator (permettra de vérifier que le nom des infos de
    // payload est cohérent entre action creator et reducer)
    const action = saveRecipes(recipesData);

    // on prépare le state d'après qu'on devrait avoir
    const expectedStateAfter = {
      recipesList: recipesData,
    };

    // on appelle le reducer avec state d'avant et action => on récupère
    // le state d'après
    const stateAfter = recipesReducer(stateBefore, action);

    // on compare le state d'après réel avec le state d'après attendu (celui que
    // j'ai calculé)
    expect(stateAfter).to.deep.equal(expectedStateAfter);
  });
});
