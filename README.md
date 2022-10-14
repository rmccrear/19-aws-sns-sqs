# AWS SNS and SQS dispatch

This is a demo of how to use SNS and SQS to make a dispatch system. In our model we will have a set of vendors, a set of drivers, and a main dispatch. A vendor will send a message to the dispatch. The dispatch will send a message to one of the drivers. 

## AWS services


```mermaid
    graph TB
    SNSPub[sns-publisher.js]--payload starts here-->TOPIC
    TOPIC[Topic: alert]--through subscription-->SQSMQ
    TOPIC--trigger for lambda fn-->Lambda[Lambda Function]
    SQSProd[sqs-produer.js]--another source of messages-->SQSMQ[SQS Message Queue]
    SQSMQ--message is deleted on read-->SQSCon[sqs-consumer.js]

```


