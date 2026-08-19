---
sidebar_label: MCP-сервер DHTMLX
title: MCP-интеграция DHTMLX RichText для редактирования и форматов содержимого
description: MCP-сервер предоставляет ИИ-ассистентам проверенную актуальную документацию по стилям по умолчанию, энкодерам и настройке триггеров DHTMLX RichText.
---

# MCP-сервер DHTMLX RichText: форматы, панель инструментов и триггеры {#dhtmlx-richtext-mcp-server-formats-toolbar-and-triggers}

DHTMLX RichText — это лёгкий WYSIWYG-редактор с широкими возможностями конфигурации. Вы можете преобразовывать содержимое между [HTML, обычным текстом и Markdown](/#supported-formats), задавать типографику для каждого типа блока через [стили по умолчанию](guides/configuration.md#configure-default-styles) и создавать полностью настраиваемую [панель инструментов](guides/configuration.md#toolbar), которая подстраивается под любые элементы управления, нужные приложению. Чтобы получить от этого максимум пользы, нужно сопоставлять каждую деталь с текущей настройкой: актуальный CSS для стилей по умолчанию, подходящий энкодер для конкретного формата и допустимые типы элементов управления для пользовательских кнопок панели инструментов — а не полагаться на память.

MCP-сервер DHTMLX поддерживает ИИ-ассистента в курсе всего этого. [Настройка упоминаний и триггеров](guides/mentions_and_tags.md), [контракт загрузки изображений](guides/working_with_server.md) и [процесс экспорта в DOCX/PDF](api/events/export.md) — всё это возвращается из актуальной документации, поэтому сгенерированный код соответствует тому, как редактор действительно ведёт себя сегодня.

### Конечная точка MCP {#mcp-endpoint}

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

:::note[Примечание]
MCP-сервер DHTMLX охватывает все основные продукты DHTMLX, а не только DHTMLX RichText. Одна и та же конечная точка и инструкции по настройке подходят независимо от того, с каким компонентом DHTMLX вы работаете.
:::

## Возможности RichText в MCP-сервере {#richtext-coverage-in-the-mcp-server}

От кнопок панели инструментов до калбэков триггеров — индекс MCP-сервера охватывает весь функционал DHTMLX RichText. Типичные запросы:

- Поиск актуального API для [методов](api/overview/methods_overview.md), [событий](api/overview/events_overview.md) и [свойств](api/overview/properties_overview.md), включая методы [Event Bus](api/overview/event_bus_methods_overview.md) и [состояния](api/overview/state_methods_overview.md).
- Генерация готового к использованию кода [инициализации](guides/initialization.md) с контейнером, [`toolbar`](api/config/toolbar.md) и [`menubar`](api/config/menubar.md), которые нужны конкретному редактору.
- Переключение между [классическим режимом и режимом документа](guides/configuration.md#layout-modes) с помощью [`layoutMode`](api/config/layout-mode.md), а также создание пользовательской [панели инструментов](guides/configuration.md#toolbar) из встроенных кнопок или объектов элементов управления `button`/`richselect`/`colorpicker`.
- Чтение и запись содержимого в формате HTML, обычного текста или Markdown с помощью [`setValue()`](api/methods/set-value.md), [`getValue()`](api/methods/get-value.md) и [`insertValue()`](api/methods/insert-value.md) с соответствующим энкодером.
- Настройка [стилей по умолчанию](guides/configuration.md#configure-default-styles) для каждого типа блока вместе с соответствующими CSS-правилами.
- Настройка [конечной точки загрузки изображений](guides/working_with_server.md) в точном соответствии с контрактом запроса и ответа, который ожидает RichText, либо использование резервного варианта со встроенным base64.
- Настройка [@упоминаний, #тегов и слэш-команд](guides/mentions_and_tags.md) через свойство `triggers`, включая статические, синхронные и асинхронные источники данных.
- Обработка событий [`export`](api/events/export.md) и [`import`](api/events/import.md) для вывода в DOCX/PDF, а также [локализация](guides/localization.md) интерфейса или его [стилизация](guides/stylization.md) с помощью `--wx-color-primary` и других CSS-переменных.
- Интеграция RichText с [React](guides/integration_with_react.md), [Vue](guides/integration_with_vue.md), [Angular](guides/integration_with_angular.md) и [Svelte](guides/integration_with_svelte.md).

## Как MCP-сервер обрабатывает запрос по RichText {#how-the-mcp-server-handles-a-richtext-prompt}

Запрос по RichText к MCP-серверу DHTMLX проходит через конвейер Retrieval-Augmented Generation (RAG) поверх Model Context Protocol (MCP), прежде чем попасть в один из двух рабочих процессов: *Search* (поиск), который возвращает подходящие страницы справочника, или *Inference* (вывод), который читает эти страницы и отвечает напрямую. У запроса по RichText для ассистента часто есть две стороны: одна требует актуальной документации, а с другой ассистент справляется самостоятельно, без посторонней помощи. Первую он отделяет ещё до того, как что-либо попадёт в MCP.

Проследим путь промпта *«Как настроить DHTMLX RichText так, чтобы изображения загружались на сервер ресурсов моей компании перед вставкой в документ?»* через этот процесс:

1. Ассистент выделяет ту часть запроса, которая требует документации: контракт запроса и ответа, который RichText ожидает от конечной точки загрузки изображений.
2. Сервер связывает её с документацией по работе с сервером.
3. Запросу нужен рабочий код, поэтому его обрабатывает *Search* (более узкий вопрос — например, заменяет ли `insertValue()` выделение или вставляет содержимое в позицию курсора — вместо этого попал бы в *Inference*).
4. *Search* извлекает подходящие страницы из векторного индекса, построенного на основе актуальной документации по RichText.
5. Эти страницы возвращаются ассистенту в качестве контекста.
6. Ассистент настраивает обработчик загрузки в соответствии с этим контрактом, а затем самостоятельно дополняет его фактическим запросом к серверу ресурсов компании, опираясь на собственные знания.

Благодаря этому пути рекомендации по форматированию и панели инструментов RichText остаются согласованными с тем, как редактор ведёт себя сегодня.

## Подключение ИИ-инструмента к MCP-серверу {#attaching-your-ai-tool-to-the-mcp-server}

Регистрация конечной точки MCP выполняется один раз для каждого инструмента — будь то команда CLI или запись в JSON-конфигурации, — и все они указывают на один и тот же адрес:

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

Ниже по порядку описаны шаги настройки для популярных инструментов.

### Claude Code {#claude-code}

:::info[К сведению]
Все детали настройки MCP для Claude Code приведены в [официальной документации](https://code.claude.com/docs/en/mcp).
:::

Чтобы зарегистрировать сервер из командной строки, выполните:

~~~jsx
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

Предпочитаете настроить это вручную? Добавьте следующее в `.mcp.json`:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "type": "http",
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Cursor {#cursor}

:::info[К сведению]
Полное руководство по настройке MCP приведено в [официальной документации](https://cursor.com/en-US/docs/mcp) Cursor.
:::

Шаги для добавления сервера:

1. Откройте Settings (`Cmd+Shift+J` на Mac, `Ctrl+Shift+J` на Windows/Linux)
2. Перейдите в **Tools & MCP**
3. Нажмите **Add Custom MCP**
4. Вставьте следующую конфигурацию:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Google Antigravity {#google-antigravity}

#### Antigravity 2.0 {#antigravity-20}

:::info[К сведению]
Полные шаги MCP-интеграции в Antigravity приведены в [официальной документации](https://antigravity.google/docs/mcp).
:::

Чтобы подключить MCP-сервер DHTMLX к Google Antigravity, выполните следующие шаги:

1. Откройте палитру команд
2. Введите «mcp add»
3. Выберите «HTTP»
4. Укажите следующие значения:
- Имя:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI {#antigravity-cli}

:::info[К сведению]
В [соответствующем руководстве](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes) подробно описано всё, что меняется при переходе с Gemini CLI на Antigravity CLI.
:::

Чтобы подключить MCP-сервер DHTMLX к Antigravity CLI, создайте файл `mcp_config.json` в одном из следующих расположений:

- Глобально: `~/.gemini/config/mcp_config.json`
- В рабочей области: `.agents/mcp_config.json`

Добавьте следующую конфигурацию:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

Затем выполните команду `agy` в терминале.

### ChatGPT {#chatgpt}

:::info[К сведению]
Каждый шаг настройки коннектора MCP для ChatGPT подробно описан в [официальной документации](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt).
:::

Шаги настройки коннектора:

1. Перейдите в **Settings** → **Apps & Connectors**
2. Нажмите **Advanced settings**
3. Включите **Developer mode**
4. Вернитесь в **Apps & Connectors** и нажмите «Create»
5. Заполните данные коннектора:
- Имя:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~
- Аутентификация: `No authentication`
6. Нажмите **Create**

После создания коннектора ChatGPT получает документацию с MCP-сервера прямо во время диалога.

:::info[К сведению]
Для интенсивных задач разработки лучше подойдут другие инструменты с поддержкой MCP.
:::

### Другие инструменты {#other-tools}

В настройках любого другого ИИ-инструмента для разработки найдите пункт вроде «Model Context Protocol» или «Context Sources» и добавьте туда `https://docs.dhtmlx.com/mcp` в качестве пользовательского источника.

## Основы конфиденциальности MCP-сервера {#mcp-server-privacy-basics}

MCP-сервер работает исключительно удалённо: без локального выполнения кода, без доступа к локальным файлам и без хранения персональных данных.

Логируемые запросы служат одной цели: отладке и улучшению сервиса.

Для более строгих требований к конфиденциальности DHTMLX предлагает коммерческое развёртывание с отключённым логированием запросов. Свяжитесь с нами по адресу `info@dhtmlx.com`.

## Идеи промптов для разработки с RichText {#prompt-ideas-for-building-with-richtext}

Промпты по RichText обычно относятся к одной из четырёх областей: макет, формат содержимого, работа с изображениями или упоминания и триггеры. Группы ниже организованы именно так — выберите нужную и адаптируйте под свою настройку.

**Макет и панель инструментов**

~~~
How do I switch DHTMLX RichText from full-width editing to a document-style layout? Use the docs.
~~~
~~~
How do I build a custom toolbar with only bold, italic, and one custom button?
~~~
~~~
How do I make the built-in layout mode switcher show up as a dropdown instead of a plain button?
~~~

**Содержимое и форматы**

~~~
How do I load Markdown content into DHTMLX RichText?
~~~
~~~
How do I read DHTMLX RichText's content out as plain text instead of HTML?
~~~
~~~
How do I insert an HTML link at the current cursor position without replacing the rest of the content?
~~~

**Изображения и синхронизация с сервером**

~~~
How do I make DHTMLX RichText upload images to my own server instead of embedding them inline?
~~~
~~~
What JSON response does DHTMLX RichText expect from an image upload endpoint?
~~~

**Упоминания, теги и триггеры**

~~~
How do I set up an @ mention trigger that looks up users from a server? Use the docs.
~~~
~~~
How do I make a slash command insert just the item text, without the leading slash showing up?
~~~

## Что делает промпт по RichText эффективным {#what-makes-a-richtext-prompt-work}

- **Указывайте точный метод.** `setValue()` заменяет весь документ, `insertValue()` вставляет содержимое в позицию курсора или заменяет выделение, а `getValue()` считывает содержимое. Указывайте, какой именно метод вы имеете в виду, вместо общего «обновить содержимое».
- **Указывайте, с каким форматом вы работаете.** По умолчанию `setValue()`, `getValue()` и `insertValue()` используют HTML, но также принимают энкодеры `richtext.text.fromText` и `richtext.markdown.fromMarkdown`. Называйте формат явно, чтобы ассистент передавал нужный энкодер, а не предполагал HTML по умолчанию.
- **Различайте типы элементов управления панели инструментов.** `richselect` и `colorpicker` работают только с определёнными предустановленными идентификаторами элементов управления; пользовательские кнопки поддерживают только `type: "button"`. Указывайте, какой тип вы добавляете, чтобы ассистент не сопоставил тип с идентификатором, который его игнорирует.
- **Добавляйте «Use the docs»** для формы ответа при загрузке изображений или для связки `defaultStyles`/CSS. У обоих есть строгий контракт (точные поля JSON, ручные CSS-правила), который легко запомнить неверно.
