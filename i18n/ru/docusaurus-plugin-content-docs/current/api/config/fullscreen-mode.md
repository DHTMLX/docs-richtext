---
sidebar_label: fullscreenMode
title: fullscreenMode Config
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о конфигурационном параметре fullscreenMode. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# fullscreenMode

### Description

@short: Optional. Включает полноэкранный режим RichText

### Usage

~~~jsx {}
fullscreenMode?: boolean; 
~~~

### Default config

~~~jsx
fullscreenMode: false;
~~~

### Example

~~~jsx {3}
// initialize RichText
new richtext.Richtext("#root", {
    fullscreenMode: true
    // other configuration properties
});
~~~

**Change log:** Свойство добавлено в v2.0

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Full toolbar](https://snippet.dhtmlx.com/ziynafp7?tag=richtext)
