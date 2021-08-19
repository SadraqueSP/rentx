import express from 'express';
import { router } from './routes';
import SwaggerUi from 'swagger-ui-express'

import swaggerFile from './swagger.json'

import './database'

const app = express();

app.use(express.json());

app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerFile))

app.use(router)


const port = 3333;
app.listen(port, () => console.log(`🚀 Server is runing on port ${port}`));
