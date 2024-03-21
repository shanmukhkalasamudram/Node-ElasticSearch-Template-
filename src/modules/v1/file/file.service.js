const config = require('config');
const { Client } = require('@elastic/elasticsearch');

const elasticClient = new Client(config.ELASTIC);

const post = async () => {
  let data = await elasticClient.index({
    index: 'to-do-list',
    body: {
      date: '2022-02-16',
      work: 'I went to hospital',
    },
  });
  return {
    data,
  };
};

const get = async () => {
  const data = await elasticClient.search({
    index: 'game-of-thrones',
    body: {
      query: {
        match: { quote: 'Winter' },
      },
    },
  });
  return {
    data,
  };
};

module.exports = { post, get };
