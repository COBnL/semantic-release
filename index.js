module.exports = {
  branch: 'master',
  verifyConditions: [
    '@semantic-release/git',
    '@semantic-release/gitlab'
  ],
  generateNotes: {
    config: '@cobnl/conventional-changelog'
  },
  analyzeCommits: {
    releaseRules: [
      {
        breaking: true,
        release: 'major'
      },
      {
        type: 'feat',
        release: 'minor'
      },
      {
        type: 'fix',
        release: 'patch'
      },
      {
        type: 'docs',
        release: 'patch'
      },
      {
        type: 'style',
        release: 'patch'
      },
      {
        type: 'refactor',
        release: 'patch'
      },
      {
        type: 'perf',
        release: 'patch'
      },
      {
        type: 'test',
        release: 'patch'
      },
      {
        type: 'chore',
        release: 'patch'
      }
    ]
  },
  publish: [
    {
      path: '@semantic-release/npm',
      npmPublish: false,
      tarballDir: 'artifacts'
    },
    {
      // eslint-disable-next-line no-template-curly-in-string
      message: 'chore: release ${nextRelease.version}',
      path: '@semantic-release/git'
    },
    '@semantic-release/gitlab'
  ],
  success: false,
  fail: false
};
