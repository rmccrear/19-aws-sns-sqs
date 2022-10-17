import  { SNSClient } from "@aws-sdk/client-sns";
// Set the AWS Region.
const REGION = "us-west-2"; 
// Create SNS service object.
const snsClient = new SNSClient({ region: REGION });
export  { snsClient };

