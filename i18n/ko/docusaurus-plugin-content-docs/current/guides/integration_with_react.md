---
sidebar_label: React와의 통합
title: React와의 통합
description: DHTMLX JavaScript RichText 라이브러리의 문서에서 React와의 통합에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 시도해 보세요. DHTMLX RichText의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# React와의 통합

:::tip
이 가이드에 들어가기 전에 [**React**](https://react.dev)에 대한 경험이 있으면 좋습니다. 빠르게 복습이 필요하다면 [**React 공식 문서**](https://react.dev/learn)를 참고하세요.
:::

DHTMLX RichText는 **React**와 잘 작동합니다. React 앱에서 DHTMLX RichText를 사용하는 방법에 대한 코드 샘플도 제공됩니다. 자세한 내용은 [**GitHub 예제**](https://github.com/DHTMLX/react-richtext-demo)를 참고하세요.

## 프로젝트 생성

:::info
새 프로젝트를 시작하기 전에 [**Vite**](https://vite.dev/) (선택 사항)와 [**Node.js**](https://nodejs.org/en/)가 설치되어 있는지 확인하세요.
:::

기본 **React** 프로젝트를 만들거나 **Vite와 함께 React**를 사용할 수 있습니다. 이 예제에서는 프로젝트 이름을 **my-react-richtext-app**으로 지정합니다:

~~~json
npx create-react-app my-react-richtext-app
~~~

### 의존성 설치

새 앱 폴더로 이동하세요:

~~~json
cd my-react-richtext-app
~~~

그 다음, 원하는 패키지 매니저를 사용하여 의존성을 설치하고 개발 서버를 시작하세요:

- [**yarn**](https://yarnpkg.com/)을 사용하는 경우:

~~~json
yarn
yarn start
~~~

- [**npm**](https://www.npmjs.com/)을 사용하는 경우:

~~~json
npm install
npm run dev
~~~

앱은 localhost(예: `http://localhost:3000`)에서 확인할 수 있습니다.

## RichText 생성

이제 DHTMLX RichText 코드를 추가할 차례입니다. 먼저 앱을 중지하고 RichText 패키지를 설치하세요.

### 1단계. 패키지 설치

[**평가판 RichText 패키지**](how_to_start.md#installing-richtext-via-npm-or-yarn)를 다운로드하고, README 파일의 안내에 따라 진행하세요. RichText 평가판은 30일 동안 사용할 수 있습니다.

### 2단계. 컴포넌트 생성

이제 React 컴포넌트를 만들어 앱에 RichText를 추가합니다. ***src/*** 디렉터리에 ***Richtext.jsx***라는 새 파일을 만드세요.

#### 소스 파일 임포트

***Richtext.jsx***를 열고 RichText 파일을 임포트합니다. 참고:

- PRO 버전을 사용 중이고 RichText를 로컬 폴더에서 설치했다면, 임포트는 다음과 같습니다:

~~~jsx title="Richtext.jsx"
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
~~~

- 평가판을 사용하는 경우, 다음과 같이 임포트하세요:

~~~jsx title="Richtext.jsx"
import { Richtext} from '@dhx/trial-richtext';
import "@dhx/trial-richtext/dist/richtext.css";
~~~

이 가이드에서는 **평가판**을 예시로 사용합니다.

#### 컨테이너 설정 및 Richtext 추가

RichText를 페이지에 표시하려면 컨테이너를 설정하고 생성자를 통해 컴포넌트를 초기화해야 합니다:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css'; // RichText 스타일 포함

export default function RichTextComponent(props) {
    let richtext_container = useRef(); // RichText 컨테이너 초기화

    useEffect(() => {
        // RichText 컴포넌트 초기화
        const editor = new Richtext(richtext_container.current, {});

        return () => {
            editor.destructor(); // RichText 제거
        };
    }, []);

    return  <div className="component_container">
                <div ref={richtext_container} className="widget"></div>
            </div>
}
~~~

#### 스타일 추가

RichText가 올바르게 표시되려면 CSS를 추가해야 합니다. 메인 CSS 파일에 다음 스타일을 추가하세요:

~~~css title="index.css"
/* 초기 페이지 스타일 지정 */
html,
body,
#root {
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

RichText에 데이터를 로드하려면 데이터 세트를 준비해야 합니다. ***src/*** 폴더에 ***data.js*** 파일을 만들고 다음과 같이 내용을 추가하세요:

~~~jsx {} title="data.js"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

그 다음, ***App.js***를 열고 데이터를 임포트합니다. `<RichText/>` 컴포넌트에 **prop**으로 전달하세요:

~~~jsx {2,5-6} title="App.js"
import RichText from "./Richtext";
import { getData } from "./data";

function App() {
    const { value } = getData();
    return <RichText value={value} />;
}

export default App;
~~~

이제 ***Richtext.jsx***에서 들어오는 **prop**을 RichText 설정에 사용하세요:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default function RichTextComponent(props) {
    let richtext_container = useRef();

    useEffect(() => {
        const editor = new Richtext(richtext_container.current, {
            value: props.value, // 값 적용
            // 기타 설정 속성
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

원한다면, `useEffect()` 안에서 [`setValue()`](api/methods/set-value.md) 메서드를 사용해 데이터를 로드할 수도 있습니다:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default function RichTextComponent(props) {
    let richtext_container = useRef();

    let value = props.value;

    useEffect(() => {
        const editor = new Richtext(richtext_container.current, {
            // 설정 속성
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

이제 RichText 컴포넌트가 준비되었습니다. 렌더링되면, RichText 에디터와 함께 데이터가 표시됩니다. 필요에 따라 설정을 조정할 수 있습니다. 사용 가능한 옵션 전체 목록은 [RichText API 문서](api/overview/main_overview.md)에서 확인할 수 있습니다.

#### 이벤트 처리

RichText는 사용자가 상호작용할 때 이벤트를 발생시킵니다. 이러한 이벤트를 활용해 원하는 동작을 구현할 수 있습니다. [전체 이벤트 목록](api/overview/events_overview.md)은 문서에서 확인할 수 있습니다.

이벤트를 처리하려면, ***Richtext.jsx***를 다음과 같이 수정하세요:

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

이제 앱을 시작하면 RichText가 데이터와 함께 페이지에 표시됩니다.

import trial_richtext from '@site/static/img/trial_richtext.png';

<img
  src={trial_richtext}
  alt="Trial richtext"
  className="img_border"
/>

이것으로 DHTMLX RichText와 React의 통합이 완료되었습니다. 필요에 따라 코드를 수정할 수 있습니다. 좀 더 고급 예제가 필요하다면 [**GitHub**](https://github.com/DHTMLX/react-richtext-demo)를 확인하세요.
