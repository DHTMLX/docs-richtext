---
sidebar_label: locale
title: locale Config
description: В документации по JavaScript-библиотеке DHTMLX RichText вы можете узнать о конфигурационном параметре locale. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# locale

### Описание

@short: Необязательный. Объект, содержащий метки локализации RichText

:::info[Информация]
Объект **locale** должен включать все метки RichText с соответствующими переводами.
:::

### Использование

~~~jsx {}
locale?: object;
~~~

### Конфигурация по умолчанию

По умолчанию RichText использует **английскую** локаль. Вы также можете задать пользовательскую локаль.

:::tip[Совет]
Для динамического изменения текущей локали используйте метод [**setLocale()**](api/methods/set-locale.md) объекта RichText
:::

### Пример

~~~jsx {3}
// initialize RichText
const editor = new richtext.RichText("#root", {
    locale: richtext.locales.cn // the Chineese locale will be set initially
    // locale: richtext.locales.en // the English locale will be set initially
    // locale: richtext.locales.de // the Germany locale will be set initially
    // other configuration properties
});
~~~

**Журнал изменений:** Свойство добавлено в v2.0

**Связанные статьи:** [Локализация](guides/localization.md)

**Связанный пример:** [RichText. Localization](https://snippet.dhtmlx.com/zxjrin3i?tag=richtext)
