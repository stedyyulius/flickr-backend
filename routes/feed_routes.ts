import { Router } from 'express';

import { get_public_feed } from '../controller/feed_controller';

const device_meter = Router();

device_meter.get('/', get_public_feed);

export default device_meter;

