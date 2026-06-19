---
sidebar_label: defaultStyles
title: defaultStyles Konfiguration
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die defaultStyles-Konfiguration. Lesen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# defaultStyles

### Beschreibung {#description}

@short: Optional. Legt Standard-Stilwerte für bestimmte Block-Typen fest

### Verwendung {#usage}

~~~jsx {}
defaultStyles?: {
    "*"?: { // affects all blocks, allowing you to set common properties for all of these blocks
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    p?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    blockquote?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h1?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h2?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h3?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h4?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h5?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h6?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    }
};
~~~

:::important[Wichtig]
Die Eigenschaft `defaultStyles` setzt KEINE tatsächlichen CSS-Stile auf die betroffenen Blöcke. CSS-Stile müssen separat angewendet werden:

```jsx title="index.js"
new richtext.Richtext("#root", {
    defaultStyles: {
        h2: { 
            "font-family": "Roboto",
            "font-size": "28px",
            color: "purple",
            background: "#FFC0CB"
        }
    }
});
```

```css title="index.css"
<style>
    #root h2 {
        font-family: Roboto;
        font-size: 28px;
        color: purple;
        background: #FFC0CB;
    }
</style>
```

In diesem Beispiel wird allen `h2`-Blöcken die Schriftfamilie `"Roboto"` mit einer Schriftgröße von 28px zugewiesen, wobei sowohl die Vordergrund- als auch die Hintergrundfarbe geändert werden. CSS-Stile werden den `h2`-Blöcken ebenfalls zugewiesen.
:::

### Standardkonfiguration {#default-config}

~~~jsx
const defaultStyles = {
    "*": { "font-family": "Arial" },
    p: { "font-size": "14px" },
    blockquote: { "font-size": "14px" },
    h1: { "font-size": "32px" },
    h2: { "font-size": "24px" },
    h3: { "font-size": "18px" },
    h4: { "font-size": "16px" },
    h5: { "font-size": "14px" },
    h6: { "font-size": "12px" }
};
~~~

### Beispiel {#example}

~~~jsx {3-13}
// RichText initialisieren
new richtext.Richtext("#root", {
    defaultStyles: {
        h4: {
            "font-family": "Roboto"
        },
        h5: {
            "font-family": "Roboto"
        },
        h6: {
            "font-family": "Roboto"
        }
    },
    // weitere Konfigurationseigenschaften
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in v2.0 aktualisiert

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

**Verwandtes Beispiel:** [RichText. Standardwert für Typografie ändern (Schriftart, Schriftgröße usw.)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)
