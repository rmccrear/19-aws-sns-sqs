import * as dotenv from 'dotenv' 
dotenv.config()

import { checkDeliveryStatus } from "./vendor-check-status";

checkDeliveryStatus(proccess.env.VENDOR_2_QUEUE_URL);