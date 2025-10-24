---
sidebar_label: fullscreenMode
title: fullscreenMode Конфигурация
description: Изучите конфигурацию fullscreenMode в документации библиотеки DHTMLX JavaScript RichText. Ознакомьтесь с руководствами для разработчиков, справочниками по API, попробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# fullscreenMode

### Описание

@short: Необязательно. Включает полноэкранный режим RichText

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
    // другие свойства конфигурации
});
~~~

**История изменений:** Это свойство было добавлено в версии v2.0

**Связанные статьи:** [Конфигурация](guides/configuration.md)

**Связанный пример:** [RichText. Полная панель инструментов](https://snippet.dhtmlx.com/ziynafp7?tag=richtext)
