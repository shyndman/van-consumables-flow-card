module.exports = {
  branches: ["main", { name: "dev", prerelease: true }],
  preset: "conventionalcommits",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@google/semantic-release-replace-plugin",
      {
        replacements: [
          {
            files: ["dist/van-consumables-flow-card.js"],
            from: /Van Consumables Flow Card v(\d+\.\d+\.\d+)/,
            to: "Van Consumables Flow Card v${nextRelease.version}",
            results: [
              {
                file: "dist/van-consumables-flow-card.js",
                hasChanged: true,
                numMatches: 2,
                numReplacements: 2,
              },
            ],
            countMatches: true,
          },
        ],
      },
    ],
    ["@semantic-release/npm", { npmPublish: false }],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "README.md", "package.json", "pnpm-lock.yaml"],
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: "dist/*.js",
      },
    ],
  ],
};
