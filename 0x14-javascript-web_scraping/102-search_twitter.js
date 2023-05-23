#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const movieData = JSON.parse(body);
    const characterUrls = movieData.characters;

    const fetchCharacterData = (url) => {
      return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            const characterData = JSON.parse(body);
            resolve(characterData.name);
          }
        });
      });
    };

    const fetchAllCharacters = async () => {
      try {
        const characterNames = await Promise.all(
          characterUrls.map((url) => fetchCharacterData(url))
        );
        characterNames.forEach((name) => {
          console.log(name);
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllCharacters();
  }
});
