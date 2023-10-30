const { expect } = require('chai');
const { createGist, getGist } = require('../src/gistService');

describe('Get Gist', () => {
  it('should retrieve an existing Gist successfully', async () => {
    // Create a Gist to retrieve
    const createResponse = await createGist({
      description: 'Test Gist for Retrievel',
      files: {
        'testFile.txt': {
          content: 'This is a test Gist file.',
        },
      },
    });
    const gistId = createResponse.data.id;
    console.log('Gist created with ID:', gistId);
    // Retrieve the Gist
    const retrieveResponse = await getGist(gistId);
     // Log the response details
     console.log('Retrieve Response Status:', retrieveResponse.status);
     console.log('Retrieved Gist Data:', retrieveResponse.data);
    expect(retrieveResponse.status).to.equal(200); // Validate the response
    expect(retrieveResponse.data.description).to.equal('Test Gist for Retrievel');
  });
});
