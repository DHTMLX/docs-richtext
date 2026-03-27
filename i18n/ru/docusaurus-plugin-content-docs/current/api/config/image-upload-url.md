---
sidebar_label: imageUploadUrl
title: Конфигурация imageUploadUrl
description: В документации библиотеки DHTMLX JavaScript RichText вы можете ознакомиться с конфигурационным параметром imageUploadUrl. Изучайте руководства разработчика и справочник API, запускайте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# imageUploadUrl

### Описание {#description}

@short: Необязательный. Задаёт URL, используемый для загрузки изображений

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

**Связанный пример:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
