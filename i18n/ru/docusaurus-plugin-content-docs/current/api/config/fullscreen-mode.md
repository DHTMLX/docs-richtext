---
sidebar_label: fullscreenMode
title: Конфигурация fullscreenMode
description: В документации библиотеки DHTMLX JavaScript RichText вы можете ознакомиться с конфигурационным параметром fullscreenMode. Изучайте руководства разработчика и справочник API, запускайте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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

**Связанный пример:** [RichText. Full toolbar](https://snippet.dhtmlx.com/ziynafp7?tag=richtext)
