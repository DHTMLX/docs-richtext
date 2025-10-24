---
sidebar_label: getValue()
title: Метод getValue
description: Вы можете узнать о методе getValue в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# getValue()

### Описание

@short: Получает текущее значение редактора RichText

### Использование

~~~jsx {}
getValue(encoder?: any): string;
~~~

### Параметры

- `encoder` - (необязательный) парсер, который преобразует содержимое RichText в определённый формат. Доступные варианты включают `html` (по умолчанию) и `text`

Для получения нужного энкодера используйте следующий код:

```jsx
const toTextEncoder = richtext.text.toText; // текстовый энкодер
const toHTMLEncoder = richtext.html.toHTML; // HTML энкодер
```

### Пример

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." // задаёт значение по умолчанию (формат HTML)
    // другие свойства конфигурации
});

const toTextEncoder = richtext.text.toText;
const editor_value = editor.getValue(toTextEncoder);
console.log(editor_value);
~~~

**Изменения:** Метод был обновлён в версии 2.0. Параметр `mode` был удалён. Добавлен параметр `encoder`.
