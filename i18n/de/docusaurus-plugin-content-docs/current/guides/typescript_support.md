---
sidebar_label: TypeScript-Unterstützung
title: TypeScript-Unterstützung
description: Sie können in der Dokumentation erfahren, wie Sie TypeScript mit der DHTMLX JavaScript RichText-Bibliothek verwenden. Entdecken Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# TypeScript-Unterstützung {#typescript-support}

Seit v2.0 wird DHTMLX RichText mit integrierten TypeScript-Definitionen ausgeliefert, die keine zusätzliche Einrichtung erfordern.

:::note[Hinweis]
Probieren Sie den Editor im <a href="https://snippet.dhtmlx.com/ziynafp7?tag=richtext" target="_blank">Snippet Tool</a> aus.
:::

## Vorteile von TypeScript {#advantages-of-typescript}

TypeScript mit DHTMLX RichText bietet Ihnen:

- Typsicherheit — der Compiler erkennt eine fehlerhafte Verwendung von Konfigurationseigenschaften und Methodenargumenten bereits zur Build-Zeit
- Autovervollständigung — Ihre IDE schlägt beim Tippen gültige Eigenschaftsnamen, Methodensignaturen und Wertetypen vor
- selbstdokumentierende API — Typannotationen am Konfigurationsobjekt und an Methoden dienen gleichzeitig als Inline-Dokumentation

## RichText in TypeScript initialisieren {#initialize-richtext-in-typescript}

Das folgende Beispiel initialisiert RichText in TypeScript mit Autovervollständigung aus den mitgelieferten Typdefinitionen:

~~~ts
import { Richtext } from "@dhx/richtext";

const editor = new Richtext("#root", {
    menubar: true,
    layoutMode: "document"
});
~~~

## API-Typen referenzieren {#reference-api-types}

Die TypeScript-Signaturen aller Konfigurationseigenschaften finden Sie in der [Eigenschaften-Übersicht](api/overview/properties_overview.md). Methodensignaturen finden Sie in der [Methoden-Übersicht](api/overview/methods_overview.md).
