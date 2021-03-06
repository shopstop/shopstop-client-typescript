const babelConfigForTooling = require('./babel.config').env.tooling;

require('@babel/register')({
    ...babelConfigForTooling,
    // We can't add `extentions` directly to the Babel config because it's no known property for
    // env specific configs and results in an "Unknown option" error.
    extensions: ['.js', '.ts'],
});

module.exports = require('./.eslintrc.ts').default;