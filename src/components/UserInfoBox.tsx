import { Box, Text } from "@chakra-ui/react"
import { AccountState } from "../features/account/AccountSlice"

interface UserInfoBoxProps {
  account: AccountState
  index: number
}

const UserInfoBox = ({ account, index }: UserInfoBoxProps) => {
  const { id, password, status } = account

  return (
    <Box
      key={index}
      bg="blue.300"
      w="50%"
      p={4}
      color="white"
      mb={4}
      borderRadius={4}
    >
      <Text>회원번호 {index + 1}번</Text>
      <Text>Id : {id}</Text>
      <Text>Password : {password}</Text>
      <Text>로그인 상태 : {status}</Text>
    </Box>
  )
}

export default UserInfoBox
