---
sidebar_label: destructor()
title: Метод destructor
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о методе destructor. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# destructor()

### Описание {#description}

@short: Удаляет все HTML-элементы RichText и отключает все связанные события

### Использование {#usage}

~~~jsx {}
destructor(): void;
~~~

### Пример {#example}

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

// remove RichText
editor.destructor();
~~~
