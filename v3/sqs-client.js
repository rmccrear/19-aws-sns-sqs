import  { SQSClient } from "@aws-sdk/client-sqs";
// Set the AWS Region.
const REGION = "us-west-2"; 
// Create SQS service object.
const sqsClient = new SQSClient({ region: REGION });
export  { sqsClient };
