import { Button, Container, Grid, Input, Text } from "@chakra-ui/react"
import { useAppDispatch } from "../app/hooks"
import { useState } from "react"
import { logoutAccount } from "../features/account/AccountSlice"
import { isValidInput } from "../utils/validation"

const Logout = () => {
  const dispatch = useAppDispatch()
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  const handleLogout = () => {
    if (isValidInput(id) && isValidInput(password)) {
      dispatch(logoutAccount({ id, password }))
      setId("")
      setPassword("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogout()
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
          <Button onClick={handleLogout}>로그아웃</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Logout
