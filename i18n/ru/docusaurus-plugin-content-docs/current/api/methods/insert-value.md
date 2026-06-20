---
sidebar_label: insertValue()
title: Метод insertValue
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о методе insertValue. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# insertValue()

### Описание {#description}

@short: Вставляет текст, Markdown или HTML-контент в текущую позицию курсора или заменяет выделенный текст

### Использование {#usage}

~~~jsx {}
insertValue: (value: string, encoder?: any): void;
~~~

### Параметры {#parameters}

- `value` - (обязательный) значение, которое будет вставлено в RichText в текущей позиции курсора. Если активно выделение, оно заменяется новым значением
- `encoder` - (необязательный) парсер для декодирования вставляемого значения. Доступны следующие форматы: `html` (по умолчанию), `text` и `markdown`

Получить нужный энкодер можно следующим образом:

```jsx
const fromTextEncoder = richtext.text.fromText;             // текстовый энкодер
const fromHTMLEncoder = richtext.html.fromHTML;             // HTML-энкодер
const fromMarkdownEncoder = richtext.markdown.fromMarkdown; // Markdown-энкодер
```

### Пример {#example}

~~~jsx {6}
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});

// вставляет HTML-ссылку с пользовательскими атрибутами в позицию курсора
editor.insertValue("<a href=\"https://example.com\" title=\"Example\">link</a>");
~~~

Вставленное содержимое добавляется как единая запись в историю и может быть отменено одним шагом **Undo**.

**Журнал изменений:** Метод добавлен в v2.1
