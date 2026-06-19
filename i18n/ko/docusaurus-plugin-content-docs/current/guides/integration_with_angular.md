---
sidebar_label: Angular와의 통합
title: Angular와의 통합
description: DHTMLX JavaScript RichText 라이브러리 문서에서 Angular와의 통합에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 확인하며, DHTMLX RichText 30일 무료 평가판을 다운로드하세요.
---

# Angular와의 통합 {#integration-with-angular}

:::tip[팁]
Angular의 기본 개념과 패턴을 먼저 숙지하시기 바랍니다. 복습이 필요하시면 [Angular 문서](https://v17.angular.io/docs)를 참고하세요.
:::

DHTMLX RichText는 Angular와 함께 사용할 수 있습니다. 전체 코드 예제는 [GitHub 데모](https://github.com/DHTMLX/angular-richtext-demo)를 참고하세요.

## 프로젝트 생성 {#create-a-project}

:::info[정보]
새 프로젝트를 생성하기 전에 [Angular CLI](https://v17.angular.io/cli)와 [Node.js](https://nodejs.org/en/)를 먼저 설치하세요.
:::

Angular CLI를 사용하여 *my-angular-richtext-app* 프로젝트를 생성합니다.

~~~bash
ng new my-angular-richtext-app
~~~

:::note[참고]
프로젝트 생성 중 Angular CLI가 묻는 경우, 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG/Prerendering)을 비활성화하세요.
:::

이 명령어는 필요한 모든 도구를 설치합니다. 추가 명령어는 필요하지 않습니다.

### 의존성 설치 {#install-dependencies}

새 앱 디렉터리로 이동합니다.

~~~bash
cd my-angular-richtext-app
~~~

[yarn](https://yarnpkg.com/) 패키지 매니저로 의존성을 설치하고 개발 서버를 시작합니다.

~~~bash
yarn
yarn start
~~~

앱은 localhost에서 실행됩니다(예: `http://localhost:3000`).

## RichText 생성 {#create-richtext}

앱을 중지하고 RichText 패키지를 설치합니다.

### 1단계. 패키지 설치 {#step-1-install-the-package}

[RichText 트라이얼 패키지](/how_to_start/#installing-richtext-via-npm-or-yarn)를 다운로드하고 README 파일의 단계를 따라 진행하세요. 트라이얼 라이선스는 30일 동안 유효합니다.

### 2단계. 컴포넌트 생성 {#step-2-create-the-component}

애플리케이션에 RichText를 추가할 Angular 컴포넌트를 생성합니다. *src/app/* 디렉터리에 *richtext* 폴더를 만들고 *richtext.component.ts* 파일을 추가하세요.

#### 소스 파일 가져오기 {#import-source-files}

*richtext.component.ts*를 열고 RichText 소스 파일을 가져옵니다.

로컬 폴더에 설치된 PRO 버전의 경우 다음을 사용하세요.

~~~jsx
import { Richtext } from 'dhx-richtext-package';
~~~

트라이얼 버전의 경우 다음을 사용하세요.

~~~jsx
import { Richtext } from '@dhx/trial-richtext';
~~~

이 튜토리얼에서는 RichText 트라이얼 버전을 사용합니다.

#### 컨테이너 설정 및 RichText 초기화 {#set-the-container-and-initialize-richtext}

RichText의 컨테이너 요소를 설정하고 `ngOnInit()` 내부에서 `Richtext` 생성자로 컴포넌트를 초기화합니다. 정리를 위해 `ngOnDestroy()` 내부에서 [`destructor()`](api/methods/destructor.md) 메서드를 호출하세요.

~~~jsx {} title="richtext.component.ts"
import { Richtext } from '@dhx/trial-richtext';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", // app.component.ts에서 <richtext />로 "richtext" 셀렉터를 사용합니다
    styleUrls: ["./richtext.component.css"], // css 파일을 포함합니다
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    // RichText 컨테이너
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: Richtext;

    ngOnInit() {
        // RichText 컴포넌트를 초기화합니다
        this._editor = new Richtext(this.richtext_container.nativeElement, {});
    }

    ngOnDestroy(): void {
        this._editor.destructor(); // RichText를 삭제합니다
    }
}
~~~

#### 스타일 추가 {#add-styles}

*src/app/richtext/* 디렉터리에 *richtext.component.css* 파일을 생성하고 RichText와 컨테이너에 대한 스타일을 추가합니다.

~~~css title="richtext.component.css"
/* RichText 스타일 가져오기 */
@import "@dhx/trial-richtext/dist/richtext.css";

/* 기본 페이지 스타일 */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
}

/* RichText 컨테이너 */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* RichText 위젯 */
.widget {
    height: calc(100% - 56px);
}
~~~

#### 데이터 로드 {#load-data}

RichText에 데이터를 제공합니다. *src/app/richtext/* 디렉터리에 *data.ts* 파일을 생성하세요.

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

*richtext.component.ts*를 열고, 데이터를 가져온 뒤 `ngOnInit()` 내부에서 `value` 속성을 RichText 설정에 전달합니다.

~~~jsx {} title="richtext.component.ts"
import { Richtext } from '@dhx/trial-richtext';
import { getData } from "./data"; // 데이터를 가져옵니다
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

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

    private _editor!: Richtext;

    ngOnInit() {
        const { value } = getData(); // 데이터 모듈에서 value를 추출합니다
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            value
            // 기타 설정 속성 
        });
    }

    ngOnDestroy(): void {
        this._editor.destructor(); 
    }
}
~~~

또는 `ngOnInit()` 내부에서 [`setValue()`](api/methods/set-value.md) 메서드를 호출하여 RichText에 데이터를 로드할 수도 있습니다.

~~~jsx {} title="richtext.component.ts"
import { Richtext } from '@dhx/trial-richtext';
import { getData } from "./data"; // 데이터를 가져옵니다
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

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

    private _editor!: Richtext;

    ngOnInit() {
        const { value } = getData(); // 데이터 모듈에서 value를 추출합니다
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            // 기타 설정 속성 
        });

        // setValue() 메서드를 통해 데이터를 적용합니다
        this._editor.setValue(value); 
    }

    ngOnDestroy(): void {
        this._editor.destructor(); 
    }
}
~~~

RichText 컴포넌트를 사용할 준비가 완료되었습니다. `<richtext/>` 요소가 마운트되면 Angular가 데이터와 함께 에디터를 렌더링합니다. 전체 설정 옵션 목록은 [RichText API 개요](api/overview/main_overview.md)를 참고하세요.

#### 이벤트 처리 {#handle-events}

RichText는 사용자 동작에 따라 이벤트를 발생시킵니다. [`api.on()`](api/internal/on.md) 메서드로 이벤트를 구독하여 사용자 입력에 반응하세요. [전체 이벤트 목록](api/overview/events_overview.md)을 참고하세요.

*richtext.component.ts*를 열고 `ngOnInit()` 메서드를 업데이트합니다. 아래 예제는 [`print`](api/events/print.md) 이벤트가 발생할 때마다 메시지를 콘솔에 출력합니다.

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

### 3단계. 앱에 RichText 추가 {#step-3-add-richtext-to-the-app}

*src/app/app.component.ts*를 열고 기본 코드를 `<richtext/>` 셀렉터로 교체합니다.

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

*src/app/app.module.ts*를 생성하고 `RichTextComponent`를 선언합니다.

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

*src/main.ts*를 열고 내용을 부트스트랩 코드로 교체합니다.

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

앱을 시작하여 페이지에 데이터와 함께 RichText가 렌더링되는지 확인합니다.

<div className="img_border">
![RichText 초기화](../assets/trial_richtext.png)
</div>

이제 Angular에서 RichText 통합이 완성되었습니다. 필요에 맞게 코드를 커스터마이즈하세요. 전체 예제는 [GitHub](https://github.com/DHTMLX/angular-richtext-demo)에서 확인할 수 있습니다.
