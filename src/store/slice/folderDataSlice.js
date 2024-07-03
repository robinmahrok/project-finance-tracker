import { createSlice } from '@reduxjs/toolkit'

export const folderData = createSlice({
  name: 'folderData',
  initialState: {
    folderData: {}
  },
  reducers: {
    setUpdatedFolderData: (state, action) => {
        state.folderData = { ...state?.folderData, ...action?.payload };
      },
      resetFolderData: () => {{}}
  }
})

export const { setUpdatedFolderData, resetFolderData } = folderData.actions

export default folderData.reducer