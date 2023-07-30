
import HomeStack from './screens/HomeStack'
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import  thunk  from 'redux-thunk';
import rootReducer from './stores/rootReducer'


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
) 


export default function App() {

  return (
    <>
       <Provider store={store}>
          <HomeStack></HomeStack>
        </Provider>
    </>
  );
}


