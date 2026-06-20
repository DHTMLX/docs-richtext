---
title: 스타일링
sidebar_label: 스타일링
description: DHTMLX JavaScript RichText 라이브러리 문서에서 스타일링에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 체험해 보세요. DHTMLX RichText의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 스타일링

에디터의 컨테이너와 하위 요소에 CSS 변수를 재정의하여 DHTMLX RichText의 외관을 사용자 정의할 수 있습니다.

이 가이드에서는 **다크 테마**를 적용하는 방법과 CSS 클래스 선택자를 사용하여 메뉴바, 툴바, 팝업, 콘텐츠 영역을 대상으로 스타일을 지정하는 방법을 설명합니다.

## 기본 구조와 클래스 이름 {#default-structure-and-class-names}

RichText는 다음의 핵심 클래스를 사용하여 UI를 구성합니다.

| 클래스 이름             | 설명                                        |
|------------------------|---------------------------------------------|
| `.wx-richtext`         | RichText 위젯의 루트 컨테이너               |
| `.wx-richtext-menubar` | 메뉴바 컨테이너                             |
| `.wx-richtext-menu`    | 메뉴바 드롭다운 메뉴 컨테이너              |
| `.wx-richtext-toolbar` | 툴바 컨테이너                               |
| `.wx-editor-area`      | 주 편집 가능 콘텐츠 영역 컨테이너          |

이 클래스들을 사용자 정의 CSS 선택자에서 사용하여 에디터의 외관을 재정의할 수 있습니다.

## 기본 스타일 재정의 {#override-default-styles}

기본 스타일을 재정의하려면 `#root` 컨테이너 또는 특정 하위 요소에서 CSS 변수를 재정의합니다.

```html
<div id="root" style="width: 100%; height: 100%;"></div>

<style>
  #root,
  .wx-richtext-menu {
    --wx-background: #404151;
    --wx-background-alt: #212329;
    --wx-color-primary: #14B195;
    --wx-color-font: #FFFFFF;
    --wx-border: 1px solid #6B6C79;
    --wx-color-secondary-hover: rgba(20, 177, 149, 0.12);
    --wx-button-active: rgba(20, 177, 149, 0.22);
    --wx-icon-color: var(--wx-color-font);
    --wx-color-font-alt: #9FA1AE;
    --wx-color-font-disabled: #9FA1AE;
    --wx-popup-border: var(--wx-border);

    color-scheme: dark;
  }

  .wx-richtext-menu {
    border: var(--wx-border);
  }
</style>
```

:::note[참고]
이 스타일은 어두운 배경을 적용하고, 버튼 및 아이콘 색상을 조정하며, 다크 UI 테마에서의 가독성을 개선합니다.
:::

## 지원되는 CSS 변수 {#supported-css-variables}

| 변수 이름                    | 설명                                                                 |
| ---------------------------- | -------------------------------------------------------------------- |
| `--wx-background`            | 에디터와 팝업의 배경색                                               |
| `--wx-background-alt`        | 메뉴바의 대체 배경색                                                 |
| `--wx-color-primary`         | 링크, 인용구, 이미지 크기 조절 핸들의 강조 색상                     |
| `--wx-color-font`            | 기본 글꼴 색상 (에디터, 메뉴바, 툴바에 적용)                        |
| `--wx-color-font-alt`        | 대체 글꼴 색상                                                       |
| `--wx-color-font-disabled`   | 비활성화된 텍스트 색상 (메뉴바 및 툴바 요소에 적용)                 |
| `--wx-border`                | 에디터 전체에서 사용되는 테두리 스타일                               |
| `--wx-color-secondary-hover` | 메뉴바 및 툴바 내 버튼의 호버 상태 배경색                           |
| `--wx-button-active`         | 메뉴바 및 툴바 내 버튼의 활성 상태 배경색                           |
| `--wx-icon-color`            | 툴바 드롭다운 화살표 아이콘의 색상                                   |
| `--wx-popup-border`          | 팝업 요소의 테두리                                                   |

## 권장 사항 {#best-practices}

* 다크 모드에서 기본 입력 요소의 스타일을 개선하려면 `color-scheme: dark`를 사용하세요.
* 강한 이유 없이 레이아웃 관련 속성(`display`, `position` 등)을 변경하지 않는 것이 좋습니다.

:::tip[팁]
태그별 타이포그래피(글꼴 패밀리, 글꼴 크기, 색상, `h1`, `p`, `blockquote` 및 기타 블록 태그의 배경)를 지정하려면 [`defaultStyles`](api/config/default-styles.md) 설정 속성에 적절한 CSS 규칙을 사용하세요. 전체 패턴은 [설정 가이드](guides/configuration.md#configure-default-styles)를 참고하세요.
:::

## 라이브 데모 {#live-demo}

아래 예제는 RichText에 사용자 정의 스타일을 적용한 모습입니다.

<iframe src="https://snippet.dhtmlx.com/q8j4qqq9?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**관련 문서:** [설정](guides/configuration.md)
