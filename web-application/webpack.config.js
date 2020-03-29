// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// This helper function is not strictly necessary.
// I just don't like repeating the path.join a dozen times.
function srcPath(subdir) {
  return path.join(__dirname, 'src', subdir);
}
module.exports = {
  resolve: {
    alias: {
      assets: srcPath('src/assets'),
      components: srcPath('src/components'),
      constants: srcPath('src/constants'),
      pages: srcPath('src/pages'),
      services: srcPath('src/services'),
      utils: srcPath('src/utils'),
    },
    // ...
  },
  // ...
};
