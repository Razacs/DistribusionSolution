const { expect } = require('chai');
const { createGist, editGist } = require('../src/gistService');

describe('Edit Gist', () => {
  it('should edit an existing Gist successfully', async () => {
    // Create a Gist to edit
    const createResponse = await createGist({
      description: 'Test Gist for Editing',
      files: {
        'testFile.txt': {
          content: 'This is a test Gist file.',
        },
      },
    });
    const gistId = createResponse.data.id;
    console.log('Gist created with ID:', gistId);
    // Edit the Gist
    const editData = {
      description: 'Edited Test Gist',
      files: {
        'editedFile.txt': {
          content: 'This is the edited content.',
        },
      },
    };
    const editResponse = await editGist(gistId, editData);
    expect(editResponse.status).to.equal(200);
    expect(editResponse.data.description).to.equal('Edited Test Gist');
    expect(editResponse.data.files['editedFile.txt'].content).to.equal('This is the edited content.');
  });
});
