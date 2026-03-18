---
sidebar_label: value
title: Конфигурация value
description: Документация по свойству value библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# value

### Описание {#description}

@short: Необязательный. Задаёт начальное значение (содержимое), отображаемое в области редактора RichText

:::tip[Совет]
Чтобы задать значение (содержимое) в пользовательском формате, используйте встроенный метод [`setValue()`](api/methods/set-value.md).
:::

### Использование {#usage}

~~~jsx {}
value?: string;
~~~

### Пример {#example}

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>" // задаёт значение по умолчанию (формат HTML)
    // другие свойства конфигурации
});
~~~

**История изменений:** Свойство добавлено в v2.0

**Связанные статьи:** [Конфигурация](guides/configuration.md)

**Связанный пример:** [RichText. Инициализация](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
