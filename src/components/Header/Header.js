
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { setUpdatedScreenState } from "../../store/slice/screenStateSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { screenStates } from "../../constants/screenState";

function Header(props) {
  const updatedScreenState = useSelector((state) => state?.screenStateSlice);
  const { screenState } = updatedScreenState;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!screenState?.screen) {
      updateScreenState(screenStates.HOME)
      window.location.assign('/')
    }
  }, [])

  const updateScreenState = (screen) => {
    dispatch(setUpdatedScreenState({ screen: screen }));
  }



  return (<>
    <header className="header">
      <h1>{"Finance Tracker"}</h1>
      <nav>
        <ul className="nav-links">
          <li onClick={() => updateScreenState(screenStates.HOME)} className={screenState?.screen === screenStates.HOME ? 'active' : ''}><NavLink to="/">Home</NavLink></li>
          <li onClick={() => updateScreenState(screenStates.ADD_TRANSACTION)} className={screenState?.screen === screenStates.ADD_TRANSACTION ? 'active' : ''}><NavLink to="/addTransaction">Add Transaction</NavLink></li>
          <li onClick={() => updateScreenState(screenStates.CATEGORY_BREAKDOWN)} className={screenState?.screen === screenStates.CATEGORY_BREAKDOWN ? 'active' : ''}><NavLink to="/categoryBreakdown">Category Breakdown</NavLink></li>
          <li onClick={() => updateScreenState(screenStates.SUMMARY)} className={screenState?.screen === screenStates.SUMMARY ? 'active' : ''}><NavLink to="/summary">Summary</NavLink></li>
          <li onClick={() => updateScreenState(screenStates.TRANSACTION_LIST)} className={screenState?.screen === screenStates.TRANSACTION_LIST ? 'active' : ''}><NavLink to="/transactionList">Transaction List</NavLink></li>
        </ul>
      </nav>
    </header>

  </>)
}

export default Header;
