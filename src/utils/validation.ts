export const isValidInput = (value: string) => {
  if (value.trim().length <= 4) {
    alert("5글자 이상 입력하세요")
    return false
  }
  return true
}
