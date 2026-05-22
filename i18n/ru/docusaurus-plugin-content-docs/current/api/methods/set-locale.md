---
sidebar_label: setLocale()
title: Метод setLocale
description: В документации библиотеки DHTMLX JavaScript RichText вы можете ознакомиться с методом setLocale. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# setLocale()

### Описание

@short: Применяет новую локаль к RichText

### Использование

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Параметры

- `null` - (необязательный) сбрасывает локаль до значения по умолчанию (*английский*)
- `locale` - (необязательный) объект с данными новой локали, которую необходимо применить

:::info[Информация]
Используйте метод `setLocale()`, чтобы применить новую локаль к RichText. Чтобы сбросить RichText до локали по умолчанию, вызовите метод `setLocale()` без аргументов (или с значением *null*).
:::

### Пример

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

// apply the "de" locale to RichText
editor.setLocale(de);
~~~

**Журнал изменений:** Метод добавлен в v2.0

**Связанные статьи:** [Локализация](guides/localization.md)
