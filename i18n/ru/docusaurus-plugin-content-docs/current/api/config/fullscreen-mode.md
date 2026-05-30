---
sidebar_label: fullscreenMode
title: fullscreenMode Config
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о конфигурационном параметре fullscreenMode. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# fullscreenMode

### Описание

@short: Необязательный. Включает полноэкранный режим RichText

### Использование

~~~jsx {}
fullscreenMode?: boolean; 
~~~

### Конфигурация по умолчанию

~~~jsx
fullscreenMode: false;
~~~

### Пример

~~~jsx {3}
// инициализация RichText
new richtext.Richtext("#root", {
    fullscreenMode: true
    // другие параметры конфигурации
});
~~~

**Журнал изменений:** Свойство добавлено в v2.0

**Связанные статьи:** [Конфигурация](guides/configuration.md)

**Связанный пример:** [RichText. Full toolbar](https://snippet.dhtmlx.com/ziynafp7?tag=richtext)
