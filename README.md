# Async Redux
Making an asynchronous request with redux. We will connect a backend with our current project and learn how we can use fetch to pass data to our backend.

---
## Deliverables
---
1. I set up Routing.
1. Review what we did last time.
1. Fix our Add to Saved.
1. Create our rails backend
    1. Whitelist our server
    1. Seed Some data
1. Try to fetch in redux
    1. see what happens when we try to fetch using our dispatch
1. Apply middleware
    1. Take a look at thunk, and see how it affects our action
    1. make a get request to our backend using fetch
        1. get all recipes
    1. make a post request to our backend using fetch
        1. add a recipe
1. Create a loading screen


# React-Redux

- What is Redux and why we use it?
  - [Why We Use Redux](https://dev.to/michielmulders/why-use-redux-reasons-with-clear-examples-1108)
- Context
  - [Context docs](https://reactjs.org/docs/context.html)
- Take our original application and set it up with redux
  - [Create Store Doc](https://redux.js.org/api/createstore)
- React Devtools 
  - [Github For react devtools](https://github.com/zalmoxisus/redux-devtools-extension) 


Vocab List:
- Store: manage our state.
- Provider: Provides our store to the app! 
- Connect: connects the store to our components
- mapStateToProps: a function has argument of the state from the store, and returns our new props. 

### Deliverables

- Review: 
  State management system 
  - created our store using createStore from redux
  - Provided our store to all components
  - Used connect to actually access our store
  - mapStateToProps to get recipes inside recipescontainer
- Today: 
  - mapDispatchToProps - second argument to connect its how dispatch in components
  - Dispatch - how we pass an action to our reducer
  - action - js obj with a type and a payload
  - reducers - returns the new state, and the state can get modified by actions 
  - rootReducer - combines reducers

