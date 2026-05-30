---
sidebar_label: api.getReactiveState()
title: Метод getReactiveState
description: Вы можете узнать о методе getReactiveState в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, запускайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// получение реактивного состояния RichText
const reactive_state = editor.api.getReactiveState();
console.log(reactive_state)
~~~

**Список изменений:** Метод добавлен в v2.0
