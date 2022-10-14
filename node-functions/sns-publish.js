const AWS = require('aws-sdk') // sdk 2.0
const region = "us-west-2"
const sns = new AWS.SNS({region})

async function publish() { 
    const topic = "arn:aws:sns:us-west-2:525892607081:code-fell-alert"
    payload = {
        TopicArn: topic,
        Message: "Hello from sns-publish"
    }
    try{
        const resp = await sns.publish(payload).promise()
        console.log(resp)
    } catch (err) {
        console.log(err)
    }
}
publish();