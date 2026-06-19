---
sidebar_label: fullscreenMode
title: Конфиг fullscreenMode
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о конфиге fullscreenMode. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# fullscreenMode

### Описание {#description}

@short: Необязательный. Включает полноэкранный режим RichText

### Использование {#usage}

~~~jsx {}
fullscreenMode?: boolean; 
~~~

### Конфиг по умолчанию {#default-config}

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
