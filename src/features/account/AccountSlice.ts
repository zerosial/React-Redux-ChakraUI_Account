import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface AccountState {
  id: string
  password: string
  status: "idle" | "loading" | "failed"
}

const initialState: AccountState = {
  id: "",
  password: "",
  status: "idle",
}

export const AccountSlice = createSlice({
  name: "Account",
  initialState,
  reducers: {
    initId: (state) => {
      state.id = "test"
    },
    initPassword: (state) => {
      state.password = "test2"
    },
    setInputId: (state, action: PayloadAction<string>) => {
      state.id = action.payload
    },
    setInputPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
})

export const { initId, initPassword, setInputId, setInputPassword } =
  AccountSlice.actions
export const selectAccount = (state: RootState) => state.account

export default AccountSlice.reducer
