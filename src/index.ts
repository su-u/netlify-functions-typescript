import { APIGatewayProxyHandler } from 'aws-lambda'

export const handler: APIGatewayProxyHandler = async (event, context, callback) => {
  // 処理を場合ここに
  return {
    statusCode: 200,
    body: 'hello, world',
  }
};