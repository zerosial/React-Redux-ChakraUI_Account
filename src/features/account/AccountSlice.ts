import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface AccountState {
  id: string
  password: string
  status?: "login" | "logout"
}

const initialState: AccountState[] = [
  {
    id: "test1",
    password: "test1",
    status: "logout",
  },
  {
    id: "test2",
    password: "test2",
    status: "logout",
  },
]

export const AccountSlice = createSlice({
  name: "Account",
  initialState,
  reducers: {
    addAccount: (state, action: PayloadAction<AccountState>) => {
      return [...state, { ...action.payload, status: "logout" }]
    },
    removeAccount: (state, action: PayloadAction<number>) => {
      return state.filter((_, index) => index !== action.payload)
    },
    updateAccount: (
      state,
      action: PayloadAction<{ index: number; updatedData: AccountState }>,
    ) => {
      return state.map((account, index) =>
        index === action.payload.index ? action.payload.updatedData : account,
      )
    },
  },
})

export const { addAccount, removeAccount, updateAccount } = AccountSlice.actions
export const selectAccounts = (state: RootState) => state.account

export default AccountSlice.reducer
