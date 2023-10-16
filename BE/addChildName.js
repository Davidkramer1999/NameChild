"use strict";
const AWS = require("aws-sdk");
const uuid = require("uuid");

module.exports.addChildName = async (event) => {
  try {

    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing request body" }),
      };
    }

    const body = JSON.parse(event.body);

    if (!body.nameChild || !body.userName) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing fields in request body" }),
      };
    }

    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    const putParams = {
      TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
      Item: {
        id: uuid.v1(),
        primary_key: body.nameChild,
        nameChild: body.nameChild,
        userName: body.userName,
      },
    };

    await dynamoDb.put(putParams).promise();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type,X-PINGOTHER'
      },
      body: JSON.stringify({ message: "Name added" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
