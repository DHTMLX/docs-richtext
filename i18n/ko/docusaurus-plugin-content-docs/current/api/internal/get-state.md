---
sidebar_label: api.getState()
title: getState 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 getState 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX RichText의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# api.getState()

### 설명

@short: RichText의 현재 StateStore 속성을 포함하는 객체를 제공합니다.

### 사용법

~~~jsx {}
api.getState(): object;
~~~

### 반환값

이 메서드는 다음 속성을 가진 객체를 반환합니다:

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

### 예제

~~~jsx {5-7}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// RichText의 현재 상태를 가져옴
const state = editor.api.getState();
console.log(state);
~~~

**변경 로그:** 이 메서드는 v2.0에 추가되었습니다.
