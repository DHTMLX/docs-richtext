---
sidebar_label: menubar
title: menubar Config
description: Вы можете узнать о конфигурационном параметре menubar в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, запускайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# menubar

### Описание

@short: Необязательный. Включает верхнее меню RichText

### Использование

~~~jsx {}
menubar?: boolean; 
~~~

### Пример

~~~jsx {3}
// инициализация RichText
new richtext.Richtext("#root", {
    menubar: true
    // другие параметры конфигурации
});
~~~

**Список изменений:** Свойство добавлено в v2.0

**Связанные статьи:** [Конфигурация](guides/configuration.md)

**Связанный пример:** [RichText. Инициализация с меню](https://snippet.dhtmlx.com/tjryzka7?tag=richtext)
