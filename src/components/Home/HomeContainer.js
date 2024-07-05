
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUpdatedFolderData } from "../../store/slice/folderDataSlice";
import HomeUI from "./HomeUI";
import getExpenseList from '../../core/services/getExpenseList';
import { PushSpinner } from "react-spinners-kit";
function HomeContainer(props) {

  const [showSpinner, setShowSpinner] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setShowSpinner(true)
    getExpenseList().then((response) => {
      setShowSpinner(false);
      if (response) {
        dispatch(setUpdatedFolderData({ ...response }));
      } else {
        alert("some error occured");
      }
    })
  }, [])


  const actionHandler = () => {

  }

  return <>
    {showSpinner ? <div className="spinner">
      <PushSpinner size={30} color="#007bff"
        loading={showSpinner} />
    </div> :
      <HomeUI actionHandler={actionHandler} />}
  </>;
}

export default HomeContainer;
