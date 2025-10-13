export type TMessageItem = {
  messageType: `TEXT` | `BINARY`
  messageCategory: `urgent` | `normal` | `low`
  status: 'создано' | 'принимается' | 'принято' | 'обработано' | 'отправляется' | 'отправлено' | 'доставлено' | 'прочитано' | 'отменено_источником' | 'ошибка_принятия' |
  'ошибка_обработки' | 'ошибка_отправки' | 'ошибка_доставки' | 'ошибка_прочтения'
  subject: string
  senderName: string
}