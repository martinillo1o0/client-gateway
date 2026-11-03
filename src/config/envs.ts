
import 'dotenv/config';
import joi, { number, string } from 'joi';

interface EnvVars {
    PORT: number;
    PRODUCTS_MICROSERVICE_HOST: string;
    PRODUCTS_MICROSERVICE_PORT: number;

    ORDERS_MICROSERVICE_HOST: string;
    ORDERS_MICROSERVICE_PORT: number;


}
const envsShema = joi.object<EnvVars>({

    PORT: joi.number().integer().min(1).max(65535).required(),
    PRODUCTS_MICROSERVICE_HOST: joi.string().required(),
    PRODUCTS_MICROSERVICE_PORT: joi.number().integer().min(1).max(65535).required(),



    ORDERS_MICROSERVICE_HOST: joi.string().required(),
    ORDERS_MICROSERVICE_PORT: joi.number().integer().min(1).max(65535).required(),

    

})
    .unknown(true);

const result = envsShema.validate(process.env, { abortEarly: false });

if (result.error) {
    throw new Error(`Config validation: ${result.error.message}`);

}
const envVars = result.value;

export const envs = {
    port: envVars.PORT,
    productsMicroserviceHost: envVars.PRODUCTS_MICROSERVICE_HOST,
    productsMicroservicePort: envVars.PRODUCTS_MICROSERVICE_PORT,

    ordersMicroserviceHost: envVars.ORDERS_MICROSERVICE_HOST,
    ordersMicroservicePort: envVars.ORDERS_MICROSERVICE_PORT,
} as const;
//Schema devuelve el valor o el error
