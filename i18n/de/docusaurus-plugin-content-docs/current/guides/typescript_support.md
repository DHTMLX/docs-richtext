---
sidebar_label: TypeScript-Unterstützung
title: TypeScript-Unterstützung
description: In der Dokumentation erfahren Sie, wie Sie TypeScript mit der DHTMLX JavaScript RichText-Bibliothek verwenden. Lesen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# TypeScript-Unterstützung

Ab v2.0 wird DHTMLX RichText mit integrierten TypeScript-Definitionen ausgeliefert, die keine zusätzliche Konfiguration erfordern.

:::note
Probieren Sie den Editor im <a href="https://snippet.dhtmlx.com/ziynafp7?tag=richtext" target="_blank">Snippet Tool</a> aus.
:::

## Vorteile von TypeScript

TypeScript mit DHTMLX RichText bietet Ihnen:

- Typsicherheit — der Compiler erkennt fehlerhafte Verwendung von Konfigurationseigenschaften und Methodenargumenten zur Build-Zeit
- Autovervollständigung — Ihre IDE schlägt gültige Eigenschaftsnamen, Methodensignaturen und Werttypen während der Eingabe vor
- selbstdokumentierende API — Typannotationen für das Konfigurationsobjekt und die Methoden dienen gleichzeitig als inline-Dokumentation

## RichText in TypeScript initialisieren

Das folgende Beispiel initialisiert RichText in TypeScript mit Autovervollständigung aus den mitgelieferten Typdefinitionen:

~~~ts
import { Richtext } from "@dhx/richtext";

const editor = new Richtext("#root", {
    menubar: true,
    layoutMode: "document"
});
~~~

## API-Typen referenzieren

TypeScript-Signaturen für jede Konfigurationseigenschaft finden Sie in der [Eigenschaftsübersicht](api/overview/properties_overview.md). Methodensignaturen finden Sie in der [Methodenübersicht](api/overview/methods_overview.md).
