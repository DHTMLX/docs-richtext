---
sidebar_label: api.getState()
title: Метод getState
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о методе getState. Изучайте руководства разработчика и справочник АПИ, запускайте примеры и живые демо, загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# api.getState()

### Описание

@short: Возвращает объект со свойствами StateStore компонента RichText

### Использование

~~~jsx {}
api.getState(): object;
~~~

### Возвращает

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
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// получение состояния RichText
const state = editor.api.getState();
console.log(state);
~~~

**Журнал изменений:** Метод добавлен в v2.0
