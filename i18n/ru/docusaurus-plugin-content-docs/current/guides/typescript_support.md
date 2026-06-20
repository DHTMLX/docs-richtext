---
sidebar_label: Поддержка TypeScript
title: Поддержка TypeScript
description: В документации вы можете узнать об использовании TypeScript с библиотекой DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Поддержка TypeScript {#typescript-support}

Начиная с версии v2.0, DHTMLX RichText поставляется со встроенными определениями TypeScript, которые не требуют дополнительной настройки.

:::note[Примечание]
Попробуйте редактор в <a href="https://snippet.dhtmlx.com/ziynafp7?tag=richtext" target="_blank">Snippet Tool</a>.
:::

## Преимущества TypeScript {#advantages-of-typescript}

TypeScript вместе с DHTMLX RichText предоставляет:

- типобезопасность — компилятор обнаруживает некорректное использование свойств конфигурации и аргументов методов на этапе сборки
- автодополнение — среда разработки предлагает допустимые имена свойств, сигнатуры методов и типы значений по мере ввода
- самодокументирующийся АПИ — аннотации типов для объекта конфигурации и методов одновременно служат встроенной документацией

## Инициализация RichText в TypeScript {#initialize-richtext-in-typescript}

Пример ниже инициализирует RichText в TypeScript с автодополнением из встроенных определений типов:

~~~ts
import { Richtext } from "@dhx/richtext";

const editor = new Richtext("#root", {
    menubar: true,
    layoutMode: "document"
});
~~~

## Справочник по типам АПИ {#reference-api-types}

Сигнатуры TypeScript для каждого свойства конфигурации см. в разделе [Обзор свойств](api/overview/properties_overview.md). Сигнатуры методов см. в разделе [Обзор методов](api/overview/methods_overview.md).
