---
sidebar_label: destructor()
title: Метод destructor
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о методе destructor. Изучите руководства разработчика и справочник АПИ, просмотрите примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# destructor()

### Описание

@short: Удаляет все HTML-элементы RichText и отвязывает все связанные события

### Использование

~~~jsx {}
destructor(): void;
~~~

### Пример

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

// remove RichText
editor.destructor();
~~~
