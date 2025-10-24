---
sidebar_label: Миграция на новые версии
title: Миграция на новые версии
description: Вы можете узнать о миграции на новые версии в документации по DHTMLX JavaScript RichTExt. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichTExt.
---

# Миграция на новые версии

## 1.2 -> 2.0

### Миграция свойств

| Старое свойство | Заменено на                | Примечания                                 |
| --------------- | -------------------------- | ------------------------------------------ |
| `customStats`   | *(Удалено)*                | Недоступно в новой версии 2.0              |
| `toolbarBlocks` | `toolbar`                  | Теперь поддерживает детальную структуру    |
| `defaultStyles` | `defaultStyles` (обновлено)| Структура теперь по блокам и на основе CSS |
| `mode`          | `layoutMode`               | Заменено на более строгую настройку enum   |

### - `customStats`

Свойство `customStats` не входит в последнюю версию RichText. Это значит, что встроенная поддержка пользовательской статистики, такой как подсчет символов, слов или предложений, больше недоступна.

Чтобы обработать метрики текста, просто получите содержимое редактора и обработайте его по своему усмотрению:

```jsx
const content = editor.getValue();
const wordCount = content.split(/\s+/).length;
```

### - `toolbarBlocks` → [`toolbar`](api/config/toolbar.md)

До **2.0** можно было задавать только блоки элементов управления:
```jsx{2} title="До 2.0"
new dhx.RichText("#root", {
  toolbarBlocks: ["undo", "style", "decoration", "colors", "align", "link"]
});
```

Начиная с **2.0**, можно указывать отдельные элементы управления:
```jsx{2-4} title="C 2.0"
new richtext.Richtext("#root", {
    toolbar: [
        "undo", "style", "bold", "italic", "underline", "text-color",
        "align", "link"
    ]
});
```

### - [`defaultStyles`](api/config/default-styles.md)

До **2.0** значения по умолчанию для элементов управления тулбара задавались так:
```jsx title="До 2.0"
defaultStyles: {
    "font-family": "Tahoma",
    "font-size": "14px"
}
```

С **2.0** значения по умолчанию можно задавать для конкретных типов блоков:
```jsx title="C 2.0"
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
Ключ `*` задаёт базовые значения по умолчанию для всего, а для конкретных элементов (например, p, h1 или blockquote) можно указать свои настройки.
:::

### - `mode` → [`layoutMode`](api/config/layout-mode.md)

```jsx{2} title="До 2.0"
new dhx.RichText("#root", {
    mode: "document"
});
```

```jsx{2} title="C 2.0"
new Richtext("#root", {
    layoutMode: "document" // или "classic"
});
```

Теперь [`layoutMode`](api/config/layout-mode.md) принимает только значения `"classic"` или `"document"`.

### Миграция методов

| Старый метод             | Новый эквивалент                       | Примечания                                               |
| ------------------------ | -------------------------------------- | -------------------------------------------------------- |
| `getValue(mode)`         | `getValue(encoder)`                    | Энкодеры заменяют строковые режимы; требуется отдельный импорт энкодеров |
| `setValue(value, mode)`  | `setValue(value, encoder)`             | Энкодеры заменяют строковые режимы; требуется отдельный импорт энкодеров |
| `getStats()`             | *Удалено*                              | Нет замены; требуется ручная логика                      |
| `getEditorAPI()`         | *Удалено*                              | Внутренний; используйте публичный API                    |
| `fire()`                 | *Удалено*                              | Заменено на `exec()` и `intercept()`                     |
| `on()`, `detach()`       | ✅ Сохранены (`api.on`, `api.detach`)  | Теперь доступны через `richtext.api`                     |
| `fullScreen()`           | *Удалено*                              | Используйте свойство конфигурации `fullscreenMode`       |
| `exitFullScreen()`       | *Удалено*                              | Используйте свойство конфигурации `fullscreenMode`       |
| `paint()`                | *Удалено*                              | Больше не требуется                                      |
| `destructor()`           | ✅ Доступен                            | Без изменений                                            |
| `setConfig()`            | ✅ Новый                               | Позволяет обновлять конфиг "на лету"                     |
| `setLocale()`            | ✅ Новый                               | Позволяет динамически менять язык                        |
| `getReactiveState()`     | ✅ Новый                               | Позволяет отслеживать реактивное состояние               |
| `getState()`             | ✅ Новый                               | Позволяет получить текущее статичное состояние конфигурации |
| `intercept()`            | ✅ Новый                               | Перехват внутренних действий                             |
| `exec()`                 | ✅ Новый                               | Выполнение внутренних действий                           |

### - [`setValue()`](api/methods/set-value.md) / [`getValue()`](api/methods/get-value.md)

```jsx title="До 2.0"
...
editor.setValue("<p>Hello</p>", "html");
editor.getValue("text");
```

```jsx title="C 2.0"
const fromTextEncoder = richtext.text.fromText; 
const fromHTMLEncoder = richtext.html.fromHTML; 

const toTextEncoder = richtext.text.toText; 
const toHTMLEncoder = richtext.html.toHTML; 
...
editor.setValue("<p>Hello</p>", fromHTMLEncoder);
editor.getValue(toTextEncoder);
```

:::note
Можно вызывать `getValue()` и `setValue()` без передачи энкодера — по умолчанию будет использоваться HTML.
:::

### - [`on`](api/internal/on.md) / [`detach`](api/internal/detach.md)

```jsx title="До 2.0"
editor.events.on("Change", function(action, canUndo, canRedo){
  // ваш код
});
 
editor.events.detach("Change");
```

```jsx title="C 2.0"
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
```

### - `fire()` → Используйте [`exec()`](api/internal/exec.md) и [`intercept()`](api/internal/intercept.md)

```jsx title="До 2.0"
editor.events.fire("some-event", [data]);
```

```jsx title="C 2.0"
editor.api.exec("some-event", obj);

// Предотвращение выполнения
editor.api.intercept("some-event", (obj) => false);
```
