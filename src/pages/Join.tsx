import { useState } from "react"

import { useAppSelector, useAppDispatch } from "../app/hooks"
import {
  initId,
  initPassword,
  setInputId,
  selectAccount,
  setInputPassword,
} from "../features/account/AccountSlice"
import styles from "../features/account/Account.module.css"

const Join = () => {
  const account = useAppSelector(selectAccount)
  const dispatch = useAppDispatch()
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  const idValue = String(id) || ""
  const passwordValue = String(password) || ""

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>id : {account.id}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.value}>password : {account.password}</span>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set Id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(setInputId(idValue))}
        >
          set Input Account
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(setInputPassword(passwordValue))}
        >
          set Input Password
        </button>
      </div>
      <button className={styles.button} onClick={() => dispatch(initId())}>
        set id Template
      </button>
      <button
        className={styles.button}
        onClick={() => dispatch(initPassword())}
      >
        set Password Template
      </button>
    </div>
  )
}

export default Join
