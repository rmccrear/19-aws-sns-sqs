import * as dotenv from 'dotenv' 
dotenv.config()

import { checkDeliveryStatus } from "./vendor-check-status.js";

checkDeliveryStatus(process.env.VENDOR_1_QUEUE_URL);