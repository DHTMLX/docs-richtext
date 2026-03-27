---
sidebar_label: Руководство по миграции
title: Руководство по миграции
description: В документации библиотеки DHTMLX JavaScript RichText вы найдёте руководство по миграции на новые версии. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Руководство по миграции

## 1.2 -> 2.0 {#12---20}

### Миграция свойств {#properties-migration}

| Устаревшее свойство | Заменено на               | Примечания                                                      |
| ------------------- | ------------------------- | --------------------------------------------------------------- |
| `customStats`       | *(Удалено)*               | Недоступно в новой версии 2.0                                   |
| `toolbarBlocks`     | `toolbar`                 | Теперь поддерживает детальную структуру toolbar                 |
| `defaultStyles`     | `defaultStyles` (обновлено) | Структура теперь задаётся для каждого блока и основана на CSS  |
| `mode`              | `layoutMode`              | Заменено более строгой настройкой на основе перечисления        |

### - `customStats` {#--customstats}

Свойство `customStats` удалено. Текущая версия RichText больше не поддерживает отображение пользовательской статистики (например, количества символов, слов, предложений).

Если вам по-прежнему нужно вычислять текстовые метрики, это можно сделать externally, обратившись к содержимому редактора и обработав его вручную:

```jsx
const content = editor.getValue();
const wordCount = content.split(/\s+/).length;
```

### - `toolbarBlocks` → [`toolbar`](api/config/toolbar.md) {#--toolbarblocks--toolbar}

До версии **2.0** пользователи могли указывать только блоки с элементами управления:
```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
  toolbarBlocks: ["undo", "style", "decoration", "colors", "align", "link"]
});
```

Начиная с версии **2.0** пользователи могут указывать отдельные элементы управления:
```jsx{2-4} title="From 2.0"
new richtext.Richtext("#root", {
    toolbar: [
        "undo", "style", "bold", "italic", "underline", "text-color",
        "align", "link"
    ]
});
```

### - [`defaultStyles`](api/config/default-styles.md) {#--defaultstyles}

До версии **2.0** пользователи могли задавать значения по умолчанию для элементов управления выбором в toolbar:
```jsx title="Before 2.0"
defaultStyles: {
    "font-family": "Tahoma",
    "font-size": "14px"
}
```

Начиная с версии **2.0** пользователи могут указывать значения стилей по умолчанию для конкретных типов блоков:
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
Используйте `*` для определения базовых значений по умолчанию для всех блоков, а затем переопределяйте конкретные элементы (p, h1, blockquote и т.д.).
:::

### - `mode` → [`layoutMode`](api/config/layout-mode.md) {#--mode--layoutmode}

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

Новое свойство [`layoutMode`](api/config/layout-mode.md) строго поддерживает значения `"classic"` и `"document"`.

### Миграция методов {#methods-migration}

| Устаревший метод        | Новый эквивалент                     | Примечания                                                                    |
| ----------------------- | ------------------------------------ | ----------------------------------------------------------------------------- |
| `getValue(mode)`        | `getValue(encoder)`                  | Кодировщики заменяют строковые режимы; для кодировщиков требуется отдельный импорт |
| `setValue(value, mode)` | `setValue(value, encoder)`           | Кодировщики заменяют строковые режимы; для кодировщиков требуется отдельный импорт |
| `getStats()`            | *Удалён*                             | Замены нет; требуется реализация собственной логики                           |
| `getEditorAPI()`        | *Удалён*                             | Внутренний метод; используйте публичный API                                   |
| `fire()`                | *Удалён*                             | Заменён методами `exec()` и `intercept()`                                     |
| `on()`, `detach()`      | Сохранены (`api.on`, `api.detach`)   | Теперь доступны через `richtext.api`                                          |
| `fullScreen()`          | *Удалён*                             | Используйте свойство конфигурации `fullscreenMode`                            |
| `exitFullScreen()`      | *Удалён*                             | Используйте свойство конфигурации `fullscreenMode`                            |
| `paint()`               | *Удалён*                             | Больше не требуется                                                           |
| `destructor()`          | Сохранён                             | Без изменений                                                                 |
| `setConfig()`           | Новый                                | Позволяет обновлять конфигурацию на лету                                      |
| `setLocale()`           | Новый                                | Позволяет динамически менять локаль                                           |
| `getReactiveState()`    | Новый                                | Обеспечивает реактивное отслеживание состояния                                |
| `getState()`            | Новый                                | Предоставляет текущее статическое состояние конфигурации                      |
| `intercept()`           | Новый                                | Перехватывает внутренние действия                                             |
| `exec()`                | Новый                                | Выполняет внутренние действия                                                 |

### - [`setValue()`](api/methods/set-value.md) / [`getValue()`](api/methods/get-value.md) {#--setvalue--getvalue}

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
Вы по-прежнему можете вызывать `getValue()` и `setValue()` без кодировщика — по умолчанию используется HTML.
:::

### - [`on`](api/internal/on.md) / [`detach`](api/internal/detach.md) {#--on--detach}

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

### - `fire()` → Использование [`exec()`](api/internal/exec.md) и [`intercept()`](api/internal/intercept.md) {#--fire--use-exec-and-intercept}

```jsx title="Before 2.0"
editor.events.fire("some-event", [data]);
```

```jsx title="From 2.0"
editor.api.exec("some-event", obj);

// Preventing execution
editor.api.intercept("some-event", (obj) => false);
```
