import { Button, Container, Divider, Grid, Input, Text } from "@chakra-ui/react"
import { useAppDispatch } from "../app/hooks"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginAccount } from "../features/account/AccountSlice"

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  const idValue = String(id) || ""
  const passwordValue = String(password) || ""

  const isValidId = (idValue: string) => {
    if (idValue.length < 5) {
      alert("id는 5글자 이상 넣어주세요")
      return false
    }
    return true
  }

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
        loginAccount({
          id: idValue,
          password: passwordValue,
        }),
      )
      setId("")
      setPassword("")
    }
  }

  return (
    <Container maxW={"50%"}>
      <Grid justifyItems="center">
        <Grid justifyItems="center" gap={4}>
          <form
            onKeyDown={(e) => {
              e.key === "Enter" && loginEventHandler()
            }}
          >
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
          <Button onClick={loginEventHandler}>로그인</Button>
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
