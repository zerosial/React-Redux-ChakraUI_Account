import { Flex, Button } from "@chakra-ui/react"
import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Flex gap={8} h={40}>
        <Link to={"/signin"}>
          <Button>로그인</Button>
        </Link>
        <Link to={"/signup"}>
          <Button>회원가입</Button>
        </Link>
        <Link to={"/loginDetail"}>
          <Button>로그인상태</Button>
        </Link>
      </Flex>
      <Outlet />
    </>
  )
}

export default Layout
