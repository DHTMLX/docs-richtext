---
sidebar_label: triggerTemplate
title: Конфиг triggerTemplate
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о конфиге triggerTemplate. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# triggerTemplate

### Описание {#description}

@short: Необязательный. Настраивает отображение элементов в выпадающем списке подсказок, открываемом записью [`triggers`](api/config/triggers.md)

По умолчанию выпадающий список отображает поле `label` каждого элемента в виде обычного текста. Используйте `triggerTemplate`, чтобы отображать более насыщенные строки — например, аватар вместе с именем и электронной почтой.

### Использование {#usage}

~~~jsx {}
function triggerTemplate({ data, trigger }) {
    return "HTML template of the suggestion item";
};
~~~

### Параметры {#parameters}

Функция обратного вызова принимает объект со следующими параметрами:

- `data` — текущий элемент подсказки (`{ id, label, url }`, а также любые пользовательские поля, добавленные в источник `data` триггера)
- `trigger` — символ триггера, открывшего выпадающий список (`"@"`, `"#"` и т.д.)

:::tip[Совет]
Ширина выпадающего списка по умолчанию составляет `160px`. Если вашему шаблону нужно больше пространства, добавьте родительский элемент `.wx-editor` перед селектором:

~~~css {}
.wx-editor .wx-suggest-anchor {
    width: 220px;
}
~~~
:::

### Пример {#example}

Следующий фрагмент кода настраивает два триггера: `@` для упоминаний и `#` для тегов. Используйте `triggerTemplate` для расширения значения `trigger`, чтобы отображать каждый выпадающий список по-разному. Для выпадающего списка `@` шаблон возвращает пользовательскую HTML-строку с аватаром (`data.image`), ником (`data.label`) и полным именем (`data.name`). Для триггера `#` шаблон использует `label`:

~~~jsx {5-6,8-15}
const { template, Richtext } = richtext;

new Richtext("#root", {
    triggers: [
        { trigger: "@", data: people },
        { trigger: "#", data: tags }
    ],
    triggerTemplate: template(obj => {
        if (obj.trigger === "@") {
            return `<div class="user">
                <img class="user-avatar" src="${obj.data.image}">
                <div class="user-nickname">${obj.data.label}</div>
                <div class="user-name">${obj.data.name}</div>
            </div>`;
        }
        // другие триггеры (например, "#") используют обычный label
        return obj.data.label;
    })
});
~~~

**История изменений:** Свойство добавлено в v2.1

**Связанные статьи:** [Упоминания и теги](guides/mentions_and_tags.md)
