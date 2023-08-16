import { Box, Container, Heading, Text } from "@chakra-ui/react"
import { useAppSelector } from "../app/hooks"
import { AccountState, selectAccounts } from "../features/account/AccountSlice"

const Home = () => {
  const account: any = useAppSelector(selectAccounts)
  return (
    <Container maxW={"100%"} p={"16px"}>
      <Heading mb={4}>Home</Heading>
      {account.map((user: AccountState, index: number) => (
        <Box bg="blue.300" w="50%" p={4} color="white" mb={4} borderRadius={4}>
          <Text>회원번호 {index + 1}번</Text>
          <Text>{user.id}</Text>
          <Text>{user.password}</Text>
        </Box>
      ))}
    </Container>
  )
}

export default Home
