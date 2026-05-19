---
sidebar_label: defaultStyles
title: defaultStyles Config
description: DHTMLX JavaScript RichText 라이브러리 문서에서 defaultStyles config에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 30일 무료 평가판도 다운로드할 수 있습니다.
---

# defaultStyles

### 설명

@short: 선택 사항. 특정 블록 유형에 대한 기본 스타일 값을 지정합니다

### 사용법

~~~jsx {}
defaultStyles?: {
    "*"?: { // 모든 블록에 영향을 미치며, 모든 블록에 공통 속성을 설정할 수 있습니다
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

:::important
`defaultStyles` 속성은 영향을 받는 블록에 실제 CSS를 적용하지 않습니다. CSS 스타일은 별도로 적용해야 합니다:

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

이 예제에서 모든 `h2` 블록에는 font-size 28px의 `"Roboto"` font-family가 지정되며, 전경색과 배경색도 함께 변경됩니다. CSS 스타일 역시 `h2` 블록에 적용됩니다.
:::

### 기본 config

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

### 예제

~~~jsx {3-13}
// initialize RichText
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
    // other configuration properties
});
~~~

**변경 로그:** v2.0에서 속성이 업데이트되었습니다

**관련 문서:** [Configuration](guides/configuration.md)

**관련 샘플:** [RichText. Changing the default value for typography (font, font size, etc.)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)
