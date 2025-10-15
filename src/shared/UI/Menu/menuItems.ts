import { TMenuItem } from "./menu.type";

export const menuItems: TMenuItem[] = [
  {
    title: `Дашборд`,
    icon: '',
    to: '/dash',
    subMenu: [
      {
        title: `Статистика`,
        icon: ``,
        to: `/dash/stats`,
      },
      {
        title: `Графики`,
        icon: ``,
        to: `/dash/charts`,
      },
      {
        title: `Уведомления`,
        icon: ``,
        to: `/dash/alerts`,
      },
    ]
  },
  {
    title: `Сообщения`,
    icon: ``,
    to: ``,
    subMenu: [
      {
        title: `Детали`,
        icon: ``,
        to: `/msg_detail`,
      },
      {
        title: `Фильтры`,
        icon: ``,
        to: `/msg_filters`
      },
      {
        title: `Режим отображения`,
        icon: ``,
        to: `/msg_view_preset`
      },
      {
        title: `Экспорт сообщений`,
        icon: ``,
        to: `/msg_export`
      }
    ]
  },
  {
    title: `Регистрация систем`,
    icon: ``,
    to: ``,
    subMenu: [
      {
        title: `Настройка подключений`,
        icon: ``,
        to: `/sys_config`,
      },
      {
        title: `Тестирование подключений`,
        icon: ``,
        to: `/sys_test`,
      },
      {
        title: `Управление активностью`,
        icon: ``,
        to: `/sys_activity`,
      },
      {
        title: `Настройка методов приема`,
        icon: ``,
        to: `/sys_methods`,
      },

    ]
  },
  {
    title: `Создание шаблонов`,
    icon: ``,
    to: ``,
    subMenu: [
      {
        title: `Редактирование шаблонов`,
        icon: ``,
        to: `template_edit`,
      },
      {
        title: `Привязка к системам`,
        icon: ``,
        to: `template_bind`,
      },
      {
        title: `Клонирование шаблонов`,
        icon: ``,
        to: `template_clone`,
      },
      {
        title: `Активация/деактивация`,
        icon: ``,
        to: `template_toggle`,
      },
      {
        title: `Экспорт/импорт`,
        icon: ``,
        to: `template_export`,
      },
    ]
  },
  {
    title: `Отправители и получатели`,
    to: ``,
    icon: ``,
    subMenu: [
      {
        title: `Узлы доставки`,
        to: `/ref_nodes`,
        icon: ``
      },
      {
        title: `Категории сообщений`,
        to: `/ref_categories`,
        icon: ``
      },
    ]
  },
  {
    title: `Управление пользователями`,
    to: ``,
    icon: ``,
    subMenu: [
      {
        title: `Управление пользователями`,
        to: `user_config`,
        icon: ``
      }
    ]
  },
  {
    title: `Журнал системных событий`,
    to: ``,
    icon: ``,
    subMenu: [
      {
        title: `Детали события`,
        to: `/event_detail`,
        icon: ``
      },
      {
        title: `Предустановленные фильтры`,
        to: `/event_filter`,
        icon: ``
      },
      {
        title: `Полнотекстовый поиск`,
        to: `/event_search`,
        icon: ``
      },
      {
        title: `Экспорт событий`,
        to: `/event_export`,
        icon: ``
      },
    ]
  },
  {
    title: `Отчёты`,
    to: ``,
    icon: ``,
    subMenu: [
      {
        title: `Пользовательские панели`
      },
      {
        title: `Экспорт`,
        to: `/reports/export`
      }
    ]
  }
]