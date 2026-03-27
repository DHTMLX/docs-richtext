---
sidebar_label: api.getReactiveState()
title: Метод getReactiveState
description: Вы можете узнать о методе getReactiveState в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# api.getReactiveState()

### Описание {#description}

@short: Возвращает объект с реактивными свойствами RichText

### Использование {#usage}

~~~jsx {}
api.getReactiveState(): object;
~~~

### Возвращает {#returns}

Метод возвращает объект со следующими параметрами:

~~~jsx {}
{
    cursorState: { subscribe: any },
    defaultStyles {...},
    document {...},
    fullscreen {...},
    history {...},
    layoutMode {...},
    popup {...},
    selection {...}
}
~~~

### Пример {#example}

~~~jsx {5-7}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// get the Reactive State of RichText
const reactive_state = editor.api.getReactiveState();
console.log(reactive_state)
~~~

**История изменений:** Метод был добавлен в v2.0
