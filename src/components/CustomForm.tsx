import { Input } from "@chakra-ui/react"

interface CustomFormProps {
  id: string
  password: string
  onIdChange: (value: string) => void
  onPasswordChange: (value: string) => void
  onKeyDown: (event: React.KeyboardEvent) => void
}

const CustomForm = ({
  id,
  password,
  onIdChange,
  onPasswordChange,
  onKeyDown,
}: CustomFormProps) => {
  return (
    <form onKeyDown={onKeyDown}>
      <Input
        aria-label="Set Id"
        value={id}
        onChange={(e) => onIdChange(e.target.value)}
        mb={4}
      />
      <Input
        type="password"
        aria-label="Set Password"
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
      />
    </form>
  )
}

export default CustomForm
