---
sidebar_label: layoutMode
title: Конфигурация layoutMode
description: В документации библиотеки DHTMLX JavaScript RichText вы можете ознакомиться с конфигурационным параметром layoutMode. Изучайте руководства разработчика и справочник API, запускайте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# layoutMode

### Описание {#description}

@short: Необязательный. Задаёт режим отображения основной области редактора

### Использование {#usage}

~~~jsx {}
layoutMode: "classic" | "document";
~~~

Режим `"classic"` представляет область редактирования, растянутую на всю страницу. Режим `"document"` имитирует реальные размеры документа (используются форматы: A4, A5, A6, A7).

### Конфигурация по умолчанию {#default-config}

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

**История изменений:** Свойство добавлено в v2.0 вместо удалённого свойства `mode`

**Связанные статьи:** [Конфигурация](guides/configuration.md)

**Связанный пример:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
