---
sidebar_label: layoutMode
title: layoutMode Config
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о конфиге layoutMode. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# layoutMode

### Описание

@short: Необязательный. Задаёт режим отображения основной области редактора

### Использование

~~~jsx {}
layoutMode: "classic" | "document";
~~~

Режим `"classic"` заполняет всю область редактирования. Режим `"document"` отображает область редактирования как страницу документа.

### Конфигурация по умолчанию

~~~jsx
layoutMode: "classic";
~~~

### Пример

~~~jsx {3}
// инициализация RichText
new richtext.Richtext("#root", {
    layoutMode: "document"  // инициализирует RichText с режимом "document" по умолчанию
    // другие свойства конфигурации
});
~~~

**Список изменений:** Свойство добавлено в v2.0 вместо удалённого свойства `mode`

**Связанные статьи:** [Конфигурация](guides/configuration.md)

**Связанный пример:** [RichText. Инициализация](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
