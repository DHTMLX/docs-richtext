---
sidebar_label: api.getReactiveState()
title: Метод getReactiveState
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о методе getReactiveState. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# api.getReactiveState()

### Описание

@short: Возвращает объект с реактивными свойствами RichText

### Использование

~~~jsx {}
api.getReactiveState(): object;
~~~

### Возвращает

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

### Пример

~~~jsx {5-7}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// get the Reactive State of RichText
const reactive_state = editor.api.getReactiveState();
console.log(reactive_state)
~~~

**Журнал изменений:** Метод добавлен в v2.0
