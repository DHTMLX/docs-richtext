---
sidebar_label: menubar
title: menubar Config
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о конфиге menubar. Изучайте руководства для разработчиков и справочник АПИ, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# menubar

### Description

@short: Опциональный. Включает верхнюю строку меню RichText

### Usage

~~~jsx {}
menubar?: boolean; 
~~~

### Example

~~~jsx {3}
// initialize RichText
new richtext.Richtext("#root", {
    menubar: true
    // other configuration properties
});
~~~

**Change log:** Свойство добавлено в v2.0

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Initialization with menubar](https://snippet.dhtmlx.com/tjryzka7?tag=richtext)
