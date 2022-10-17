import * as dotenv from 'dotenv' 
dotenv.config()
const TOPIC = process.env.TOPIC;
// Import required AWS SDK clients and commands for Node.js
import {PublishCommand } from "@aws-sdk/client-sns";
import {snsClient } from "../sns-client.js";


const topic = TOPIC;

const generateParams=(Message, TopicArn)=>{
  console.log("generatedMessage:")
  console.log(Message)
  return {
    Message,
    TopicArn,
    MessageGroupId: "MESG1"
  }
}

const respond = async (incomingMessage) => {
  const {vendorId, customer, orderId} = incomingMessage;
  const response = {
    deliveryStatus: "Delivered",
    customer,
    orderId
  }
  // Set the TopicArn to the vendorId
  const params = generateParams(JSON.stringify(response), vendorId);
  console.log(`Sending response to: ${vendorId}`);
  //console.log(`Sending response to: ${process.env.VENDOR_1_QUEUE_URL}`);
  // const params = generateParams(JSON.stringify(response), process.env.VENDOR_1_QUEUE_URL);
  try {
    const data = await snsClient.send(new PublishCommand(params));
    console.log("Success.",  data);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err.stack);
  }
};

export default respond
