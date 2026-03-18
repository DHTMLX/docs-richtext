---
sidebar_label: menubar
title: Конфигурация menubar
description: Документация по свойству menubar библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# menubar

### Описание {#description}

@short: Необязательный. Включает верхнюю строку меню RichText

### Использование {#usage}

~~~jsx {}
menubar?: boolean;
~~~

### Пример {#example}

~~~jsx {3}
// инициализация RichText
new richtext.Richtext("#root", {
    menubar: true
    // другие свойства конфигурации
});
~~~

**История изменений:** Свойство добавлено в v2.0

**Связанные статьи:** [Конфигурация](guides/configuration.md)

**Связанный пример:** [RichText. Инициализация с menubar](https://snippet.dhtmlx.com/tjryzka7?tag=richtext)
