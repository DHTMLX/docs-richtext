---
sidebar_label: api.detach()
title: Метод on
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о методе on. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# api.detach()

### Описание {#description}

@short: Позволяет удалять/отсоединять обработчики событий

### Использование {#usage}

~~~jsx {}
api.detach( tag: string ): void;
~~~

### Параметры {#parameters}

- `tag` - (обязательный) имя тега действия

### События {#events}

:::info[Информация]
Полный список внутренних событий RichText можно найти [**здесь**](api/overview/events_overview.md)
:::

### Пример {#example}

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

**Журнал изменений:** Метод был обновлён в v2.0. Параметры `name` и `context` были удалены
