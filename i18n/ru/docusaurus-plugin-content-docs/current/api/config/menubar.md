---
sidebar_label: menubar
title: Конфигурация menubar
description: Вы можете узнать о конфигурации menubar в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# menubar

### Описание

@short: Необязательно. Включает верхнее меню (menubar) в RichText.

### Использование

~~~jsx {}
menubar?: boolean; 
~~~

### Пример

~~~jsx {3}
// инициализация RichText
new richtext.Richtext("#root", {
    menubar: true
    // другие свойства конфигурации
});
~~~

**История изменений:** Это свойство было добавлено в версии v2.0

**Связанные статьи:** [Конфигурация](guides/configuration.md)

**Связанный пример:** [RichText. Инициализация с menubar](https://snippet.dhtmlx.com/tjryzka7?tag=richtext)
