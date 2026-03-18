---
sidebar_label: locale
title: Конфигурация locale
description: Документация по свойству locale библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# locale

### Описание {#description}

@short: Необязательный. Объект с метками локализации RichText

:::info[Информация]
Объект **locale** должен содержать все метки RichText с соответствующими переводами.
:::

### Использование {#usage}

~~~jsx {}
locale?: object;
~~~

### Конфигурация по умолчанию {#default-config}

По умолчанию RichText использует **английскую** локаль. Вы можете задать любую другую.

:::tip[Совет]
Для динамической смены локали используйте метод [**setLocale()**](api/methods/set-locale.md)
:::

### Пример {#example}

~~~jsx {3}
// инициализация RichText
const editor = new richtext.RichText("#root", {
    locale: richtext.locales.cn // устанавливается китайская локаль
    // locale: richtext.locales.en // устанавливается английская локаль
    // locale: richtext.locales.de // устанавливается немецкая локаль
    // другие свойства конфигурации
});
~~~

**История изменений:** Свойство добавлено в v2.0

**Связанные статьи:** [Локализация](guides/localization.md)

**Связанный пример:** [RichText. Локализация](https://snippet.dhtmlx.com/zxjrin3i?tag=richtext)
