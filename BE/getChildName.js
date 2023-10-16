"use strict";
const AWS = require("aws-sdk");

module.exports.getChildName = async (event) => {
  const scanParams = {
    TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
  };

  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const result = await dynamodb.scan(scanParams).promise();

  let statusCode = 200
  if (!result) {
    statusCode = 404
    body = 'User not found!'
  }


  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      total: result.Count,
      items: await result.Items.map((el) => {
        return {
          nameChild: el.nameChild,
          userName: el.userName,
          id: el.id,
        };
      }),
    }),
  };
};
