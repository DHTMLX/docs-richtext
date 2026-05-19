---
sidebar_label: imageUploadUrl
title: imageUploadUrl Config
description: Вы можете узнать о конфигурации imageUploadUrl в документации JavaScript-библиотеки DHTMLX RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# imageUploadUrl

### Description

@short: Необязательный. Задаёт URL, который будет использоваться для загрузки изображений

### Usage

~~~jsx {}
imageUploadUrl?: string;
~~~

### Example

~~~jsx {3}
// initialize RichText
new richtext.Richtext("#root", {
    imageUploadUrl: "some URL"
    // other configuration properties
});
~~~

**Change log:** Свойство добавлено в v2.0

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
