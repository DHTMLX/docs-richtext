---
title: 스타일링
sidebar_label: 스타일링
description: DHTMLX JavaScript RichText 라이브러리의 문서에서 스타일링에 대해 알아보세요. 개발자 가이드와 API 레퍼런스를 둘러보고, 코드 예제와 라이브 데모를 직접 사용해보고, DHTMLX RichText의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# 스타일링

DHTMLX RichText는 CSS 변수 또는 위젯의 특정 부분을 대상으로 하는 커스텀 스타일을 사용하여 어떤 스타일에도 맞게 꾸밀 수 있습니다.

여기서는 **다크 테마**를 설정하고, menubar, toolbar, popup, content area 등 에디터의 다양한 부분을 클래스 이름으로 스타일링하는 방법을 간단히 안내합니다.

## 기본 구조와 클래스 이름

RichText는 UI 레이아웃을 위해 다음과 같은 주요 클래스를 사용합니다:

| 클래스 이름                | 설명                                         |
|---------------------------|----------------------------------------------|
| `.wx-richtext`            | RichText 위젯의 루트 컨테이너                |
| `.wx-richtext-menubar`    | menubar의 컨테이너                           |
| `.wx-richtext-menu`       | menubar 드롭다운 메뉴의 컨테이너             |
| `.wx-richtext-toolbar`    | toolbar의 컨테이너                           |
| `.wx-editor-area`         | 주요 편집 가능한 콘텐츠 영역의 컨테이너      |

이 클래스들은 CSS에서 RichText 에디터의 외관을 조정하는 데 사용할 수 있습니다.

## 기본 스타일 덮어쓰기

RichText에 맞춤 스타일을 적용하려면, `#root` 컨테이너나 특정 하위 요소에 CSS 변수를 업데이트하세요:

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
이 설정은 에디터에 다크 배경을 적용하고, 버튼 및 아이콘 색상을 업데이트하며, 다크 UI에서 요소들을 더 잘 보이도록 해줍니다.
:::

## 지원되는 CSS 변수 목록

| 변수 이름                   | 설명                                                              |
|----------------------------|-------------------------------------------------------------------|
| `--wx-background`           | 에디터 및 팝업의 배경색                                           |
| `--wx-background-alt`       | menubar의 대체 배경색                                             |
| `--wx-color-primary`        | 링크, blockquote, 이미지 리사이즈 테두리 등 강조 색상             |
| `--wx-color-font`           | 에디터, menubar, toolbar의 기본 폰트 색상                         |
| `--wx-color-font-alt`       | 대체 폰트 색상                                                    |
| `--wx-color-font-disabled`  | menubar 및 toolbar 요소의 비활성 텍스트 색상                       |
| `--wx-border`               | 에디터 전반에 사용되는 테두리 스타일                              |
| `--wx-color-secondary-hover`| menubar 및 toolbar 내 버튼의 hover 상태 배경색                     |
| `--wx-button-active`        | menubar 및 toolbar 내 버튼의 active 상태 배경색                    |
| `--wx-icon-color`           | 드롭다운에 사용되는 toolbar 화살표 아이콘 색상                     |
| `--wx-popup-border`         | 팝업 요소의 테두리                                                |

## 권장 사항

* `color-scheme: dark` 속성은 다크 모드에서 네이티브 input 요소가 올바르게 보이도록 도와줍니다.
* 특별한 이유가 없다면, `display`나 `position`과 같은 레이아웃 관련 CSS 속성은 변경하지 않는 것이 좋습니다.

## 라이브 데모

아래는 RichText에 커스텀 스타일을 적용하는 간단한 예시입니다:

<iframe src="https://snippet.dhtmlx.com/q8j4qqq9?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**관련 문서:** [Customization](guides/configuration.md)
