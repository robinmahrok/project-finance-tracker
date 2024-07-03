import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import {BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom"
import HomeContainer from './components/Home/HomeContainer';
function App() {
  return (
    <div className="App">
       <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route element={<HomeContainer/>} path='/' exact={true}></Route>
          </Switch>
        </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
