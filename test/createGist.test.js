const { expect } = require('chai');
const { createGist } = require('../src/gistService');

// Function to introduce a delay using Promises
async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
describe('Create Gist', function() { 
  this.timeout(15000);
  it('should create a new Gist successfully', async function  () {
    const gistData = {
      description: 'Test Gist',
      files: {
        'testFile.txt': {
          content: 'This is a test Gist file.',
        },
      },
    };
    await delay(10000)
    const response = await createGist(gistData);
     // Log the response details
     console.log('Response Status:', response.status);
     console.log('Response Data:', response.data);
    expect(response.status).to.equal(201);
    expect(response.data.description).to.equal('Test Gist');
    console.log('Gist created successfully!');
  });
});
