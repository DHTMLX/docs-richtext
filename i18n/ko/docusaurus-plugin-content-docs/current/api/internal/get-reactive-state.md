---
sidebar_label: api.getReactiveState()
title: getReactiveState 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 getReactiveState 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX RichText의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# api.getReactiveState()

### 설명

@short: RichText의 반응형 속성을 포함하는 객체를 제공합니다.

### 사용법

~~~jsx {}
api.getReactiveState(): object;
~~~

### 반환값

이 메서드는 다음과 같은 속성을 가진 객체를 반환합니다:

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

### 예제

~~~jsx {5-7}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 설정 속성
});
// RichText의 Reactive State 가져오기
const reactive_state = editor.api.getReactiveState();
console.log(reactive_state)
~~~

**변경 로그:** 이 메서드는 버전 2.0에서 도입되었습니다.
