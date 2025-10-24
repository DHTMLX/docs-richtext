---
sidebar_label: Vue와의 통합
title: Vue와의 통합
description: DHTMLX JavaScript RichText 라이브러리의 문서에서 Vue와의 통합 방법을 알아보세요. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX RichText의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# Vue와의 통합

:::tip
이 문서를 읽기 전에 [**Vue**](https://vuejs.org/)에 대한 기본적인 이해가 있으면 도움이 됩니다. 복습이 필요하다면 [**Vue 3 공식 문서**](https://vuejs.org/guide/introduction.html#getting-started)를 참고하세요.
:::

DHTMLX RichText는 **Vue**와 잘 호환됩니다. **Vue 3**에서 DHTMLX RichText를 사용하는 방법에 대한 코드 샘플도 제공됩니다. 자세한 내용은 [**GitHub 예제**](https://github.com/DHTMLX/vue-richtext-demo)를 참고하세요.

## 프로젝트 생성

:::info
새 프로젝트를 시작하기 전에 [**Node.js**](https://nodejs.org/en/)가 설치되어 있는지 확인하세요.
:::

**Vue** 프로젝트를 생성하려면 아래 명령어를 사용하세요:

~~~json
npm create vue@latest
~~~

이 명령은 **Vue** 프로젝트의 공식 스캐폴딩 도구인 `create-vue`를 실행합니다. 더 많은 정보는 [Vue.js 빠른 시작](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)에서 확인할 수 있습니다.

이 가이드에서는 프로젝트 이름을 **my-vue-richtext-app**으로 하겠습니다.

### 의존성 설치

앱 디렉터리로 이동하세요:

~~~json
cd my-vue-richtext-app
~~~

선호하는 패키지 매니저를 사용해 의존성을 설치하고 개발 서버를 시작하세요:

- [**yarn**](https://yarnpkg.com/) 사용 시:

~~~jsx
yarn
yarn start // 또는 yarn dev
~~~

- [**npm**](https://www.npmjs.com/) 사용 시:

~~~json
npm install
npm run dev
~~~

앱은 로컬호스트(예: `http://localhost:3000`)에서 확인할 수 있습니다.

## RichText 생성

이제 DHTMLX RichText 소스 코드를 준비해야 합니다. 앱을 잠시 중단하고 RichText 패키지를 설치하세요.

### 1단계. 패키지 설치

[**평가판 RichText 패키지**](how_to_start.md#installing-richtext-via-npm-or-yarn)를 다운로드하고, README 파일의 지침을 따르세요. 평가판은 30일간 사용할 수 있습니다.

### 2단계. 컴포넌트 생성

앱에 RichText를 추가하기 위해 Vue 컴포넌트를 만듭니다. ***src/components/*** 디렉터리에 ***Richtext.vue*** 파일을 새로 만드세요.

#### 소스 파일 임포트

***Richtext.vue*** 파일을 열고 RichText 소스 파일을 임포트하세요. 참고:

- PRO 버전을 사용하고 로컬 폴더에서 RichText를 설치한 경우, 임포트는 다음과 같습니다:

~~~html title="Richtext.vue"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- 평가판 버전의 경우, 임포트는 다음과 같습니다:

~~~html title="Richtext.vue"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

이 튜토리얼에서는 **평가판** 버전의 RichText를 설정하는 방법을 안내합니다.

#### 컨테이너 설정 및 Richtext 추가

페이지에 RichText를 표시하려면 컨테이너를 만들고, 컴포넌트를 생성자와 함께 초기화하세요:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    mounted() {
        // RichText 컴포넌트 초기화
        this.editor = new Richtext(this.$refs.richtext_container, {});
    },

    unmounted() {
        this.editor.destructor(); // RichText 해제
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

#### 스타일 추가

RichText가 올바르게 표시되도록, 메인 CSS 파일에 RichText와 컨테이너에 대한 주요 스타일을 추가하세요:

~~~css title="main.css"
/* 초기 페이지 스타일 지정 */
html,
body,
#app { /* #app 루트 컨테이너를 반드시 사용하세요 */
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

RichText에 데이터를 로드하려면 데이터셋을 만드세요. ***src/*** 디렉터리에 ***data.js*** 파일을 추가하고 아래와 같이 작성할 수 있습니다:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

그런 다음, ***App.vue***에서 데이터를 임포트하고 `data()` 메서드로 초기화하세요. 데이터를 **props**로 `<RichText/>` 컴포넌트에 전달합니다:

~~~html {} title="App.vue"
<script>
import RichText from "./components/Richtext.vue";
import { getData } from "./data";

export default {
    components: { RichText },
    data() {
        const { value } = getData();
        return { value };
    }
};
</script>

<template>
    <RichText :value="value" />
</template>
~~~

이제 ***Richtext.vue***로 돌아가서, RichText 설정에서 **props**를 사용하세요:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            value: this.value,
            // 기타 설정 속성
        });
    },

    unmounted() {
        this.editor.destructor(); 
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

또는, `mounted()` 훅 내부에서 [`setValue()`](api/methods/set-value.md) 메서드를 사용해 RichText에 데이터를 로드할 수도 있습니다:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            // 기타 설정 속성
        });

        this.editor.setValue(this.value);
    },

    unmounted() {
        this.editor.destructor(); 
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

이제 RichText 컴포넌트가 준비되었습니다. 페이지에 추가하면, 지정한 데이터와 함께 RichText가 초기화됩니다. 설정은 필요에 따라 조정할 수 있습니다. 사용 가능한 모든 속성은 [RichText API 문서](api/overview/main_overview.md)에서 확인할 수 있습니다.

#### 이벤트 처리

RichText에서 동작이 발생하면 이벤트가 트리거됩니다. 이 이벤트를 통해 원하는 동작을 실행할 수 있습니다. 자세한 이벤트 목록은 [이벤트 전체 목록](api/overview/events_overview.md)에서 확인하세요.

***Richtext.vue***에서 `mounted()` 메서드를 업데이트하여 이벤트를 처리할 수 있습니다:

~~~html {} title="Richtext.vue"
<script>
// ...
export default {
    // ...
    mounted() {
        this.editor = new Richtext(this.$refs.cont, {});

        this.editor.api.on("print", () => {
            console.log("The document is printing");
        });
    },

    unmounted() {
        this.editor.destructor();
    }
}
</script>

// ...
~~~

이제 앱을 시작하면 지정한 데이터와 함께 RichText가 페이지에 표시됩니다.

import trial_richtext from '@site/static/img/trial_richtext.png';

<img
  src={trial_richtext}
  alt="Trial richtext"
  className="img_border"
/>

이렇게 하면 DHTMLX RichText를 Vue에 통합할 수 있습니다. 필요에 따라 코드를 자유롭게 수정해보세요. 더 발전된 예제를 보고 싶다면 [**GitHub**](https://github.com/DHTMLX/vue-richtext-demo)를 참고하세요.
