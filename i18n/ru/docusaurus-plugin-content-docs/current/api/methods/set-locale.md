---
sidebar_label: setLocale()
title: Метод setLocale
description: Вы можете узнать о методе setLocale в документации библиотеки DHTMLX JavaScript RichText. Изучите руководства для разработчиков и справочник АПИ, ознакомьтесь с примерами кода и живыми демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# setLocale()

### Описание {#description}

@short: Применяет новую локаль к RichText

### Использование {#usage}

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Параметры {#parameters}

- `null` - (опционально) сбрасывает локаль до стандартной (*английской*)
- `locale` - (опционально) объект с данными новой применяемой локали

:::info[Информация]
Используйте метод `setLocale()` для применения новой локали к RichText. Чтобы сбросить RichText до стандартной локали, вызовите метод `setLocale()` без аргументов (или со значением *null*).
:::

### Пример {#example}

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});

// применить локаль "de" к RichText
editor.setLocale(de);
~~~

**Журнал изменений:** Метод добавлен в v2.0

**Связанные статьи:** [Локализация](guides/localization.md)
