---
sidebar_label: Angular와의 통합
title: Angular와의 통합
description: DHTMLX JavaScript RichText 라이브러리 문서에서 Angular와의 통합 방법을 확인하실 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# Angular와의 통합

:::tip[팁]
이 문서를 읽기 전에 **Angular**의 기본 개념과 패턴에 익숙해지시기 바랍니다. 지식을 복습하려면 [**Angular 문서**](https://v17.angular.io/docs)를 참조하십시오.
:::

DHTMLX RichText는 **Angular**와 호환됩니다. DHTMLX RichText를 **Angular**와 함께 사용하는 방법에 대한 코드 예제를 준비했습니다. 자세한 내용은 해당 [**GitHub 예제**](https://github.com/DHTMLX/angular-richtext-demo)를 참조하십시오.

## 프로젝트 생성하기 {#creating-a-project}

:::info[정보]
새 프로젝트를 시작하기 전에 [**Angular CLI**](https://v17.angular.io/cli)와 [**Node.js**](https://nodejs.org/en/)를 설치하십시오.
:::

Angular CLI를 사용하여 새 **my-angular-richtext-app** 프로젝트를 생성합니다. 다음 명령어를 실행하십시오:

~~~json
ng new my-angular-richtext-app
~~~

:::note[참고]
이 가이드를 따르려면 새 Angular 앱을 생성할 때 Server-Side Rendering (SSR)과 Static Site Generation (SSG/Prerendering)을 비활성화하십시오!
:::

위 명령어는 필요한 모든 도구를 설치하므로 추가 명령어를 실행할 필요가 없습니다.

### 의존성 설치 {#installation-of-dependencies}

새로 생성된 앱 폴더로 이동합니다:

~~~json
cd my-angular-richtext-app
~~~

의존성을 설치하고 dev server를 시작합니다. 이를 위해 [**yarn**](https://yarnpkg.com/) 패키지 매니저를 사용합니다:

~~~json
yarn
yarn start
~~~

앱은 localhost에서 실행됩니다 (예: `http://localhost:3000`).

## RichText 생성하기 {#creating-richtext}

이제 DHTMLX RichText 소스 코드를 가져와야 합니다. 먼저 앱을 중지하고 RichText 패키지 설치를 진행합니다.

### 1단계: 패키지 설치 {#step-1-package-installation}

[**trial RichText 패키지**](/how_to_start/#installing-richtext-via-npm-or-yarn)를 다운로드하고 README 파일에 설명된 단계를 따르십시오. trial RichText는 30일 동안만 사용 가능합니다.

### 2단계: 컴포넌트 생성 {#step-2-component-creation}

이제 애플리케이션에 RichText를 추가하기 위한 Angular 컴포넌트를 생성해야 합니다. **src/app/** 폴더에 **richtext** 폴더를 생성하고, 그 안에 새 파일을 추가하여 **richtext.component.ts**로 이름을 지정합니다.

#### 소스 파일 가져오기 {#import-source-files}

**richtext.component.ts** 파일을 열고 RichText 소스 파일을 가져옵니다. 참고 사항:

- PRO 버전을 사용하고 로컬 폴더에서 RichText 패키지를 설치한 경우, 가져오기 경로는 다음과 같습니다:

~~~jsx
import { Richtext} from 'dhx-richtext-package';
~~~

- trial 버전의 RichText를 사용하는 경우, 다음 경로를 지정하십시오:

~~~jsx
import { Richtext} from '@dhx/trial-richtext';
~~~

이 튜토리얼에서는 RichText의 **trial** 버전을 구성하는 방법을 확인할 수 있습니다.

#### 컨테이너 설정 및 RichText 초기화 {#set-containers-and-initialize-the-richtext}

페이지에 RichText를 표시하려면 RichText용 컨테이너를 설정하고 해당 생성자를 사용하여 컴포넌트를 초기화해야 합니다:

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", // "app.component.ts" 파일에서 <richtext />로 사용되는 템플릿 이름
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
        this._editor.destructor(); // RichText 소멸
    }
}
~~~

#### 스타일 추가 {#adding-styles}

RichText를 올바르게 표시하려면 해당 스타일을 제공해야 합니다. 이를 위해 **src/app/richtext/** 폴더에 **richtext.component.css** 파일을 생성하고 RichText 및 컨테이너에 대한 중요한 스타일을 지정합니다:

~~~css title="richtext.component.css"
/* RichText 스타일 가져오기 */
@import "@dhx/trial-richtext/dist/richtext.css";

/* 초기 페이지 스타일 지정 */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
}

/* RichText 컨테이너 스타일 지정 */
.component_container {
    height: 100%;
    margin: 0 auto;
}

/* RichText 위젯 스타일 지정 */
.widget {
    height: calc(100% - 56px);
}
~~~

#### 데이터 로드하기 {#loading-data}

RichText에 데이터를 추가하려면 데이터 세트를 제공해야 합니다. **src/app/richtext/** 폴더에 **data.ts** 파일을 생성하고 데이터를 추가합니다:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

그런 다음 ***richtext.component.ts*** 파일을 엽니다. 데이터가 있는 파일을 가져오고, 아래와 같이 `ngOnInit()` 메서드 내에서 RichText의 구성 객체에 해당 데이터 속성을 지정합니다:

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { getData } from "./data"; // 데이터 가져오기
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
        const { value } = getData(); // 데이터 속성 초기화
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            value
            // 다른 구성 속성들
        });
    }

    ngOnDestroy(): void {
        this._editor.destructor();
    }
}
~~~

Angular의 `ngOnInit()` 메서드 내에서 [`setValue()`](api/methods/set-value.md) 메서드를 사용하여 RichText에 데이터를 로드할 수도 있습니다.

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { getData } from "./data"; // 데이터 가져오기
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
        const { value } = getData(); // 데이터 속성 초기화
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            // 다른 구성 속성들
        });

        // setValue() 메서드를 통해 데이터 적용
        this._editor.setValue({ value });
    }

    ngOnDestroy(): void {
        this._editor.destructor();
    }
}
~~~

이제 RichText 컴포넌트를 사용할 준비가 되었습니다. 요소가 페이지에 추가되면 데이터와 함께 RichText가 초기화됩니다. 필요한 구성 설정도 제공할 수 있습니다. [RichText API 문서](api/overview/main_overview.md)를 방문하여 사용 가능한 전체 속성 목록을 확인하십시오.

#### 이벤트 처리 {#handling-events}

사용자가 RichText에서 어떤 동작을 수행하면 이벤트가 발생합니다. 이러한 이벤트를 사용하여 동작을 감지하고 원하는 코드를 실행할 수 있습니다. [전체 이벤트 목록](api/overview/events_overview.md)을 참조하십시오.

**richtext.component.ts** 파일을 열고 `ngOnInit()` 메서드를 다음과 같이 완성합니다:

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

### 3단계: 앱에 RichText 추가하기 {#step-3-adding-richtext-into-the-app}

***RichTextComponent*** 컴포넌트를 앱에 추가하려면 ***src/app/app.component.ts*** 파일을 열고 기본 코드를 다음으로 교체합니다:

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

그런 다음 ***src/app/*** 폴더에 ***app.module.ts*** 파일을 생성하고 아래와 같이 *RichTextComponent*를 지정합니다:

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

마지막으로 ***src/main.ts*** 파일을 열고 기존 코드를 다음으로 교체합니다:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

이후 앱을 시작하면 페이지에 데이터가 로드된 RichText를 확인할 수 있습니다.

<div className="img_border">
![RichText 초기화](../assets/trial_richtext.png)
</div>

이제 DHTMLX RichText를 Angular와 통합하는 방법을 알게 되었습니다. 요구 사항에 맞게 코드를 커스터마이즈할 수 있습니다. 최종 고급 예제는 [**GitHub**](https://github.com/DHTMLX/angular-richtext-demo)에서 확인할 수 있습니다.
