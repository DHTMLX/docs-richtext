---
sidebar_label: layoutMode
title: Конфигурация layoutMode
description: Документация по свойству layoutMode библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# layoutMode

### Описание {#description}

@short: Необязательный. Задаёт режим отображения основной области редактора

### Использование {#usage}

~~~jsx {}
layoutMode: "classic" | "document";
~~~

Режим `"classic"` — область редактирования занимает всю страницу. Режим `"document"` имитирует реальные размеры документа (форматы A4, A5, A6, A7).

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

**История изменений:** Свойство добавлено в v2.0 на замену удалённому свойству `mode`

**Связанные статьи:** [Конфигурация](guides/configuration.md)

**Связанный пример:** [RichText. Инициализация](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
