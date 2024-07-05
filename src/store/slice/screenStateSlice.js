import { createSlice } from '@reduxjs/toolkit'

export const screenState = createSlice({
  name: 'screenState',
  initialState: {
    screenState: {}
  },
  reducers: {
    setUpdatedScreenState: (state, action) => {
        state.screenState = { ...state?.screenState, ...action?.payload };
      },
      resetScreenState: () => {{}}
  }
})

export const { setUpdatedScreenState, resetScreenState } = screenState.actions

export default screenState.reducer