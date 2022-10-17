import * as dotenv from 'dotenv' 
dotenv.config()



// Import required AWS SDK clients and commands for Node.js
import { ReceiveMessageCommand } from  "@aws-sdk/client-sqs";
import { sqsClient } from  "../sqs-client.js";


const checkDeliveryStatus = async (QueueUrl) => {
  // Set the parameters
  const params = {
    AttributeNames: ["SentTimestamp"],
    MaxNumberOfMessages: 1,
    MessageAttributeNames: ["All"],
    QueueUrl,
    WaitTimeSeconds: 20,
  };
  try {
    let data = await sqsClient.send(new ReceiveMessageCommand(params));
    // data = JSON.parse(dataRaw)
    console.log("Success, ", data);
    const messages = data.Messages;
    if(messages)
        console.log(`You have ${messages.length} status updates`)
    for(let message of messages) {
        console.log(message)
        try{
            message = JSON.parse(message.Body)
            console.log(`Order ${message.orderId} has been delivered to ${message.customer}.`)
        } catch(e){
            console.log("json error")
        }
    }
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};

export { checkDeliveryStatus };






