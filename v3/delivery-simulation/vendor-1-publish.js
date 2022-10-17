import * as dotenv from 'dotenv' 
dotenv.config()
const vendorQueueARN = process.env.VENDOR_1_QUEUE_ARN;

import publish from "./vendor-publish.js";

publish(vendorQueueARN)
