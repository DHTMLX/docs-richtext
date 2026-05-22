---
sidebar_label: Миграция на новые версии
title: Миграция на новые версии
description: Вы можете узнать о миграции на новые версии в документации JavaScript-библиотеки DHTMLX RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Миграция на новые версии

## 1.2 -> 2.0

### Миграция свойств

| Устаревшее свойство | Замена                    | Примечания                                          |
| ------------------- | ------------------------- | --------------------------------------------------- |
| `customStats`       | *(Удалено)*               | Недоступно в новой версии 2.0                       |
| `toolbarBlocks`     | `toolbar`                 | Теперь поддерживает детальную структуру тулбара     |
| `defaultStyles`     | `defaultStyles` (обновлено) | Структура теперь задаётся пер-блочно на основе CSS |
| `mode`              | `layoutMode`              | Заменено строгим перечислением допустимых значений  |

### - `customStats`

Свойство `customStats` было удалено. Текущая версия RichText больше не поддерживает отображение пользовательской статистики (например, количества символов, слов или предложений).

Если вам по-прежнему нужно вычислять текстовые метрики, вы можете делать это внешним образом, обращаясь к содержимому редактора и обрабатывая его вручную:

```jsx
const content = editor.getValue();
const wordCount = content.split(/\s+/).length;
```

### - `toolbarBlocks` → [`toolbar`](api/config/toolbar.md)

До **2.0** можно было указывать только блоки с элементами управления
```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
  toolbarBlocks: ["undo", "style", "decoration", "colors", "align", "link"]
});
```

Начиная с **2.0** можно указывать отдельные элементы управления
```jsx{2-4} title="From 2.0"
new richtext.Richtext("#root", {
    toolbar: [
        "undo", "style", "bold", "italic", "underline", "text-color",
        "align", "link"
    ]
});
```

### - [`defaultStyles`](api/config/default-styles.md)

До **2.0** можно было задавать значения по умолчанию для элементов управления выбором в тулбаре
```jsx title="Before 2.0"
defaultStyles: {
    "font-family": "Tahoma",
    "font-size": "14px"
}
```

Начиная с **2.0** можно указывать стили по умолчанию для конкретных типов блоков
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

:::note[Примечание]
Используйте `*` для задания базовых значений по умолчанию для всех блоков, затем переопределяйте конкретные элементы (p, h1, blockquote и т.д.).
:::

### - `mode` → [`layoutMode`](api/config/layout-mode.md)

```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
    mode: "document"
});
```

```jsx{2} title="From 2.0"
new Richtext("#root", {
    layoutMode: "document" // or "classic"
});
```

Новый параметр [`layoutMode`](api/config/layout-mode.md) строго поддерживает значения `"classic"` и `"document"`.

### Миграция методов

| Устаревший метод        | Новый эквивалент                     | Примечания                                                          |
| ----------------------- | ------------------------------------ | ------------------------------------------------------------------- |
| `getValue(mode)`        | `getValue(encoder)`                  | Энкодеры заменяют строковые режимы; для энкодеров нужен отдельный импорт |
| `setValue(value, mode)` | `setValue(value, encoder)`           | Энкодеры заменяют строковые режимы; для энкодеров нужен отдельный импорт |
| `getStats()`            | *Удалено*                            | Нет замены; требуется ручная реализация логики                      |
| `getEditorAPI()`        | *Удалено*                            | Внутренний метод; используйте публичный АПИ                         |
| `fire()`                | *Удалено*                            | Заменено на `exec()` и `intercept()`                                |
| `on()`, `detach()`      | ✅ Сохранено (`api.on`, `api.detach`)| Теперь доступно через `richtext.api`                                |
| `fullScreen()`          | *Удалено*                            | Используйте свойство конфигурации `fullscreenMode`                  |
| `exitFullScreen()`      | *Удалено*                            | Используйте свойство конфигурации `fullscreenMode`                  |
| `paint()`               | *Удалено*                            | Больше не требуется                                                 |
| `destructor()`          | ✅ Доступно                          | Без изменений                                                       |
| `setConfig()`           | ✅ Новый                             | Позволяет обновлять конфигурацию в реальном времени                 |
| `setLocale()`           | ✅ Новый                             | Позволяет динамически переключать локаль                            |
| `getReactiveState()`    | ✅ Новый                             | Обеспечивает реактивное отслеживание состояния                      |
| `getState()`            | ✅ Новый                             | Возвращает текущее статическое состояние конфигурации               |
| `intercept()`           | ✅ Новый                             | Перехват внутренних действий                                        |
| `exec()`                | ✅ Новый                             | Выполнение внутренних действий                                      |

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

:::note[Примечание]
Вы по-прежнему можете вызывать `getValue()` и `setValue()` без энкодера — по умолчанию используется HTML
:::

### - [`on`](api/internal/on.md) / [`detach`](api/internal/detach.md)

```jsx title="Before 2.0"
editor.events.on("Change", function(action, canUndo, canRedo){
  // your code here
});
 
editor.events.detach("Change");
```

```jsx title="From 2.0"
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
```

### - `fire()` → Используйте [`exec()`](api/internal/exec.md) и [`intercept()`](api/internal/intercept.md)

```jsx title="Before 2.0"
editor.events.fire("some-event", [data]);
```

```jsx title="From 2.0"
editor.api.exec("some-event", obj);

// Preventing execution
editor.api.intercept("some-event", (obj) => false);
```
