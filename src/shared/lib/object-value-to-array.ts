import { TOption } from "../UI/SelectInput/TOptions"

export const onjectArrValueToArr = (arr: TOption[]) => {
  return arr.map((status) => status.value)
    .join(`,`)
    .split(`,`)
}