//const express = require("express");
//const app = express();
const swaggerAutogen = require("swagger-autogen")();
//const swaggerUi = require("swagger-ui-express");
//const swaggerDocument = require('./swagger.json');
//router.use("/api-docs", swaggerUi.serve);
//router.get("/api-docs", swaggerUi.setup(swaggerDocument));

const doc = {
    openapi: "5.0.1",
  info: {
    title: "My API",
    description: "Temple API",
  },
  host: "localhost:8080", 
  schemes: ["http"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"]; 

swaggerAutogen(outputFile, endpointsFiles, doc);


