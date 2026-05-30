---
sidebar_label: destructor()
title: Метод destructor
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о методе destructor. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# destructor()

### Описание

@short: Удаляет все HTML-элементы RichText и отсоединяет все связанные события

### Использование

~~~jsx {}
destructor(): void;
~~~

### Пример

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});

// удалить RichText
editor.destructor();
~~~
