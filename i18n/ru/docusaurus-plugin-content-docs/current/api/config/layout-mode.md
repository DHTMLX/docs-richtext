---
sidebar_label: layoutMode
title: Конфигурация layoutMode
description: Изучите конфигурацию layoutMode в документации библиотеки DHTMLX JavaScript RichText. Ознакомьтесь с руководствами для разработчиков, справочниками API, примерами кода, живыми демо и скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# layoutMode

### Описание

@short: Опционально. Определяет стиль расположения для основной области редактора.

### Использование

~~~jsx {}
layoutMode: "classic" | "document";
~~~

Режим `"classic"` делает область редактирования во всю страницу. Режим `"document"` имитирует реальные размеры документов, используя форматы A4, A5, A6 и A7.

### Конфигурация по умолчанию

~~~jsx
layoutMode: "classic";
~~~

### Пример

~~~jsx {3}
// инициализация RichText
new richtext.Richtext("#root", {
    layoutMode: "document"  // устанавливает режим "document" по умолчанию
    // другие свойства конфигурации
});
~~~

**История изменений:** Это свойство было добавлено в версии v2.0, заменив старое свойство `mode`.

**Связанные статьи:** [Configuration](guides/configuration.md)

**Связанный пример:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
