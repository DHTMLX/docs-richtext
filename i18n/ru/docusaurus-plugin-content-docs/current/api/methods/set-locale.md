---
sidebar_label: setLocale()
title: Метод setLocale
description: Вы можете узнать о методе setLocale в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# setLocale()

### Описание {#description}

@short: Применяет новую локаль к RichText

### Использование {#usage}

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Параметры {#parameters}

- `null` - (необязательный) сбрасывает на локаль по умолчанию (*английскую*)
- `locale` - (необязательный) объект с данными новой локали, которую необходимо применить

:::info[Информация]
Используйте метод `setLocale()` для применения новой локали к RichText. Чтобы сбросить RichText на локаль по умолчанию, вызовите метод `setLocale()` без аргументов (или со значением *null*).
:::

### Пример {#example}

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

// apply the "de" locale to RichText
editor.setLocale(de);
~~~

**История изменений:** Метод был добавлен в v2.0

**Связанные статьи:** [Локализация](guides/localization.md)
