This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

note: "proxy": "http://localhost:8001" on package.json allows us to use our servier api with only /api/users/:id/messages ... 


### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Library that are used 

axios : for ajax request

jwt-decode : To decode token that is passed from server jwt

moment react-moment: For display of time line and dates

redux, react-redux, redux-thunk: For state management. Redux-thunk is for async request of the state

react-router-dom: routing


### Folder structure

Components: contains all react components which will not be conneted to redux state

Containers: contains all components which will be connected to redux state.

hocs: Higher order components, which will return component.

images: for all used images

services: for api logics, which we will use to communicate with server.

store: for all our redux store, actionCreators and reducers

store/ : inside store, we have our actions and reducers folder with actionsTypes.js and index.js where we will include our constants and other logics


### Code Splitting


### Analyzing the Bundle Size


### Making a Progressive Web App


### Deployment




