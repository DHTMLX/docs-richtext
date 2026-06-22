---
sidebar_label: api.getReactiveState()
title: Метод getReactiveState
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о методе getReactiveState. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // параметры конфигурации
});
// получение реактивного состояния RichText
const reactive_state = editor.api.getReactiveState();
console.log(reactive_state)
~~~

**История изменений:** Метод добавлен в v2.0
