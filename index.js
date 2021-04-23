'use strict';

const uuid = require('uuid').v4;
const peopleModel = require('./schema.js');

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const { name, phone } = body //javascript way
    const id = uuid();

    const record = new peopleModel({ id, name, phone });
    const data = await record.save();

    return {
      statuscode: 201,
      body: JSON.stringify(data)
    }

  } catch (e) {
    return {
      statuscode: 500,
      body: e.message
    }

  }
  return {
    statuscode: 201,
    body: 'Saved New Individual to Database'
  }
};

