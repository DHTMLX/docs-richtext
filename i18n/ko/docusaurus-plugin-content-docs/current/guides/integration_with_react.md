---
sidebar_label: React와의 통합
title: React와의 통합
description: DHTMLX JavaScript RichText 라이브러리 문서에서 React와의 통합 방법을 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# React와의 통합 {#integration-with-react}

:::tip[팁]
[React](https://react.dev)의 기본 개념과 패턴을 숙지하고 있는지 확인하십시오. 복습이 필요한 경우 [React 문서](https://react.dev/learn)를 참고하십시오.
:::

DHTMLX RichText는 React와 함께 동작합니다. 전체 코드 예제는 [GitHub 데모](https://github.com/DHTMLX/react-richtext-demo)를 참고하십시오.

## 프로젝트 생성 {#create-a-project}

:::info[정보]
새 프로젝트를 생성하기 전에 [Node.js](https://nodejs.org/en/)와 (선택적으로) [Vite](https://vite.dev/)를 설치하십시오.
:::

Create React App으로 새 *my-react-richtext-app* 프로젝트를 생성합니다:

~~~bash
npx create-react-app my-react-richtext-app
~~~

### 의존성 설치 {#install-dependencies}

새 앱 디렉토리로 이동합니다:

~~~bash
cd my-react-richtext-app
~~~

패키지 매니저를 사용하여 의존성을 설치하고 개발 서버를 시작합니다.

[yarn](https://yarnpkg.com/)을 사용하는 경우 실행합니다:

~~~bash
yarn
yarn start
~~~

[npm](https://www.npmjs.com/)을 사용하는 경우 실행합니다:

~~~bash
npm install
npm start
~~~

앱은 localhost에서 실행됩니다 (예: `http://localhost:3000`).

## RichText 생성 {#create-richtext}

앱을 중지하고 RichText 패키지를 설치합니다.

### 1단계. 패키지 설치 {#step-1-install-the-package}

[RichText 평가판 패키지](/how_to_start/#installing-richtext-via-npm-or-yarn)를 다운로드하고 README 파일의 단계를 따르십시오. 평가판 라이선스는 30일 동안 유효합니다.

### 2단계. 컴포넌트 생성 {#step-2-create-the-component}

RichText를 애플리케이션에 추가하는 React 컴포넌트를 생성합니다. *src/* 디렉토리에 *Richtext.jsx*라는 새 파일을 생성합니다.

#### 소스 파일 가져오기 {#import-source-files}

*Richtext.jsx*를 열고 RichText 소스 파일을 가져옵니다.

로컬 폴더에서 설치한 PRO 버전의 경우 다음을 사용합니다:

~~~jsx title="Richtext.jsx"
import { Richtext } from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
~~~

평가판 버전의 경우 다음을 사용합니다:

~~~jsx title="Richtext.jsx"
import { Richtext } from '@dhx/trial-richtext';
import "@dhx/trial-richtext/dist/richtext.css";
~~~

이 튜토리얼에서는 RichText 평가판 버전을 사용합니다.

#### 컨테이너 설정 및 RichText 초기화 {#set-the-container-and-initialize-richtext}

RichText용 컨테이너 요소를 설정하고 `useEffect()` 내에서 `Richtext` 생성자로 컴포넌트를 초기화합니다. RichText를 제거하려면 클린업 함수에서 [`destructor()`](api/methods/destructor.md) 메서드를 호출합니다:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext } from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css'; // include RichText styles

export default function RichTextComponent(props) {
    let richtext_container = useRef(); // container for RichText

    useEffect(() => {
        // initialize the RichText component
        const editor = new Richtext(richtext_container.current, {});

        return () => {
            editor.destructor(); // destroy RichText
        };
    }, []);

    return  <div className="component_container">
                <div ref={richtext_container} className="widget"></div>
            </div>
}
~~~

#### 스타일 추가 {#add-styles}

프로젝트의 메인 CSS 파일에 RichText와 컨테이너의 스타일을 추가합니다:

~~~css title="index.css"
/* base page styles */
html,
body,
#root {
    height: 100%;
    padding: 0;
    margin: 0;
}

/* RichText container */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* RichText widget */
.widget {
    height: calc(100% - 56px);
}
~~~

#### 데이터 로드 {#load-data}

RichText에 데이터를 제공합니다. *src/* 디렉토리에 *data.js* 파일을 생성합니다:

~~~jsx {} title="data.js"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

*App.js*를 열고 데이터를 가져옵니다. value를 `<RichText/>` 컴포넌트에 prop으로 전달합니다:

~~~jsx {2,5-6} title="App.js"
import RichText from "./Richtext";
import { getData } from "./data";

function App() {
    const { value } = getData();
    return <RichText value={value} />;
}

export default App;
~~~

*Richtext.jsx*를 열고 `props.value`를 RichText 구성에 전달합니다:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default function RichTextComponent(props) {
    let richtext_container = useRef();

    useEffect(() => {
        const editor = new Richtext(richtext_container.current, {
            value: props.value, // apply value
            // other configuration properties
        });

        return () => {
            editor.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={richtext_container} className="widget"></div>
            </div>
}
~~~

또는 `useEffect()` 내에서 [`setValue()`](api/methods/set-value.md) 메서드를 호출하여 RichText에 데이터를 로드할 수도 있습니다:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default function RichTextComponent(props) {
    let richtext_container = useRef();

    let value = props.value;

    useEffect(() => {
        const editor = new Richtext(richtext_container.current, {
            // configuration properties
        });
    
        editor.setValue(value);

        return () => {
            editor.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={richtext_container} className="widget"></div>
            </div>
}
~~~

RichText 컴포넌트를 사용할 준비가 되었습니다. `<RichText/>` 요소가 마운트될 때 React가 데이터와 함께 에디터를 렌더링합니다. 전체 구성 옵션 목록은 [RichText API 개요](api/overview/main_overview.md)를 참고하십시오.

#### 이벤트 처리 {#handle-events}

RichText는 사용자 동작 시 이벤트를 발생시킵니다. [`api.on()`](api/internal/on.md) 메서드로 이벤트를 구독하여 사용자 입력에 반응하십시오. [전체 이벤트 목록](api/overview/events_overview.md)을 참고하십시오.

*Richtext.jsx*를 열고 `useEffect()` hook을 업데이트합니다. 아래 예제는 [`print`](api/events/print.md) 이벤트가 발생할 때마다 메시지를 로그에 기록합니다:

~~~jsx {} title="Richtext.jsx"
// ...
useEffect(() => {
    const editor = new Richtext(richtext_container.current, {});

    editor.api.on("print", () => {
        console.log("The document is printing");
    });
    
    return () => {
        editor.destructor();
    };
}, []);
// ...
~~~

앱을 시작하면 페이지에 데이터와 함께 RichText가 렌더링되는 것을 확인할 수 있습니다.

<div className="img_border">
![RichText 초기화](/img/trial_richtext.png)
</div>

이제 React에서 RichText 통합이 완료되었습니다. 필요에 맞게 코드를 커스터마이즈하십시오. 전체 예제는 [GitHub](https://github.com/DHTMLX/react-richtext-demo)에서 확인할 수 있습니다.
