---
sidebar_label: api.getState()
title: Метод getState
description: Вы можете узнать о методе getState в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# api.getState()

### Описание

@short: Предоставляет объект, содержащий текущие свойства StateStore в RichText.

### Использование

~~~jsx {}
api.getState(): object;
~~~

### Возвращаемое значение

Этот метод возвращает объект со следующими свойствами:

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
// получение текущего состояния RichText
const state = editor.api.getState();
console.log(state);
~~~

**Изменения:** Метод добавлен в версии v2.0
