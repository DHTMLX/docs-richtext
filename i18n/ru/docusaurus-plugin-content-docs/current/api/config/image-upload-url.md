---
sidebar_label: imageUploadUrl
title: Конфигурация imageUploadUrl
description: Вы можете узнать о конфигурации imageUploadUrl в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# imageUploadUrl

### Описание

@short: Необязательно. Определяет URL, который будет использоваться для загрузки изображений

### Использование

~~~jsx {}
imageUploadUrl?: string;
~~~

### Пример

~~~jsx {3}
// инициализация RichText
new richtext.Richtext("#root", {
    imageUploadUrl: "some URL"
    // другие свойства конфигурации
});
~~~

**Журнал изменений:** Это свойство было добавлено в версии 2.0

**Связанные статьи:** [Configuration](guides/configuration.md)

**Связанный пример:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
