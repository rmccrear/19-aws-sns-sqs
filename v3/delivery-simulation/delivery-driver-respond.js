import * as dotenv from 'dotenv' 
dotenv.config()

const QueueUrl = process.env.QUEUE_URL;

// Import required AWS SDK clients and commands for Node.js
import { ReceiveMessageCommand } from  "@aws-sdk/client-sqs";
import { sqsClient } from  "../sqs-client.js";

import respond from './delivery-driver-responder.js';

// Set the parameters
const params = {
  AttributeNames: ["SentTimestamp"],
  MaxNumberOfMessages: 1,
  MessageAttributeNames: ["All"],
  QueueUrl,
  WaitTimeSeconds: 20,
};

const run = async () => {
  try {
    let data = await sqsClient.send(new ReceiveMessageCommand(params));
    // data = JSON.parse(dataRaw)
    console.log("Success, ", data);
    const messages = data.Messages;
    if(messages){
        console.log(`You have ${messages.length} messages`)
        for(let message of messages) {
            console.log(message)
            try{
                message = JSON.parse(message.Body)
                console.log("JSON")
                console.log(message)
                respond(message)
            } catch(e){
                console.log("json error")
            }
        }
    } else {
        console.log("No messages.")
    }
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};
run();






