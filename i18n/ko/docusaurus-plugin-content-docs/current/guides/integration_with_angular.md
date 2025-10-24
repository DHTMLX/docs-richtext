---
sidebar_label: Angular와의 통합
title: Angular와의 통합
description: DHTMLX JavaScript RichText 라이브러리의 문서에서 Angular와의 통합 방법을 알아보세요. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# Angular와의 통합

:::tip
여기 내용을 시작하기 전에 **Angular**의 주요 개념과 패턴에 익숙해져 있으면 도움이 됩니다. 빠르게 복습하고 싶다면 [**Angular documentation**](https://v17.angular.io/docs)을 참고하세요.
:::

DHTMLX RichText는 **Angular**와 잘 호환됩니다. **Angular** 프로젝트에서 DHTMLX RichText를 사용하는 코드 샘플도 제공됩니다. 자세한 내용은 [**GitHub의 예제**](https://github.com/DHTMLX/angular-richtext-demo)를 참고하세요.

## 프로젝트 생성

:::info
새 프로젝트를 시작하기 전에 [**Angular CLI**](https://v17.angular.io/cli)와 [**Node.js**](https://nodejs.org/en/)가 설치되어 있는지 확인하세요.
:::

Angular CLI를 사용해 새로운 **my-angular-richtext-app** 프로젝트를 생성하려면 다음 명령어를 실행하세요:

~~~json
ng new my-angular-richtext-app
~~~

:::note
이 가이드를 따라하는 동안에는 Angular 앱 생성 시 Server-Side Rendering(SSR)과 Static Site Generation(SSG/Prerendering)을 비활성화하여 단순하게 진행하세요!
:::

이 명령어로 모든 준비가 완료되며, 추가 설치 과정은 필요하지 않습니다.

### 의존성 설치

새로 만든 앱 디렉토리로 이동하세요:

~~~json
cd my-angular-richtext-app
~~~

[**yarn**](https://yarnpkg.com/)을 사용해 의존성을 설치하고 개발 서버를 시작하세요:

~~~json
yarn
yarn start
~~~

앱이 로컬에서 실행됩니다(예: `http://localhost:3000`).

## RichText 생성

이제 DHTMLX RichText 소스 코드를 받아야 합니다. 앱을 잠시 중지한 후 RichText 패키지를 설치하세요.

### 1단계. 패키지 설치

[**평가판 RichText 패키지**](how_to_start.md#installing-richtext-via-npm-or-yarn)를 다운로드하고, README 파일의 안내를 따르세요. 참고로, 평가판은 30일간 사용할 수 있습니다.

### 2단계. 컴포넌트 생성

RichText를 앱에 추가하려면 새로운 Angular 컴포넌트를 만드세요. **src/app/**에 **richtext** 폴더를 만들고, **richtext.component.ts** 파일을 추가하세요.

#### 소스 파일 임포트

**richtext.component.ts** 파일을 열고 RichText 소스 파일을 임포트하세요. 임포트 경로는 다음과 같습니다:

- 로컬 폴더에서 PRO 버전을 설치한 경우:

~~~jsx
import { Richtext} from 'dhx-richtext-package';
~~~

- 평가판 사용 시:

~~~jsx
import { Richtext} from '@dhx/trial-richtext';
~~~

이 가이드에서는 **평가판** 설정 방법을 안내합니다.

#### 컨테이너 설정 및 Richtext 초기화

RichText를 페이지에 표시하려면 컨테이너를 설정하고 생성자에서 컴포넌트를 초기화하세요:

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", // "app.component.ts" 파일에서 <richtext />로 사용됨
    styleUrls: ["./richtext.component.css"], // css 파일 포함
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    // RichText용 컨테이너 초기화
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: Richtext;

    ngOnInit() {
        // RichText 컴포넌트 초기화
        this._editor = new Richtext(this.richtext_container.nativeElement, {});
    }

    ngOnDestroy(): void {
        this._editor.destructor(); // RichText 해제
    }
}
~~~

#### 스타일 추가

RichText가 올바르게 보이도록 필요한 스타일을 추가하세요. **src/app/richtext/**에 **richtext.component.css** 파일을 만들고, RichText와 컨테이너를 위한 다음 스타일을 포함하세요:

~~~css title="richtext.component.css"
/* RichText 스타일 임포트 */
@import "@dhx/trial-richtext/dist/richtext.css";

/* 초기 페이지 스타일 지정 */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
}

/* RichText 컨테이너 스타일 */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* RichText 위젯 스타일 */
.widget {
    height: calc(100% - 56px);
}
~~~

#### 데이터 로딩

RichText에 데이터를 로드하려면 데이터셋을 제공하면 됩니다. **src/app/richtext/**에 **data.ts** 파일을 만들고 샘플 데이터를 추가하세요:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

다음으로 ***richtext.component.ts*** 파일을 열고, 데이터 파일을 임포트한 뒤 `ngOnInit()` 메서드 내에서 RichText 설정에 데이터를 지정하세요:

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { getData } from "./data"; // 데이터 임포트
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", 
    styleUrls: ["./richtext.component.css"],
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: RichText;

    ngOnInit() {
        const { value } = getData(); // 데이터 프로퍼티 초기화
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            value
            // 기타 설정 프로퍼티
        });
    }

    ngOnDestroy(): void {
        this._editor.destructor(); 
    }
}
~~~

또는, `ngOnInit()`에서 [`setValue()`](api/methods/set-value.md) 메서드를 사용해 RichText에 데이터를 로드할 수도 있습니다.

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { getData } from "./data"; // 데이터 임포트
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", 
    styleUrls: ["./richtext.component.css"],
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: RichText;

    ngOnInit() {
        const { value } = getData(); // 데이터 프로퍼티 초기화
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            // 기타 설정 프로퍼티
        });

        // setValue() 메서드를 통해 데이터 적용
        this._editor.setValue({ value }); 
    }

    ngOnDestroy(): void {
        this._editor.destructor(); 
    }
}
~~~

이제 RichText 컴포넌트가 준비되었습니다. 페이지에 추가하면 지정한 데이터로 RichText가 초기화됩니다. 필요에 따라 다양한 설정 옵션을 추가할 수 있습니다. 전체 프로퍼티 목록은 [RichText API 문서](api/overview/main_overview.md)를 참고하세요.

#### 이벤트 처리

RichText에서 무언가 발생하면 이벤트가 발생합니다. 이 이벤트를 감지해 원하는 동작을 실행할 수 있습니다. [이벤트 전체 목록](api/overview/events_overview.md)도 참고하세요.

**richtext.component.ts** 파일을 열고 `ngOnInit()` 메서드를 다음과 같이 업데이트하세요:

~~~jsx {} title="richtext.component.ts"
// ...
ngOnInit() {
    this._editor = new Richtext(this.richtext_container.nativeElement, {});

    this._editor.api.on("print", () => {
        console.log("The document is printing");
    });
}

ngOnDestroy(): void {
    this._editor.destructor(); 
}
~~~

### 3단계. 앱에 RichText 추가

***RichTextComponent***를 앱에서 사용하려면, ***src/app/app.component.ts***를 열고 기본 코드를 다음과 같이 교체하세요:

~~~jsx {} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<richtext/>`
})
export class AppComponent {
    name = "";
}
~~~

이제 ***src/app/***에 ***app.module.ts***를 생성하고, 아래와 같이 *RichTextComponent*를 추가하세요:

~~~jsx {} title="app.module.ts"
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RichTextComponent } from "./richtext/richtext.component";

@NgModule({
    declarations: [AppComponent, RichTextComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
~~~

마지막으로 ***src/main.ts*** 파일을 다음 코드로 업데이트하세요:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

이제 앱을 실행하면 페이지에서 데이터와 함께 RichText가 로드된 것을 볼 수 있습니다.

import trial_richtext from '@site/static/img/trial_richtext.png';

<img
  src={trial_richtext}
  alt="Trial richtext"
  className="img_border"
/>

이렇게 하면 DHTMLX RichText를 Angular에서 사용할 준비가 끝납니다. 코드를 필요에 맞게 자유롭게 수정하세요. 전체 예제는 [**GitHub**](https://github.com/DHTMLX/angular-richtext-demo)에서 확인할 수 있습니다.
