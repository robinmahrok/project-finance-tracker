import "./App.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import { Route, Routes, HashRouter } from "react-router-dom";
import AddTransaction from "./components/AddTransaction";
import CategoryBreakdown from "./components/CategoryBreakdown";
import Summary from "./components/Summary";
import TransactionList from "./components/TransactionList";
import Home from "./components/Home";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HashRouter>
            <Header />
            <div className="content">
              <Routes>
                <Route element={<Home />} path="/" exact={true}></Route>
                <Route
                  element={<AddTransaction />}
                  path="/addTransaction"
                  exact={true}
                ></Route>
                <Route
                  element={<CategoryBreakdown />}
                  path="/categoryBreakdown"
                  exact={true}
                ></Route>
                <Route
                  element={<Summary />}
                  path="/summary"
                  exact={true}
                ></Route>
                <Route
                  element={<TransactionList />}
                  path="/transactionList"
                  exact={true}
                ></Route>
              </Routes>
            </div>
          </HashRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
