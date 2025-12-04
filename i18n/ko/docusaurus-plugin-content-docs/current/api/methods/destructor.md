---
sidebar_label: destructor()
title: destructor 메서드
description: DHTMLX JavaScript RichText 라이브러리의 destructor 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# destructor()

### 설명

@short: RichText 컴포넌트의 모든 HTML 요소를 제거하고 관련된 모든 이벤트를 분리합니다.

### 사용법

~~~jsx {}
destructor(): void;
~~~

### 예제

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});

// RichText 제거
editor.destructor();
~~~
