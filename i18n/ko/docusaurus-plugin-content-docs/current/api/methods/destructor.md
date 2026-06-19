---
sidebar_label: destructor()
title: destructor 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 destructor 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 무료 30일 평가판도 다운로드할 수 있습니다.
---

# destructor()

### 설명 {#description}

@short: RichText의 모든 HTML 요소를 제거하고, 관련된 모든 이벤트를 해제합니다

### 사용법 {#usage}

~~~jsx {}
destructor(): void;
~~~

### 예제 {#example}

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

// remove RichText
editor.destructor();
~~~
