---
sidebar_label: api.getState()
title: Метод getState
description: Вы можете узнать о методе getState в документации библиотеки DHTMLX JavaScript RichText. Изучите руководства разработчика и справочник АПИ, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# api.getState()

### Описание {#description}

@short: Возвращает объект со свойствами StateStore компонента RichText

### Использование {#usage}

~~~jsx {}
api.getState(): object;
~~~

### Возвращает {#returns}

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

### Пример {#example}

~~~jsx {5-7}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// получить состояние RichText
const state = editor.api.getState();
console.log(state);
~~~

**История изменений:** Метод добавлен в v2.0
