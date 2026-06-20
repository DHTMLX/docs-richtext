---
sidebar_label: menubar
title: Конфиг menubar
description: В документации DHTMLX JavaScript RichText вы можете узнать о конфиге menubar. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# menubar

### Описание {#description}

@short: Необязательный. Включает верхний меню-бар RichText

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

**Журнал изменений:** Свойство добавлено в v2.0

**Связанные статьи:** [Конфигурация](guides/configuration.md)

**Связанный пример:** [RichText. Инициализация с меню-баром](https://snippet.dhtmlx.com/tjryzka7?tag=richtext)
