import { Button, Container, Divider, Grid, Text } from "@chakra-ui/react"
import { useAppDispatch } from "../app/hooks"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginAccount } from "../features/account/AccountSlice"
import { isValidInput } from "../utils/validation"
import CustomForm from "../components/CustomForm"

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    if (isValidInput(id) && isValidInput(password)) {
      dispatch(loginAccount({ id, password }))
      setId("")
      setPassword("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin()
    }
  }

  return (
    <Container maxW={"50%"}>
      <Grid justifyItems="center">
        <Grid justifyItems="center" gap={4}>
          <CustomForm
            id={id}
            password={password}
            onIdChange={setId}
            onPasswordChange={setPassword}
            onKeyDown={handleKeyDown}
          />
          <Button onClick={handleLogin}>로그인</Button>
        </Grid>
        <Divider my={6} />
        <Text color="gray.300" mb={6}>
          혹시 회원가입이 아직이신가요?
        </Text>
        <Button w={80} onClick={() => navigate("/join")}>
          회원가입
        </Button>
      </Grid>
    </Container>
  )
}

export default Login
