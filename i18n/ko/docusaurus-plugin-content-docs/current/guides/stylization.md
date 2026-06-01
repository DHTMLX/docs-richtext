---
title: 스타일링
sidebar_label: 스타일링
description: DHTMLX JavaScript RichText 라이브러리 문서에서 스타일링에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX RichText의 무료 30일 평가판을 다운로드하세요.
---

# 스타일링

에디터 컨테이너 및 하위 요소의 CSS 변수를 재정의하여 DHTMLX RichText의 외관을 사용자 정의합니다.

이 가이드에서는 **다크 테마**를 적용하고 CSS 클래스 선택자로 메뉴바, 툴바, 팝업 및 콘텐츠 영역을 대상으로 지정하는 방법을 보여줍니다.

## 기본 구조와 클래스 이름

RichText는 UI를 구성하기 위해 다음과 같은 핵심 클래스를 사용합니다:

| 클래스 이름            | 설명                                        |
|------------------------|---------------------------------------------|
| `.wx-richtext`         | RichText 위젯의 루트 컨테이너               |
| `.wx-richtext-menubar` | 메뉴바를 위한 컨테이너                      |
| `.wx-richtext-menu`    | 메뉴바 드롭다운 메뉴를 위한 컨테이너        |
| `.wx-richtext-toolbar` | 툴바를 위한 컨테이너                        |
| `.wx-editor-area`      | 주 편집 가능 콘텐츠 영역을 위한 컨테이너    |

사용자 정의 CSS 선택자에 이 클래스를 사용하여 에디터의 외관을 재정의합니다.

## 기본 스타일 재정의

기본 스타일을 재정의하려면 `#root` 컨테이너 또는 특정 하위 요소에서 CSS 변수를 다시 정의합니다:

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

:::note
이 스타일은 어두운 배경을 적용하고, 버튼과 아이콘 색상을 조정하며, 다크 UI 테마에 대한 가시성을 개선합니다.
:::

## 지원되는 CSS 변수

| 변수 이름                    | 설명                                 |
| ---------------------------- | ------------------------------------ |
| `--wx-background`            | 에디터 및 팝업의 배경 색상           |
| `--wx-background-alt`        | 메뉴바의 대체 배경                   |
| `--wx-color-primary`         | 링크, 인용문 및 이미지 크기 조정 핸들의 강조 색상 |
| `--wx-color-font`            | 메인 글꼴 색상 (에디터, 메뉴바 및 툴바용)|
| `--wx-color-font-alt`        | 대체 글꼴 색상                       |
| `--wx-color-font-disabled`   | 비활성화된 텍스트 색상 (메뉴바 및 툴바 요소용)|
| `--wx-border`                | 에디터 전반에 사용되는 테두리 스타일 |
| `--wx-color-secondary-hover` | 메뉴바 및 툴바 내 버튼에 대한 호버 상태 배경 |
| `--wx-button-active`         | 메뉴바 및 툴바 내 버튼에 대한 활성 상태 배경 |
| `--wx-icon-color`            | 툴바 드롭다운 화살표 아이콘의 색상   |
| `--wx-popup-border`          | 팝업 요소의 테두리                   |

## 모범 사례

* 다크 모드에서 네이티브 입력 스타일을 개선하려면 `color-scheme: dark` 를 사용하세요
* 강력한 이유 없이 레이아웃 관련 속성(예: `display`, `position`)을 변경하지 마세요

:::tip
태그별 타이포그래피(`h1`, `p`, `blockquote` 및 기타 블록 태그에 대한 글꼴 패밀리, 글꼴 크기, 색상, 배경)에는 일치하는 CSS 규칙과 함께 [`defaultStyles`](api/config/default-styles.md) 설정 속성을 사용하세요. 전체 패턴은 [설정 가이드](guides/configuration.md#configure-default-styles)를 참조하세요.
:::

## 라이브 데모

아래 예제는 RichText에 사용자 정의 스타일을 적용합니다:

<iframe src="https://snippet.dhtmlx.com/q8j4qqq9?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**관련 문서:** [설정](guides/configuration.md)
