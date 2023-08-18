import { Container, Heading } from "@chakra-ui/react"
import { useAppSelector } from "../app/hooks"
import { AccountState, selectAccounts } from "../features/account/AccountSlice"
import UserInfoBox from "../components/UserInfoBox"

const Home = () => {
  const account: any = useAppSelector(selectAccounts)
  return (
    <Container maxW={"100%"} p={"16px"}>
      <Heading mb={4}>Home</Heading>
      {account.map((account: AccountState, index: number) => (
        <UserInfoBox account={account} index={index} />
      ))}
    </Container>
  )
}

export default Home
