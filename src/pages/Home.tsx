import { Container, Grid, Heading, Text } from "@chakra-ui/react"
import { useAppSelector } from "../app/hooks"
import { selectAccount } from "../features/account/AccountSlice"

const Home = () => {
  const account = useAppSelector(selectAccount)
  return (
    <Container maxW={"100%"} p={"16px"}>
      <Heading mb={4}>Home</Heading>
      <Grid>
        <Text>현재 ID : {account.id}</Text>
        <Text>현재 Password : {account.password}</Text>
      </Grid>
    </Container>
  )
}

export default Home
