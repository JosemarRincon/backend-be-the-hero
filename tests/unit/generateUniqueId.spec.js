const generateUniqueId = require('../../src/utils/generateUniqueId');
describe('Generate Unique Id', ()=> {
  it('should generate an unique Id', () => {
    // expera que (expressao) seja (resultado)
    // npm test executa
    const id = generateUniqueId();
    expect(id).toHaveLength(8);
  });
});