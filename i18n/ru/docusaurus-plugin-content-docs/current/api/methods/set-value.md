---
sidebar_label: setValue()
title: Метод setValue
description: Вы можете узнать о методе setValue в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# setValue()

### Описание {#description}

@short: Применяет новое значение к RichText

### Использование {#usage}

~~~jsx {}
setValue: (value: string, encoder?: any): void;
~~~

### Параметры {#parameters}

- `value` - (обязательный) значение, которое будет вставлено в RichText
- `encoder` - (необязательный) пользовательский парсер для декодирования значения из нестандартного формата. Доступны следующие форматы: `html` (по умолчанию), `text` и `markdown`

Получить нужный энкодер можно следующим способом:

```jsx
const fromTextEncoder = richtext.text.fromText;             // text encoder
const fromHTMLEncoder = richtext.html.fromHTML;             // html encoder
const fromMarkdownEncoder = richtext.markdown.fromMarkdown; // markdown encoder
```

### Пример {#example}

~~~jsx {7-8}
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

const editor_value = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."

const fromTextEncoder = richtext.text.fromText;
editor.setValue(editor_value, fromTextEncoder);
~~~

**История изменений:** Метод был обновлён в v2.0. Параметр `mode` удалён. Добавлен параметр `encoder`
