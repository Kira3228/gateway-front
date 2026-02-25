import { TOption } from "../UI/SelectInput/TOptions"

export const objectArrValueToArr = (arr: TOption[]) => {
  return arr.map((status) => status.value)
    .join(`,`)
    .split(`,`)
}