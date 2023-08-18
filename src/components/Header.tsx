import { Flex, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <Flex gap={8} h={40}>
        <Link to={"/"}>
          <Button>홈</Button>
        </Link>
        <Link to={"/join"}>
          <Button>회원가입</Button>
        </Link>
        <Link to={"/login"}>
          <Button>로그인</Button>
        </Link>
        <Link to={"/logout"}>
          <Button>로그아웃</Button>
        </Link>
      </Flex>
    </>
  )
}

export default Header
