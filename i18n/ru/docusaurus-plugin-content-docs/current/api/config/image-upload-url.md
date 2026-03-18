---
sidebar_label: imageUploadUrl
title: Конфигурация imageUploadUrl
description: Документация по свойству imageUploadUrl библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# imageUploadUrl

### Описание {#description}

@short: Необязательный. Задаёт URL для загрузки изображений

### Использование {#usage}

~~~jsx {}
imageUploadUrl?: string;
~~~

### Пример {#example}

~~~jsx {3}
// инициализация RichText
new richtext.Richtext("#root", {
    imageUploadUrl: "some URL"
    // другие свойства конфигурации
});
~~~

**История изменений:** Свойство добавлено в v2.0

**Связанные статьи:** [Конфигурация](guides/configuration.md)

**Связанный пример:** [RichText. Инициализация](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
