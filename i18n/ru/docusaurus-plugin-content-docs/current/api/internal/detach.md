---
sidebar_label: api.detach()
title: Метод on
description: Вы можете узнать о методе on в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# api.detach()

### Описание

@short: Позволяет удалять или отсоединять обработчики событий

### Использование

~~~jsx {}
api.detach( tag: string ): void;
~~~

### Параметры

- `tag` - (обязательный) указывает имя тега действия

### События

:::info
Полный список внутренних событий RichText доступен [**здесь**](api/overview/events_overview.md)
:::

### Пример

~~~jsx {6-8,10}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});

editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
~~~

**История изменений:** Метод был обновлен в версии 2.0. Параметры `name` и `context` были удалены
