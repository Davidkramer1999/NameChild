'use strict'
const AWS = require('aws-sdk')

module.exports.getChildName = async (event) => {
    const scanParams = {
        TableName: process.env.DYNAMODB_CUSTOMER_TABLE
    }

    const dynamodb = new AWS.DynamoDB.DocumentClient()
    const result = await dynamodb.scan(scanParams).promise()

    if (result.Count === 0) {
        return {
            statusCode: 404
        }
    }

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*", 
            "Access-Control-Allow-Credentials": true
          },
        body: JSON.stringify({
            total: result.Count,
            items: await result.Items.map(customer => {
                return {
                    nameChild: customer.nameChild,
                    userName: customer.userName
                }
            })
        })
    }
}