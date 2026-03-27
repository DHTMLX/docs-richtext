---
title: 스타일링
sidebar_label: 스타일링
description: DHTMLX JavaScript RichText 라이브러리 문서에서 스타일링 방법을 확인하실 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# 스타일링

CSS 변수를 재정의하고 위젯의 특정 부분에 사용자 정의 스타일을 적용하여 DHTMLX RichText의 외관을 완전히 커스터마이즈할 수 있습니다.

이 가이드에서는 **다크 테마**를 적용하는 방법과, 편집기의 menubar, toolbar, 팝업, 콘텐츠 영역을 스타일링하는 데 사용할 수 있는 클래스 이름을 설명합니다.

## 기본 구조와 클래스 이름 {#default-structure-and-class-names}

RichText는 다음과 같은 핵심 클래스를 사용하여 UI를 구성합니다:

| 클래스 이름             | 설명                                        |
|------------------------|---------------------------------------------|
| `.wx-richtext`         | RichText 위젯의 루트 컨테이너               |
| `.wx-richtext-menubar` | menubar 컨테이너                            |
| `.wx-richtext-menu`    | menubar 드롭다운 메뉴 컨테이너              |
| `.wx-richtext-toolbar` | toolbar 컨테이너                            |
| `.wx-editor-area`      | 메인 편집 가능 콘텐츠 영역 컨테이너         |

이러한 클래스를 사용자 정의 CSS 선택자에 사용하여 RichText 편집기의 외관을 재정의할 수 있습니다.

## 기본 스타일 재정의 {#overriding-default-styles}

`#root` 컨테이너 또는 특정 하위 요소에서 CSS 변수를 재정의하여 RichText의 기본 스타일을 재정의할 수 있습니다:

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
이 스타일을 적용하면 어두운 배경이 설정되고, 버튼 및 아이콘 색상이 조정되며, 다크 UI 테마에서의 가시성이 개선됩니다.
:::

## 지원되는 CSS 변수 목록 {#list-of-supported-css-variables}

| 변수 이름                    | 설명                                         |
| ---------------------------- | -------------------------------------------- |
| `--wx-background`            | 편집기 및 팝업의 배경색                       |
| `--wx-background-alt`        | menubar의 대체 배경색                         |
| `--wx-color-primary`         | 링크, 인용구, 이미지 크기 조정 테두리의 강조색 |
| `--wx-color-font`            | 주요 글꼴 색상 (편집기, menubar, toolbar)     |
| `--wx-color-font-alt`        | 대체 글꼴 색상                                |
| `--wx-color-font-disabled`   | 비활성화된 텍스트 색상 (menubar 및 toolbar 요소) |
| `--wx-border`                | 편집기 전반에 사용되는 테두리 스타일          |
| `--wx-color-secondary-hover` | menubar 및 toolbar 내 버튼의 hover 상태 배경  |
| `--wx-button-active`         | menubar 및 toolbar 내 버튼의 활성 상태 배경   |
| `--wx-icon-color`            | 드롭다운에 사용되는 toolbar 화살표 아이콘 색상 |
| `--wx-popup-border`          | 팝업 요소의 테두리                            |

## 모범 사례 {#best-practices}

* 다크 모드에서 네이티브 입력 스타일링을 개선하려면 `color-scheme: dark`를 사용하십시오
* 꼭 필요한 경우가 아니라면 레이아웃 관련 속성 (`display`, `position` 등)의 변경을 피하십시오

## 라이브 데모 {#live-demo}

이 스니펫에서 RichText에 사용자 정의 스타일을 적용하는 방법을 확인할 수 있습니다:

<iframe src="https://snippet.dhtmlx.com/q8j4qqq9?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**관련 문서:** [Customization](guides/configuration.md)
