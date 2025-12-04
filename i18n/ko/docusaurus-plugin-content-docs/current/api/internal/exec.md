---
sidebar_label: api.exec()
title: exec 메서드
description: DHTMLX JavaScript RichText 라이브러리 문서에서 exec 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 확인하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# api.exec()

### 설명

@short: 이 메서드는 에디터 내에서 내부 이벤트를 트리거할 수 있게 해줍니다.

### 사용법

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### 매개변수

- `event` - (필수) 트리거할 이벤트 이름
- `config` - (필수) 발생시킬 이벤트에 대한 매개변수를 포함하는 객체

### 이벤트

:::info
내부 RichText 이벤트의 전체 목록은 [**여기**](api/overview/events_overview.md)에서 확인할 수 있습니다.
:::

### 예제

~~~jsx {5-8}
// RichText 초기화
const editor = new richtext.Richtext("#root", {
    // 구성 속성
});
// 텍스트에 글꼴 크기 적용
editor.api.exec("set-font-size", {
    fontSize: "16px"
}); 
~~~

**변경 로그:** 이 메서드는 v2.0에서 도입되었습니다.
