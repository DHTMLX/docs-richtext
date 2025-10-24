---
sidebar_label: api.getReactiveState()
title: Метод getReactiveState
description: Вы можете ознакомиться с методом getReactiveState в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и интерактивные демонстрации, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# api.getReactiveState()

### Описание

@short: Предоставляет объект, содержащий реактивные свойства RichText.

### Использование

~~~jsx {}
api.getReactiveState(): object;
~~~

### Возвращаемое значение

Этот метод возвращает объект со следующими свойствами:

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
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // конфигурационные свойства
});
// получение реактивного состояния RichText
const reactive_state = editor.api.getReactiveState();
console.log(reactive_state)
~~~

**Журнал изменений:** Этот метод был введён в версии 2.0
