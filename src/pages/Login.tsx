import { Button, Container, Divider, Grid, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()

  return (
    <Container maxW={"50%"}>
      <Grid justifyItems="center">
        <Divider mb={6} />
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
