---
sidebar_label: api.getReactiveState()
title: getReactiveState 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 getReactiveState 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText 무료 30일 평가판도 다운로드할 수 있습니다.
---

# api.getReactiveState()

### 설명 {#description}

@short: RichText의 반응형 속성이 포함된 객체를 반환합니다

### 사용법 {#usage}

~~~jsx {}
api.getReactiveState(): object;
~~~

### 반환값 {#returns}

이 메서드는 다음 매개변수를 포함하는 객체를 반환합니다:

~~~jsx {}
{
    cursorState: { subscribe: any },
    defaultStyles {...},
    document {...},
    fullscreen {...},
    history {...},
    layoutMode {...},
    popup {...},
    selection {...}
}
~~~

### 예제 {#example}

~~~jsx {5-7}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// RichText의 반응형 상태 가져오기
const reactive_state = editor.api.getReactiveState();
console.log(reactive_state)
~~~

**변경 이력:** 이 메서드는 v2.0에서 추가되었습니다
