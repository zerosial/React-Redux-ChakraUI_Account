import React, { useState } from "react"
import { useAppDispatch } from "../app/hooks"
import { addAccount } from "../features/account/AccountSlice"
import { Button, Container, Grid, Input } from "@chakra-ui/react"

const Join = () => {
  const dispatch = useAppDispatch()
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  const isValidInput = (value: string) => {
    if (value.trim().length <= 5) {
      alert("아이디와 비밀번호는 5글자 이상 입력하세요")
      return false
    }
    return true
  }

  const handleJoin = () => {
    if (isValidInput(id) && isValidInput(password)) {
      dispatch(addAccount({ id, password }))
      setId("")
      setPassword("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleJoin()
    }
  }

  return (
    <Container maxW={"50%"}>
      <Grid justifyItems="center" gap={4}>
        <form onKeyDown={handleKeyDown}>
          <Input
            aria-label="Set Id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            mb={4}
          />
          <Input
            type="password"
            aria-label="Set Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <Button onClick={handleJoin}>회원가입</Button>
      </Grid>
    </Container>
  )
}

export default Join
