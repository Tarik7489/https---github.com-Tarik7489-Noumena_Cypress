const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");




module.exports = defineConfig({

  "numTestsKeptInMemory": 1,
  "experimentalMemoryManagement": true,
  
  projectId: "1du453",
  chromeWebSecurity: false,

  defaultCommandTimeout: 25000,

  taskTimeout: 80000,

  pageLoadTimeout: 150000,

  viewportWidth: 1920,
  viewportHeight: 1080,




  env: {

    envurl: 'QA',
    QA: 'https://noumena-web-staging.web.app/login',
    DEV: 'https://noumena-web.web.app/',

    db: {

      authentication: {

        type: 'default',

        options: {

          userName: 'sa',

          password: 'sqladmin@123'

        }

      },

      server: '172.16.0.56',

      options: {

        database: '',

        encrypt: true,

        rowCollectionOnRequestCompletion: true,

        trustServerCertificate: true,

        port: 1433, // Default Port

      }

    }




  },


  e2e: {


    setupNodeEvents(on, config) {

      allureWriter(on, config);
      return config;


    },

    specPattern: 'cypress/e2e/*.js',
    retries: 1




  },

});