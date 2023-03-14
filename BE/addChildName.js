'use strict';
const AWS = require('aws-sdk');

module.exports.addChildName = async (event, context) => {
  const body = JSON.parse(event.body)
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const putParams = {
    TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
    Item: {
      primary_key: body.nameChild,
      nameChild: body.nameChild,
      userName:body.userName
    },
  };
  await dynamoDb.put(putParams).promise();
  
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({message: 'user created'})
  };
  };
