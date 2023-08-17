import { useState } from "react"
import { useAppDispatch } from "../app/hooks"
import { addAccount } from "../features/account/AccountSlice"
import { Button, Container, Grid } from "@chakra-ui/react"
import { isValidInput } from "../utils/validation"
import CustomForm from "components/CustomForm"

const Join = () => {
  const dispatch = useAppDispatch()
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

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
          <CustomForm
            id={id}
            password={password}
            onIdChange={setId}
            onPasswordChange={setPassword}
            onKeyDown={handleKeyDown}
          />
        </form>
        <Button onClick={handleJoin}>회원가입</Button>
      </Grid>
    </Container>
  )
}

export default Join
