---
sidebar_label: destructor()
title: Метод destructor
description: Вы можете узнать о методе destructor в документации библиотеки DHTMLX JavaScript RichText. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# destructor()

### Описание

@short: Очищает все HTML-элементы компонента RichText и отключает все связанные события.

### Использование

~~~jsx {}
destructor(): void;
~~~

### Пример

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});

// удаление RichText
editor.destructor();
~~~
