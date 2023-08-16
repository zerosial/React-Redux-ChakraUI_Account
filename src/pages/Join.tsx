import { useState } from "react"

import { useAppDispatch } from "../app/hooks"
import {
  addAccount,
  removeAccount,
  updateAccount,
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
      <Grid justifyItems="center"></Grid>
    </Container>
  )
}

export default Join
