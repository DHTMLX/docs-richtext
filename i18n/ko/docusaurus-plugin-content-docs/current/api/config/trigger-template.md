---
sidebar_label: triggerTemplate
title: triggerTemplate Config
description: DHTMLX JavaScript RichText 라이브러리의 triggerTemplate 설정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX RichText 30일 무료 평가판을 다운로드할 수도 있습니다.
---

# triggerTemplate

### 설명 {#description}

@short: 선택 사항입니다. [`triggers`](api/config/triggers.md) 항목에 의해 열리는 제안 드롭다운에서 RichText가 항목을 렌더링하는 방식을 커스터마이징합니다.

기본적으로 드롭다운은 각 항목의 `label`을 일반 텍스트로 표시합니다. `triggerTemplate`을 사용하면 아바타, 이름, 이메일 등을 포함한 더 풍부한 행을 렌더링할 수 있습니다.

### 사용법 {#usage}

~~~jsx {}
function triggerTemplate({ data, trigger }) {
    return "HTML template of the suggestion item";
};
~~~

### 매개변수 {#parameters}

callback 함수는 다음 매개변수를 가진 객체를 받습니다:

- `data` - 현재 제안 항목 (`{ id, label, url }`, 그리고 trigger의 `data` 소스에 추가한 모든 커스텀 필드 포함)
- `trigger` - 드롭다운을 연 trigger 문자 (`"@"`, `"#"` 등)

:::tip[팁]
드롭다운의 기본 너비는 `160px`입니다. 템플릿에 더 많은 공간이 필요한 경우, 선택자 앞에 `.wx-editor` 부모를 추가하세요:

~~~css {}
.wx-editor .wx-suggest-anchor {
    width: 220px;
}
~~~
:::

### 예제 {#example}

다음 코드 스니펫은 두 가지 trigger를 설정합니다: 멘션용 `@`와 태그용 `#`입니다. `triggerTemplate`을 사용하여 `trigger` 값을 확장하고 각 드롭다운을 다르게 렌더링합니다. `@` 드롭다운의 경우 템플릿은 아바타(`data.image`), 닉네임(`data.label`), 전체 이름(`data.name`)을 포함한 커스텀 HTML 행을 반환합니다. `#` trigger의 경우 템플릿은 `label`을 사용합니다:

~~~jsx {5-6,8-15}
const { template, Richtext } = richtext;

new Richtext("#root", {
    triggers: [
        { trigger: "@", data: people },
        { trigger: "#", data: tags }
    ],
    triggerTemplate: template(obj => {
        if (obj.trigger === "@") {
            return `<div class="user">
                <img class="user-avatar" src="${obj.data.image}">
                <div class="user-nickname">${obj.data.label}</div>
                <div class="user-name">${obj.data.name}</div>
            </div>`;
        }
        // 다른 트리거(예: "#")는 일반 레이블을 사용합니다
        return obj.data.label;
    })
});
~~~

**변경 이력:** 이 속성은 v2.1에서 추가되었습니다.

**관련 샘플:**

- [RichText. 트리거별 커스텀 드롭다운 템플릿](https://snippet.dhtmlx.com/0p3bbnhz?tag=richtext)
- [RichText. 이모지 자동 완성](https://snippet.dhtmlx.com/g5z1d868?tag=richtext)

**관련 문서:** [멘션과 태그](guides/mentions_and_tags.md)
