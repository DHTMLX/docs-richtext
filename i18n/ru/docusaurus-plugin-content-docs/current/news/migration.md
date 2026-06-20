---
sidebar_label: Миграция на новые версии
title: Миграция на новые версии
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о миграции на новые версии. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Миграция на новые версии {#migration-to-newer-versions}

## 1.2 -> 2.0

### Миграция свойств {#properties-migration}

| Устаревшее свойство | Заменено на               | Примечания                                     |
| ------------------- | ------------------------- | ---------------------------------------------- |
| `customStats`       | *(Удалено)*               | Недоступно в новой версии 2.0                  |
| `toolbarBlocks`     | `toolbar`                 | Теперь поддерживает детальную структуру панели |
| `defaultStyles`     | `defaultStyles` (обновлено) | Структура теперь задаётся по блокам на основе CSS |
| `mode`              | `layoutMode`              | Заменено более строгим перечислимым параметром |

### - `customStats`

Свойство `customStats` было удалено. Текущая версия RichText больше не поддерживает отображение пользовательской статистики (например, количества символов, слов, предложений).

Если вам по-прежнему нужно вычислять метрики текста, вы можете делать это внешним образом, получив содержимое редактора и обработав его вручную:

```jsx
const content = editor.getValue();
const wordCount = content.split(/\s+/).length;
```

### - `toolbarBlocks` → [`toolbar`](api/config/toolbar.md)

До версии **2.0** пользователи могли задавать только блоки с элементами управления
```jsx{2} title="Before 2.0"
new dhx.RichText("#root", {
  toolbarBlocks: ["undo", "style", "decoration", "colors", "align", "link"]
});
```

Начиная с версии **2.0** пользователи могут указывать отдельные элементы управления
```jsx{2-4} title="From 2.0"
new richtext.Richtext("#root", {
    toolbar: [
        "undo", "style", "bold", "italic", "underline", "text-color",
        "align", "link"
    ]
});
```

### - [`defaultStyles`](api/config/default-styles.md)

До версии **2.0** пользователи могли задавать значения по умолчанию для элементов управления выбором на панели инструментов
```jsx title="Before 2.0"
defaultStyles: {
    "font-family": "Tahoma",
    "font-size": "14px"
}
```

Начиная с версии **2.0** пользователи могут задавать значения стилей по умолчанию для конкретных типов блоков
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

Новый параметр [`layoutMode`](api/config/layout-mode.md) строго поддерживает значения `"classic"` и `"document"`.

### Миграция методов {#methods-migration}

| Устаревший метод        | Новый эквивалент                     | Примечания                                                           |
| ----------------------- | ------------------------------------ | -------------------------------------------------------------------- |
| `getValue(mode)`        | `getValue(encoder)`                  | Вместо строковых режимов используются энкодеры; требуется отдельный импорт |
| `setValue(value, mode)` | `setValue(value, encoder)`           | Вместо строковых режимов используются энкодеры; требуется отдельный импорт |
| `getStats()`            | *Удалено*                            | Нет замены; требуется ручная реализация                              |
| `getEditorAPI()`        | *Удалено*                            | Внутренний; используйте публичный АПИ                               |
| `fire()`                | *Удалено*                            | Заменено на `exec()` и `intercept()`                                 |
| `on()`, `detach()`      | ✅ Сохранено (`api.on`, `api.detach`)| Теперь доступно через `richtext.api`                                 |
| `fullScreen()`          | *Удалено*                            | Используйте свойство конфигурации `fullscreenMode`                   |
| `exitFullScreen()`      | *Удалено*                            | Используйте свойство конфигурации `fullscreenMode`                   |
| `paint()`               | *Удалено*                            | Больше не нужен                                                      |
| `destructor()`          | ✅ Доступен                          | Без изменений                                                        |
| `setConfig()`           | ✅ Новый                             | Позволяет обновлять конфигурацию в реальном времени                  |
| `setLocale()`           | ✅ Новый                             | Позволяет динамически переключать локаль                             |
| `getReactiveState()`    | ✅ Новый                             | Обеспечивает отслеживание реактивного состояния                      |
| `getState()`            | ✅ Новый                             | Возвращает текущее статическое состояние конфигурации                |
| `intercept()`           | ✅ Новый                             | Перехватывает внутренние действия                                    |
| `exec()`                | ✅ Новый                             | Выполняет внутренние действия                                        |

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
