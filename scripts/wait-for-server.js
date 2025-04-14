#!/usr/bin/env node

const axios = require('axios');
const { setTimeout } = require('timers/promises');

const isRunningInCI = () => {
  const ciEnvVars = [
    'CI',                    // Generic CI
    'GITHUB_ACTIONS',        // GitHub Actions
    'GITLAB_CI',            // GitLab CI
    'CIRCLECI',             // Circle CI
    'JENKINS_URL',          // Jenkins
    'TRAVIS',               // Travis CI
    'TF_BUILD',             // Azure Pipelines
    'TEAMCITY_VERSION'      // TeamCity
  ];
  return ciEnvVars.some(varName => process.env[varName]);
};

const waitForServer = async (timeout = null, retryInterval = null) => {
  const isCI = isRunningInCI();
  timeout = timeout || (isCI ? 600 : 30);  // 10 minutes in CI, 30 seconds locally
  retryInterval = retryInterval || (isCI ? 10 : 1);  // 10 seconds in CI, 1 second locally
  
  const startTime = Date.now();
  const envType = isCI ? "CI" : "local";
  
  console.log(`Waiting for RxInferServer to become available (${envType} environment)...`);
  
  while (Date.now() - startTime < timeout * 1000) {
    try {
      const response = await axios.get('http://localhost:8000/v1/ping');
      if (response.data.status === 'ok') {
        console.log("RxInferServer is available!");
        return true;
      }
    } catch (error) {
      // Ignore errors and retry
    }
    
    console.log(`Server not available yet. Will retry in ${retryInterval} seconds...`);
    await setTimeout(retryInterval * 1000);
  }
  
  console.log(`Error: RxInferServer did not become available within ${timeout} seconds (${envType} environment)`);
  return false;
};

waitForServer()
  .then(success => process.exit(success ? 0 : 1))
  .catch(error => {
    console.error('Error:', error);
    process.exit(1);
  }); 