import { useState } from "react"

import { useAppDispatch } from "../app/hooks"
import {
  initId,
  initPassword,
  setInputId,
  setInputPassword,
} from "../features/account/AccountSlice"
import styles from "../features/account/Account.module.css"
import { Container, Grid } from "@chakra-ui/react"

const Join = () => {
  const dispatch = useAppDispatch()
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  const idValue = String(id) || ""
  const passwordValue = String(password) || ""

  return (
    <Container maxW={"50%"}>
      <Grid justifyItems="center">
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
      </Grid>
    </Container>
  )
}

export default Join
