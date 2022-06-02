# guidelines for using this project

this project is the submodule of fullstackopen.

## general info

- project is created with [CRA](https://create-react-app.dev/).
- This project uses [redux-toolkit](https://redux-toolkit.js.org/) for state and
  [RTK](https://redux-toolkit.js.org/rtk-query/overview) for fetching and caching data.
- [react router v6](https://reactrouter.com/docs/en/v6/getting-started/overview) is used for routing.
- [react hook forms](https://react-hook-form.com/) with [yup](https://www.npmjs.com/package/yup) are used for form validations

## development

1. [install npm and node](https://nodejs.org/en/download/) -> `npm` is included in `node.js` installation
2. run `npm install`
3. run `npm start`

## tests

[RTL](https://testing-library.com/docs/react-testing-library/intro/) and [jest](https://jestjs.io/) are used for unit tests
[cypress](https://www.cypress.io/) is used for integration tests

- script to run unit tests `npm run test`
- script to run cypress tests with gui `npm run cypress:open`
- script to run cypress without gui `npm cypress:run`

## analytics - wip

- created analytics provider and custom hook which has [firebase](https://firebase.google.com/) custom events created for analytics

## Implement components

- [Chakra UI](https://chakra-ui.com/) is used to create and style react components
- [Storybook](https://storybook.js.org/) is used to implement components in isolation

## related to git

### [Husky](https://www.npmjs.com/package/husky)

- this project has `pre-commit` and `pre-push` hooks defined. `pre-commit` executes lint-staged. `pre-push` executes unit tests

### [commitizen](https://github.com/commitizen/cz-cli)

- used for commit message formatting. In husky there is `prepare-commit-msg` hook define to intercept
  git commit command. This is used to avoid using `npm` to create commit via `"commit": "git-cz"` script in package.json
