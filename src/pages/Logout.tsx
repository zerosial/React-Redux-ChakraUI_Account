import { Button, Container, Grid, Input, Text } from "@chakra-ui/react"
import { useAppDispatch } from "../app/hooks"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { logoutAccount } from "../features/account/AccountSlice"

const Logout = () => {
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

  const logoutEventHandler = () => {
    if (isValidId(idValue) && isValidPassword(passwordValue)) {
      dispatch(
        logoutAccount({
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
        <Text color="gray.500" mb={6}>
          적절한 아이디 패스워드를 넣으면 해당 계정을 로그아웃합니다
        </Text>
        <Text color="gray.300" mb={6}>
          리덕스 연습임으로 따로 로그인 정보를 보존하진 않습니다
        </Text>
        <Grid justifyItems="center" gap={4}>
          <form
            onKeyDown={(e) => {
              e.key === "Enter" && logoutEventHandler()
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
          <Button onClick={logoutEventHandler}>로그아웃</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Logout
