// const module = require('App');
const axios = require('axios');

const getElephants = () => {
  return axios({
    method: 'get',
    url: `https://elephant-api.herokuapp.com/elephants`,
  })
    .then((response) => {
      console.log('should be first');
      return response.data.map((elephant) => {
        if (elephant.name) {
          return {
            Ename: elephant.name,
            species: elephant.species,
            sex: elephant.sex,
            image: elephant.image,
            note: elephant.note,
          };
        }
      });
    })
    // .then((elephants) => {
    //  elephants
    // })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getElephants = getElephants;

