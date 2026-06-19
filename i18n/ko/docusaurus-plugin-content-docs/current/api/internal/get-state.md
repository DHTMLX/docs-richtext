---
sidebar_label: api.getState()
title: getState 메서드
description: DHTMLX JavaScript RichText 라이브러리의 getState 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 30일 무료 평가판도 다운로드할 수 있습니다.
---

# api.getState()

### 설명 {#description}

@short: RichText의 StateStore 속성을 담은 객체를 반환합니다

### 사용법 {#usage}

~~~jsx {}
api.getState(): object;
~~~

### 반환값 {#returns}

이 메서드는 다음 파라미터를 포함하는 객체를 반환합니다:

~~~jsx {}
{     
    cursorState: {},
    defaultStyles: {},
    document: {},
    fullscreen: boolean,
    history: []
    layoutMode: string,
    popup: any,
    selection: {}
}
~~~

### 예제 {#example}

~~~jsx {5-7}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// RichText의 State 가져오기
const state = editor.api.getState();
console.log(state);
~~~

**변경 이력:** 이 메서드는 v2.0에서 추가되었습니다
