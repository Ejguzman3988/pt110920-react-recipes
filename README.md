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

