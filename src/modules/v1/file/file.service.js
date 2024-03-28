const config = require('config');
const { Client } = require('@elastic/elasticsearch');

const elasticClient = new Client(config.ELASTIC);

const post = async (body) => {
  let data = await elasticClient.index({
    index: 'to-do-list',
    body,
  });
  return {
    data,
  };
};

const put = async ({ body, id }) => {
  let data = await elasticClient.update({
    index: 'to-do-list',
    id: id,
    body: {
      doc: body,
    },
  });
  return {
    data,
  };
};

const get = async (keyword) => {
  const data = await elasticClient.search({
    index: 'to-do-list',
    body: {
      query: {
        query_string: { query: `*${keyword}` },
      },
    },
  });
  return {
    data,
  };
};

const list = async () => {
  const data = await elasticClient.search({
    index: 'to-do-list',
    body: {
      query: {
        match: { status: false },
      },
    },
  });
  return {
    data,
  };
};

const completeList = async ({ user_id, page = 1, limit = 10 }) => {
  const data = await elasticClient.search({
    index: 'to-do-list',
    body: {
      query: {
        match: { user_id },
      },
      from: (page - 1) * limit,
      size: limit,
    },
  });
  return {
    data,
  };
};

module.exports = { post, get, list, put, completeList };
