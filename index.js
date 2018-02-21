const releaseRules = require('./releaseRules');

module.exports = {
  branch: 'master',
  generateNotes: {
    config: '@cobnl/conventional-changelog'
  },
  analyzeCommits: {
    releaseRules
  },
  verifyConditions: [
    '@semantic-release/git',
    '@semantic-release/gitlab'
  ],
  prepare: [
    {
      path: '@semantic-release/npm',
      npmPublish: false,
      tarballDir: 'artifacts'
    },
    {
      // eslint-disable-next-line no-template-curly-in-string
      message: 'chore: release ${nextRelease.version}',
      path: '@semantic-release/git'
    }
  ],
  publish: [
    '@semantic-release/gitlab'
  ],
  success: false,
  fail: false
};
