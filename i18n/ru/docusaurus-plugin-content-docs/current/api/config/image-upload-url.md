---
sidebar_label: imageUploadUrl
title: imageUploadUrl Config
description: В документации библиотеки DHTMLX JavaScript RichText вы можете ознакомиться с конфигурационным параметром imageUploadUrl. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# imageUploadUrl

### Описание

@short: Необязательный. Задаёт URL, который будет использоваться для загрузки изображений

### Использование

~~~jsx {}
imageUploadUrl?: string;
~~~

### Пример

~~~jsx {3}
// инициализация RichText
new richtext.Richtext("#root", {
    imageUploadUrl: "some URL"
    // другие параметры конфигурации
});
~~~

**Лог изменений:** Свойство добавлено в v2.0

**Связанные статьи:** [Конфигурация](guides/configuration.md)

**Связанный пример:** [RichText. Инициализация](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
