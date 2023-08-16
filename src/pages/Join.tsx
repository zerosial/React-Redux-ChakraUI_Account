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

  return (
    <Container maxW={"50%"}>
      <Grid justifyItems="center">
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
        <Button
          onClick={() =>
            dispatch(addAccount({ id: idValue, password: passwordValue }))
          }
        >
          add account
        </Button>
      </Grid>
    </Container>
  )
}

export default Join
