---
sidebar_label: getValue()
title: Метод getValue
description: Вы можете узнать о методе getValue в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# getValue()

### Описание {#description}

@short: Возвращает значение RichText

### Использование {#usage}

~~~jsx {}
getValue(encoder?: any): string;
~~~

### Параметры {#parameters}

- `encoder` - (необязательный) парсер, используемый для кодирования содержимого RichText в пользовательский формат. Доступны следующие форматы: `html` (по умолчанию) и `text`

Получить необходимый энкодер можно следующим образом:

```jsx
const toTextEncoder = richtext.text.toText; // text encoder
const toHTMLEncoder = richtext.html.toHTML; // html encoder
```

### Пример {#example}

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." // sets the default value (HTML format)
    // other configuration properties
});

const toTextEncoder = richtext.text.toText;
const editor_value = editor.getValue(toTextEncoder);
console.log(editor_value);
~~~

**История изменений:** Метод был обновлён в v2.0. Параметр `mode` был удалён. Параметр `encoder` был добавлен
