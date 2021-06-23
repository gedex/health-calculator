## Contributing to health-calculator

Hi! Thank you for your interest in contributing to health-calculator, we really
appreciate it.

There are many ways to contribute – reporting bugs, feature suggestions, fixing
bugs, submitting pull requests for enhancements.

## Reporting Bugs, Asking Questions, Sending Suggestions

Just file a GitHub issue, that’s all. If you want to prefix the title with a
“Question:”, “Bug:”, or the general area of the application, that would be helpful,
but by no means mandatory. If you have write access, add the appropriate labels.

If you’re filing a bug, specific steps to reproduce are helpful. Please include
the what you expected to see and what happened instead.

## Development Workflow

### Tests

To run the test:

```
$ npm test
```

If files in `src` is updated, make sure the test still passed.

See existing tests in `test` as an example a test should be written.

### Publishing to NPM

Make sure to bump the version in `main` branch, for example to bump minor version:

```
$ git checkout main
$ npm version minor
```

This will run build, creates the git tag, and push it to remote origin.

To publish to NPM, run:

```
$ npm publish
```
