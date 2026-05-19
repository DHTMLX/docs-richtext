---
sidebar_label: api.detach()
title: Метод on
description: В документации к библиотеке DHTMLX JavaScript RichText вы можете узнать о методе on. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# api.detach()

### Описание

@short: Позволяет удалять/отсоединять обработчики событий

### Использование

~~~jsx {}
api.detach( tag: string ): void;
~~~

### Параметры

- `tag` - (обязательный) имя тега действия

### События

:::info
Полный список внутренних событий RichText можно найти [**здесь**](api/overview/events_overview.md)
:::

### Пример

~~~jsx {6-8,10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
~~~

**Журнал изменений:** Метод был обновлён в v2.0. Параметры `name` и `context` были удалены
