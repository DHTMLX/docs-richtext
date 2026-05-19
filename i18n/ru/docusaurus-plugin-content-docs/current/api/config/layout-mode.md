---
sidebar_label: layoutMode
title: Конфиг layoutMode
description: В документации DHTMLX JavaScript RichText вы можете узнать о конфиге layoutMode. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# layoutMode

### Описание

@short: Необязательный. Задаёт режим макета для основной области редактора

### Использование

~~~jsx {}
layoutMode: "classic" | "document";
~~~

Режим `"classic"` растягивает область редактирования на всю доступную площадь. Режим `"document"` отображает область редактирования в виде страницы документа.

### Конфиг по умолчанию

~~~jsx
layoutMode: "classic";
~~~

### Пример

~~~jsx {3}
// инициализация RichText
new richtext.Richtext("#root", {
    layoutMode: "document"  // initializes RichText with "document" mode by default
    // other configuration properties
});
~~~

**История изменений:** Свойство добавлено в v2.0 вместо удалённого свойства `mode`

**Связанные статьи:** [Конфигурация](guides/configuration.md)

**Связанный пример:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
