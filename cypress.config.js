
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    testIsolation: false,
    experimentalRunAllSpecs: true,
    viewportHeight: 1400,
    viewportWidth: 1600,
  },
});

