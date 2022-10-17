import * as dotenv from 'dotenv' 
dotenv.config()
const TOPIC = process.env.TOPIC;
// Import required AWS SDK clients and commands for Node.js
import {PublishCommand } from "@aws-sdk/client-sns";
import {snsClient } from "./sns-client.js";

import { generateMessage } from "./message-generator.js";

const topic = TOPIC;
// Set the parameters
/*
var params = {
  Message: "Hello from publisher! " + Date.now(), // MESSAGE_TEXT
  TopicArn: topic, //TOPIC_ARN
  MessageGroupId: "MESG1"
};
*/

const generateParams=(message)=>{
  return {
    Message: message,
    TopicArn: topic,
    MessageGroupId: "MESG1"
  }
}

const run = async (vendorQueueARN) => {
  const message = generateMessage(vendorQueueARN);
  const params = generateParams(message);
  try {
    const data = await snsClient.send(new PublishCommand(params));
    console.log("Success.",  data);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err.stack);
  }
};
run("ARN-D123");

