---
sidebar_label: Поддержка TypeScript
title: Поддержка TypeScript
description: В документации вы можете узнать об использовании TypeScript с библиотекой DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Поддержка TypeScript

Начиная с версии v2.0, DHTMLX RichText поставляется со встроенными определениями TypeScript, не требующими дополнительной настройки.

:::note
Попробуйте редактор в <a href="https://snippet.dhtmlx.com/ziynafp7?tag=richtext" target="_blank">Snippet Tool</a>.
:::

## Преимущества TypeScript

TypeScript совместно с DHTMLX RichText предоставляет:

- типобезопасность — компилятор обнаруживает некорректное использование свойств конфигурации и аргументов методов на этапе сборки
- автодополнение — IDE подсказывает допустимые имена свойств, сигнатуры методов и типы значений по мере ввода
- самодокументируемый АПИ — аннотации типов для объекта конфигурации и методов служат встроенной документацией

## Инициализация RichText в TypeScript

Пример ниже демонстрирует инициализацию RichText в TypeScript с автодополнением на основе встроенных определений типов:

~~~ts
import { Richtext } from "@dhx/richtext";

const editor = new Richtext("#root", {
    menubar: true,
    layoutMode: "document"
});
~~~

## Справочник по типам АПИ

Сигнатуры TypeScript для каждого свойства конфигурации описаны в разделе [Обзор свойств](api/overview/properties_overview.md). Сигнатуры методов — в разделе [Обзор методов](api/overview/methods_overview.md).
