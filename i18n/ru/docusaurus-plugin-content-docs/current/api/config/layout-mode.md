---
sidebar_label: layoutMode
title: Конфиг layoutMode
description: В документации DHTMLX JavaScript RichText вы можете узнать о конфиге layoutMode. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, скачивайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# layoutMode

### Описание {#description}

@short: Необязательный. Задаёт режим отображения основной области редактора

### Использование {#usage}

~~~jsx {}
layoutMode: "classic" | "document";
~~~

Режим `"classic"` заполняет всю область редактирования. Режим `"document"` отображает область редактирования в виде страницы документа.

### Конфиг по умолчанию {#default-config}

~~~jsx
layoutMode: "classic";
~~~

### Пример {#example}

~~~jsx {3}
// инициализация RichText
new richtext.Richtext("#root", {
    layoutMode: "document"  // инициализирует RichText в режиме "document" по умолчанию
    // другие свойства конфигурации
});
~~~

**Журнал изменений:** Свойство добавлено в v2.0 вместо удалённого свойства `mode`

**Связанные статьи:** [Конфигурация](guides/configuration.md)

**Связанный пример:** [RichText. Инициализация](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
