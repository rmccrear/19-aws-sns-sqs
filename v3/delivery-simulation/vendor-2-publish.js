import * as dotenv from 'dotenv' 
dotenv.config()
const vendorQueueARN = process.env.VENDOR_2_QUEUE_ARN;

import publish from "./vendor-publish";

publish(vendorQueueARN)
