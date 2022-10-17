const dotenv = require('dotenv');
dotenv.config();
const AWS = require('aws-sdk') // sdk 2.0
const region = "us-west-2"
const sns = new AWS.SNS({region})
const TOPIC = process.env.TOPIC;
async function publish() { 
    payload = {
        TopicArn: TOPIC,
        Message: "Hello from sns-publish",
        MessageGroupId: 'A'

    }
    try{
        const resp = await sns.publish(payload).promise()
        console.log(resp)
    } catch (err) {
        console.log(err)
    }
}
publish();