---
sidebar_label: Миграция на новые версии
title: Миграция на новые версии
description: Вы можете узнать о миграции на новые версии в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник по АПИ, пробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Миграция на новые версии

## 1.2 -> 2.0

### Миграция свойств {#properties-migration}

| Устаревшее свойство | Заменено на               | Примечания                                      |
| ------------------- | ------------------------- | ----------------------------------------------- |
| `customStats`       | *(Удалено)*               | Недоступно в новой версии 2.0                   |
| `toolbarBlocks`     | `toolbar`                 | Теперь поддерживает детальную структуру тулбара |
| `defaultStyles`     | `defaultStyles` (обновлено) | Структура теперь задаётся для каждого блока и основана на CSS |
| `mode`              | `layoutMode`              | Заменено более строгим параметром на основе перечисления |

### - `customStats`

Свойство `customStats` удалено. Текущая версия RichText больше не поддерживает отображение пользовательской статистики (например, количество символов, слов, предложений).

Если вам по-прежнему нужно вычислять текстовые метрики, это можно сделать извне, получив содержимое редактора и обработав его вручную:

```jsx
const content = editor.getValue();
const wordCount = content.split(/\s+/).length;
```

### - `toolbarBlocks` → [`toolbar`](api/config/toolbar.md)

До **2.0** пользователи могли указывать только блоки с элементами управления
```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
  toolbarBlocks: ["undo", "style", "decoration", "colors", "align", "link"]
});
```

Начиная с **2.0** пользователи могут указывать отдельные элементы управления
```jsx{2-4} title="From 2.0"
new richtext.Richtext("#root", {
    toolbar: [
        "undo", "style", "bold", "italic", "underline", "text-color",
        "align", "link"
    ]
});
```

### - [`defaultStyles`](api/config/default-styles.md)

До **2.0** пользователи могли задавать значения по умолчанию для элементов управления выбором на тулбаре
```jsx title="Before 2.0"
defaultStyles: {
    "font-family": "Tahoma",
    "font-size": "14px"
}
```

Начиная с **2.0** пользователи могут указывать стили по умолчанию для конкретных типов блоков
```jsx title="From 2.0"
defaultStyles: {
  "*": {
    "font-family": "Tahoma",
    "font-size": "14px"
  },
  h1: {
    "font-size": "32px",
    "color": "#333"
  }
}
```

:::note
Используйте `*` для задания базовых стилей по умолчанию для всех блоков, а затем переопределяйте конкретные элементы (p, h1, blockquote и т.д.).
:::

### - `mode` → [`layoutMode`](api/config/layout-mode.md)

```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
    mode: "document"
});
```

```jsx{2} title="From 2.0"
new Richtext("#root", {
    layoutMode: "document" // или "classic"
});
```

Новое свойство [`layoutMode`](api/config/layout-mode.md) строго поддерживает значения `"classic"` и `"document"`.

### Миграция методов {#methods-migration}

| Устаревший метод        | Новый эквивалент                     | Примечания                                                        |
| ----------------------- | ------------------------------------ | ----------------------------------------------------------------- |
| `getValue(mode)`        | `getValue(encoder)`                  | Энкодеры заменяют строковые режимы; для энкодеров требуется отдельный импорт |
| `setValue(value, mode)` | `setValue(value, encoder)`           | Энкодеры заменяют строковые режимы; для энкодеров требуется отдельный импорт |
| `getStats()`            | *Удалено*                            | Замены нет; требуется собственная логика                          |
| `getEditorAPI()`        | *Удалено*                            | Внутренний метод; используйте публичный АПИ                       |
| `fire()`                | *Удалено*                            | Заменено на `exec()` и `intercept()`                              |
| `on()`, `detach()`      | ✅ Сохранено (`api.on`, `api.detach`)| Теперь доступно через `richtext.api`                              |
| `fullScreen()`          | *Удалено*                            | Используйте свойство конфигурации `fullscreenMode`                |
| `exitFullScreen()`      | *Удалено*                            | Используйте свойство конфигурации `fullscreenMode`                |
| `paint()`               | *Удалено*                            | Больше не требуется                                               |
| `destructor()`          | ✅ По-прежнему доступно              | Без изменений                                                     |
| `setConfig()`           | ✅ Новое                             | Позволяет обновлять конфигурацию на лету                          |
| `setLocale()`           | ✅ Новое                             | Позволяет динамически переключать локаль                          |
| `getReactiveState()`    | ✅ Новое                             | Позволяет отслеживать реактивное состояние                        |
| `getState()`            | ✅ Новое                             | Предоставляет текущее статическое состояние конфигурации          |
| `intercept()`           | ✅ Новое                             | Перехват внутренних действий                                      |
| `exec()`                | ✅ Новое                             | Выполнение внутренних действий                                    |

### - [`setValue()`](api/methods/set-value.md) / [`getValue()`](api/methods/get-value.md)

```jsx title="Before 2.0"
...
editor.setValue("<p>Hello</p>", "html");
editor.getValue("text");
```

```jsx title="From 2.0"
const fromTextEncoder = richtext.text.fromText; 
const fromHTMLEncoder = richtext.html.fromHTML; 

const toTextEncoder = richtext.text.toText; 
const toHTMLEncoder = richtext.html.toHTML; 
...
editor.setValue("<p>Hello</p>", fromHTMLEncoder);
editor.getValue(toTextEncoder);
```

:::note
Вы по-прежнему можете вызывать `getValue()` и `setValue()` без энкодера — по умолчанию используется HTML
:::

### - [`on`](api/internal/on.md) / [`detach`](api/internal/detach.md)

```jsx title="Before 2.0"
editor.events.on("Change", function(action, canUndo, canRedo){
  // ваш код здесь
});
 
editor.events.detach("Change");
```

```jsx title="From 2.0"
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
```

### - `fire()` → Используйте [`exec()`](api/internal/exec.md) и [`intercept()`](api/internal/intercept.md) {#--fire--use-exec-and-intercept}

```jsx title="Before 2.0"
editor.events.fire("some-event", [data]);
```

```jsx title="From 2.0"
editor.api.exec("some-event", obj);

// Предотвращение выполнения
editor.api.intercept("some-event", (obj) => false);
```
