# guidelines for using this project

this project is the submodule of fullstackopen.

## general info

- project is created with [CRA](https://create-react-app.dev/).
- This project uses [redux-toolkit](https://redux-toolkit.js.org/) for state and
  [RTK query](https://redux-toolkit.js.org/rtk-query/overview) for fetching and caching data.
- [react router v6](https://reactrouter.com/docs/en/v6/getting-started/overview) is used for routing.
- [react hook forms](https://react-hook-form.com/) with [yup](https://www.npmjs.com/package/yup) are used for form validations

## tests

[RTL](https://testing-library.com/docs/react-testing-library/intro/) and [jest](https://jestjs.io/) are used for unit tests
[cypress](https://www.cypress.io/) is used for integration tests

- script to run unit tests `npm run test`
- script to run cypress tests with gui `npm run cypress:open`
- script to run cypress without gui `npm cypress:run`

## analytics - wip

- created analytics provider and custom hook which has [firebase](https://firebase.google.com/) custom events created for analytics.
- execute `start:analytics` script to enable firebase analytics events in the project

## Implement components

- [Chakra UI](https://chakra-ui.com/) is used to create and style react components
- [Storybook](https://storybook.js.org/) is used to implement components in isolation

## related to git

### [Husky](https://www.npmjs.com/package/husky)

- this project has `pre-commit` and `pre-push` hooks defined. `pre-commit` executes lint-staged. `pre-push` executes unit tests

### [commitizen](https://github.com/commitizen/cz-cli)

- used for commit message formatting. In husky there is `prepare-commit-msg` hook define to intercept
  git commit command. This is used to avoid using `npm` to create commit via `"commit": "git-cz"` script in package.json

# development

1. [install npm and node](https://nodejs.org/en/download/) -> `npm` is included in `node.js` installation
2. run `npm install`
3. run `npm start`

## project architecture

- Project relies on redux toolkit query pattern (https://redux-toolkit.js.org/rtk-query/overview)

### base/general modules and files

- ui - base ui components together with related storybook stories
- firebase - used for analytics events
- middlewares - common middlewares used for redux applications (could be related to any project)
- components - common components for application (navigation, not exists page .etc)
- requests - [REST client api](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) requests for testing purposes

- App.js - root component for application
- api.js - root [RTK query createApi](https://redux-toolkit.js.org/rtk-query/api/createApi) for the application. Exposed `api` object from this file is used in `blog`, `user` modules which uses [RTK query injectsEndpoints](https://redux-toolkit.js.org/rtk-query/usage/code-splitting) to inject endpoints into `api` root object.

### blogs app modules

Structured by `blog`, `comments`, `login`, `notification`, `user` modules.

Each module can have these directories and files inside

- **_components_** - react components with certain logic as part of them.
- **_services_** - if modules has services it means that it injects endpoints to root api object (`api.js` file).
- **_redux_** - everything related to redux and data layer. It can have [slices](https://redux-toolkit.js.org/api/createslice) for generating `actions` and `reducers`. Redux `middlewares` also should be defined inside this directory if module has any - for example `blogMiddleware` is in charge to update notification (it uses notification module actions) reducer/state when certain blogs action is triggered.
- **_hooks.js_** - react custom hooks related to certain module (for example `useLogin` in login module).
