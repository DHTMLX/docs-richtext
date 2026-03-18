---
sidebar_label: fullscreenMode
title: Конфигурация fullscreenMode
description: Документация по свойству fullscreenMode библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# fullscreenMode

### Описание {#description}

@short: Необязательный. Включает полноэкранный режим RichText

### Использование {#usage}

~~~jsx {}
fullscreenMode?: boolean;
~~~

### Конфигурация по умолчанию {#default-config}

~~~jsx
fullscreenMode: false;
~~~

### Пример {#example}

~~~jsx {3}
// инициализация RichText
new richtext.Richtext("#root", {
    fullscreenMode: true
    // другие свойства конфигурации
});
~~~

**История изменений:** Свойство добавлено в v2.0

**Связанные статьи:** [Конфигурация](guides/configuration.md)

**Связанный пример:** [RichText. Полная панель инструментов](https://snippet.dhtmlx.com/ziynafp7?tag=richtext)
