import { useState } from "react"

import { useAppDispatch } from "../app/hooks"
import { addAccount } from "../features/account/AccountSlice"
import { Button, Container, Grid, Input } from "@chakra-ui/react"

const Join = () => {
  const dispatch = useAppDispatch()
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  const idValue = String(id) || ""
  const passwordValue = String(password) || ""

  // alert Redux로 관리
  const isValidId = (idValue: string) => {
    if (idValue.length < 5) {
      alert("id는 5글자 이상 넣어주세요")
      return false
    }
    return true
  }

  // alert Redux로 관리
  const isValidPassword = (passwordValue: string) => {
    if (passwordValue.length < 5) {
      alert("password는 5글자 이상 넣어주세요")
      return false
    }
    return true
  }

  const loginEventHandler = () => {
    if (isValidId(idValue) && isValidPassword(passwordValue)) {
      dispatch(
        addAccount({
          id: idValue,
          password: passwordValue,
        }),
      )
    }
  }

  return (
    <Container maxW={"50%"}>
      <Grid justifyItems="center" gap={4}>
        <Input
          aria-label="Set Id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Input
          aria-label="Set Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={loginEventHandler}>add account</Button>
      </Grid>
    </Container>
  )
}

export default Join
