---
sidebar_label: locale
title: Конфиг locale
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о конфиге locale. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# locale

### Описание {#description}

@short: Необязательный. Объект, содержащий метки локализации RichText

:::info[Информация]
Объект `locale` должен включать все метки RichText с соответствующими переводами.
:::

### Использование {#usage}

~~~jsx {}
locale?: object;
~~~

### Конфиг по умолчанию {#default-config}

По умолчанию RichText использует **английскую** локаль. Вы также можете задать собственную локаль.

:::tip[Совет]
Чтобы динамически изменить текущую локаль, воспользуйтесь методом [`setLocale()`](api/methods/set-locale.md) объекта RichText
:::

### Пример {#example}

~~~jsx {3}
// инициализация RichText
const editor = new richtext.RichText("#root", {
    locale: richtext.locales.cn // изначально будет установлена китайская локаль
    // locale: richtext.locales.en // изначально будет установлена английская локаль
    // locale: richtext.locales.de // изначально будет установлена немецкая локаль
    // другие свойства конфигурации
});
~~~

**История изменений:** Свойство добавлено в v2.0

**Связанные статьи:** [Локализация](guides/localization.md)

**Связанный пример:** [RichText. Локализация](https://snippet.dhtmlx.com/zxjrin3i?tag=richtext)
