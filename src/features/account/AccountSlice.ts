import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface AccountState {
  id: string
  password: string
  status: "idle" | "loading" | "failed"
}

const initialState: AccountState[] = [
  {
    id: "test1",
    password: "test1",
    status: "idle",
  },
  {
    id: "test2",
    password: "test2",
    status: "idle",
  },
]

export const AccountSlice = createSlice({
  name: "Account",
  initialState,
  reducers: {
    addAccount: (state, action: PayloadAction<AccountState>) => {
      state.push(action.payload)
    },
    removeAccount: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1)
    },
    updateAccount: (
      state,
      action: PayloadAction<{ index: number; updatedData: AccountState }>,
    ) => {
      state[action.payload.index] = action.payload.updatedData
    },
  },
})

export const { addAccount, removeAccount, updateAccount } = AccountSlice.actions
export const selectAccounts = (state: RootState) => state.account

export default AccountSlice.reducer
