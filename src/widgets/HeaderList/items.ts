import { Header } from "@/shared-ui/src/components/DataTable";

export const items: Header[] = [
  {
    value: "msg.id",
    align: "center",
    isVisible: true,
    sortable: false,
    text: `Id`,
    width: 100
  },
  {
    value: "msg.messageId",
    align: "center",
    isVisible: true,
    sortable: true,
    text: `Id Сообщения`,
    width: 100
  },
  {
    value: "msg.messageType",
    align: "center",
    isVisible: true,
    sortable: true,
    text: `Тип сообщения`,
    width: 100
  },
  {
    value: "msg.messageCategory",
    align: "center",
    isVisible: true,
    sortable: true,
    text: `Категория сообщения`,
    width: 100
  },
  {
    value: "msg.status",
    align: "center",
    isVisible: true,
    sortable: true,
    text: `Статус`,
    width: 100
  },
  {
    value: "msg.priority",
    align: "center",
    isVisible: true,
    sortable: true,
    text: `Приоритет`,
    width: 100
  },
  {
    value: "msg.metadataParsed",
    align: "center",
    isVisible: true,
    sortable: true,
    text: `Метаданные`,
    width: 100
  },
  {
    value: "msg.subject",
    align: "center",
    isVisible: true,
    sortable: true,
    text: `Субъект`,
    width: 100
  },
  {
    value: "msg.securityLabel",
    align: "center",
    isVisible: true,
    sortable: true,
    text: `Метка безопасности`,
    width: 100
  },
  {
    value: "msg.messageNumber",
    align: "center",
    isVisible: true,
    sortable: true,
    text: `Номер сообщения`,
    width: 100
  },
  {
    value: "msg.messageCopies",
    align: "center",
    isVisible: true,
    sortable: true,
    text: `Копии сообщения`,
    width: 100
  },
  {
    value: "msg.numberCopy",
    align: "center",
    isVisible: true,
    sortable: true,
    text: `Число копирований`,
    width: 100
  },
  {
    value: "msg.senderName",
    align: "center",
    isVisible: true,
    sortable: true,
    text: `Имя отправителья`,
    width: 100
  },
  {
    value: "msg.createdAt",
    align: "center",
    isVisible: true,
    sortable: true,
    text: `Создано`,
    width: 100
  },
  {
    value: "msg.updatedAt",
    align: "center",
    isVisible: true,
    sortable: true,
    text: `Обновлено`,
    width: 100
  },
  {
    value: "msg.userFromId",
    align: "center",
    isVisible: true,
    sortable: true,
    text: `Id отправителя`,
    width: 100
  },
  {
    value: "msg.userToId",
    align: "center",
    isVisible: true,
    sortable: true,
    text: `Id получателя`,
    width: 100
  },
  {
    value: "msg.userOperatorId",
    align: "center",
    isVisible: true,
    sortable: true,
    text: `Id оператора`,
    width: 100
  },
  {
    value: "msg.targetSystemId",
    align: "center",
    isVisible: true,
    sortable: true,
    text: `Id целевой системы`,
    width: 100
  },
  {
    value: "msg.sourceSystemId",
    align: "center",
    isVisible: true,
    sortable: true,
    text: `Id источника`,
    width: 100
  },
  {
    value: "msg.pointId",
    align: "center",
    isVisible: true,
    sortable: true,
    text: `Id точки`,
    width: 100
  },
]