const { expect } = require('chai');
const { createGist, deleteGist, getGist } = require('../src/gistService');

describe('Delete Gist', () => {
  it('should delete an existing Gist successfully', async () => {
    // Create a Gist to delete
    const createResponse = await createGist({
      description: 'Test Gist',
      files: {
        'testFile.txt': {
          content: 'This is a test Gist file.',
        },
      },
    });
    const gistId = createResponse.data.id;
    console.log('Gist created with ID:', gistId);
    // Delete the Gist
    const deleteResponse = await deleteGist(gistId);
    // Log the response details
    console.log('Delete Response Status:', deleteResponse.status);
    expect(deleteResponse.status).to.equal(204); // Validate the response
    // Verify the Gist is deleted
    try {
      await getGist(gistId);
    } catch (error) {
      expect(error.response.status).to.equal(404);
    }
  });
});
