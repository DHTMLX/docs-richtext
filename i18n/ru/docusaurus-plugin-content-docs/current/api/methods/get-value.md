---
sidebar_label: getValue()
title: Метод getValue
description: В документации библиотеки DHTMLX JavaScript RichText вы можете ознакомиться с методом getValue. Изучите руководства разработчика и справочник АПИ, попробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# getValue()

### Описание {#description}

@short: Возвращает значение RichText

### Использование {#usage}

~~~jsx {}
getValue(encoder?: any): string;
~~~

### Параметры {#parameters}

- `encoder` - (необязательный) парсер для кодирования содержимого RichText в произвольный формат. Доступны следующие форматы: `html` (по умолчанию), `text` и `markdown`

Получить нужный энкодер можно следующим образом:

```jsx
const toTextEncoder = richtext.text.toText;             // текстовый энкодер
const toHTMLEncoder = richtext.html.toHTML;             // HTML-энкодер
const toMarkdownEncoder = richtext.markdown.toMarkdown; // Markdown-энкодер
```

### Пример {#example}

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." // задаёт значение по умолчанию (формат HTML)
    // другие свойства конфигурации
});

const toTextEncoder = richtext.text.toText;
const editor_value = editor.getValue(toTextEncoder);
console.log(editor_value);
~~~

**Журнал изменений:** Метод был обновлён в v2.0. Параметр `mode` был удалён. Добавлен параметр `encoder`
