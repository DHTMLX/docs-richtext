---
sidebar_label: api.getState()
title: Метод getState
description: В документации DHTMLX JavaScript RichText можно ознакомиться с методом getState. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# api.getState()

### Описание

@short: Возвращает объект со свойствами StateStore компонента RichText

### Использование

~~~jsx {}
api.getState(): object;
~~~

### Возвращаемое значение

Метод возвращает объект со следующими параметрами:

~~~jsx {}
{     
    cursorState: {},
    defaultStyles: {},
    document: {},
    fullscreen: boolean,
    history: []
    layoutMode: string,
    popup: any,
    selection: {}
}
~~~

### Пример

~~~jsx {5-7}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// get the State of RichText
const state = editor.api.getState();
console.log(state);
~~~

**Журнал изменений:** Метод добавлен в v2.0
