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
      const accountIndex = state.findIndex(
        (account) => account.id === action.payload.id,
      )

      if (accountIndex !== -1) {
        alert("이미 존재하는 Id 입니다.")
        return
      }

      alert("회원가입 성공")
      return [...state, { ...action.payload, status: "logout" }]
    },
    loginAccount: (state, action: PayloadAction<AccountState>) => {
      const { id, password } = action.payload

      const accountIndex = state.findIndex(
        (account) => account.id === id && account.password === password,
      )

      if (accountIndex !== -1) {
        state[accountIndex].status = "login"
        alert("로그인 성공")
      } else {
        alert("로그인 실패 Id와 Password를 확인해 주세요")
      }
    },

    logoutAccount: (state, action: PayloadAction<AccountState>) => {
      const { id, password } = action.payload

      const accountIndex = state.findIndex(
        (account) => account.id === id && account.password === password,
      )

      if (accountIndex !== -1) {
        state[accountIndex].status = "logout"
        alert("로그아웃 성공")
      } else {
        alert("로그아웃 실패 Id와 Password를 확인해 주세요")
      }
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

export const {
  addAccount,
  removeAccount,
  updateAccount,
  loginAccount,
  logoutAccount,
} = AccountSlice.actions
export const selectAccounts = (state: RootState) => state.account

export default AccountSlice.reducer
