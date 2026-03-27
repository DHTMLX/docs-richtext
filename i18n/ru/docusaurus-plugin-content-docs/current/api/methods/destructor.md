---
sidebar_label: destructor()
title: Метод destructor
description: Вы можете узнать о методе destructor в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# destructor()

### Описание {#description}

@short: Удаляет все HTML-элементы RichText и отсоединяет все связанные события

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
