---
sidebar_label: setValue()
title: Метод setValue
description: Вы можете ознакомиться с методом setValue в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# setValue()

### Описание

@short: Обновляет содержимое RichText новым значением

### Использование

~~~jsx {}
setValue: (value: string, encoder?: any): void;
~~~

### Параметры

- `value` - (обязательный) содержимое, которое будет вставлено в RichText
- `encoder` - (необязательный) пользовательский парсер для кодирования содержимого RichText в определённый формат. Доступные форматы: `html` (по умолчанию) и `text`

Получить нужный encoder можно следующим образом:

```jsx
const fromTextEncoder = richtext.text.fromText; // текстовый энкодер
const fromHTMLEncoder = richtext.html.fromHTML; // html энкодер
```

### Пример

~~~jsx {7-8}
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});

const editor_value = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."

const fromTextEncoder = richtext.text.fromText;
editor.setValue(editor_value, fromTextEncoder);
~~~

**Журнал изменений:** Метод был обновлён в версии v2.0. Параметр `mode` был удалён. Добавлен параметр `encoder`.
