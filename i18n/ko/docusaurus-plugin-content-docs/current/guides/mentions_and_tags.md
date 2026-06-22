---
sidebar_label: 멘션 및 태그
title: 멘션 및 태그
description: 'DHTMLX RichText에서 @멘션, #태그, 커스텀 드롭다운 트리거를 구성하는 방법을 알아보세요. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX RichText의 무료 30일 평가판도 다운로드할 수 있습니다.'
---

# 멘션 및 태그 {#mentions-and-tags}

RichText는 사용자가 정의한 트리거 문자를 지원하며, 해당 문자를 입력하면 문서 내에 제안 드롭다운이 열립니다. 사용자가 항목을 선택하면 RichText는 편집 불가능한 토큰을 문서에 삽입합니다. 대표적인 사용 사례는 다음과 같습니다:

- `@` — 사람을 멘션
- `#` — 태그 적용
- `/` — 명령 또는 템플릿 삽입
- `$` — 금융 티커 또는 변수 삽입
- `:` — 이모지 삽입

[`triggers`](api/config/triggers.md) 속성을 통해 동작을 구성합니다. 각 항목은 하나의 문자를 데이터 소스에 연결합니다.

## 트리거 구성 {#configure-triggers}

각 트리거는 [`triggers`](api/config/triggers.md) 배열 내의 `{ trigger, data, showTrigger?, action? }` 객체입니다. [`data`](api/config/triggers.md#data-source-forms) 필드는 다음 세 가지 형태를 취할 수 있습니다:

- 정적 배열 — RichText가 `label`을 기준으로 자동 필터링합니다(대소문자 구분 없음, `startsWith` 방식):

~~~jsx {}
{ trigger: "@", data: people }
~~~

- 동기 함수 — 직접 결과를 필터링할 때 사용합니다:

~~~jsx {}
{
    trigger: "#",
    data: query => tags.filter(t =>
        t.label.toLowerCase().startsWith(query.toLowerCase())
    )
}
~~~

- 비동기 함수 — 서버 측 검색에 사용합니다:

~~~jsx {}
{
    trigger: "+",
    data: async query => {
        const res = await fetch(`/api/users?q=${encodeURIComponent(query)}`);
        const users = await res.json();
        return users.map(u => ({
            id:    String(u.id),
            label: u.name,
            url:   u.website
        }));
    }
}
~~~

**관련 샘플:** [RichText. 멘션, 태그 및 비동기 조회](https://snippet.dhtmlx.com/nfvvfize?tag=richtext)

## 토큰 렌더링 {#token-rendering}

사용자가 드롭다운에서 항목을 선택하면 RichText는 두 개의 데이터 속성을 가진 `<a>` 요소로 삽입합니다:

~~~html {2-3}
<a 
    data-token="@" 
    data-token-id="alice" 
    href="mailto:alice@example.com">@Alice</a>
~~~

토큰은 편집 불가능한 단일 노드입니다. `Backspace`를 누르면 한 번에 삭제됩니다. RichText는 `url` 필드를 `href`에 저장하므로 토큰을 `Ctrl+Click`하면 링크로 이동합니다.

`data-token` 선택자를 사용하여 토큰을 스타일링할 수 있습니다:

~~~css {}
.wx-editor-content a[data-token="@"][data-token-id="alice"] {
    background: #fb8500;
    color: #fff;
    border-radius: 3px;
    padding: 0 2px;
}
~~~

**관련 샘플:**

- [RichText. 멘션 찾기 및 강조 표시](https://snippet.dhtmlx.com/8y6zvzh2?tag=richtext)
- [RichText. 모든 멘션 강조 표시](https://snippet.dhtmlx.com/2rbo12jx?tag=richtext)

## 트리거 문자 숨기기 {#hide-the-trigger-character}

트리거에 `showTrigger: false`를 설정하면 트리거 기호 없이 항목 레이블만 삽입됩니다:

~~~jsx {4}
{
    trigger: "/",
    data: commands,
    showTrigger: false
}
~~~

## 키보드 조작 {#keyboard-interaction}

제안 드롭다운 내에서 다음 단축키를 사용할 수 있습니다:

- `↑` / `↓` — 항목 간 이동
- `Enter` — 활성 항목 삽입
- `Escape` — 삽입하지 않고 드롭다운 닫기

## 제안 이벤트 수신 {#listen-to-suggestion-events}

세 가지 이벤트가 Event Bus를 통해 드롭다운 생명주기를 노출합니다:

- [`insert-token`](api/events/insert-token.md) — 사용자가 항목을 선택할 때 발생
- [`show-suggest`](api/events/show-suggest.md) — 드롭다운이 열릴 때 발생
- [`hide-suggest`](api/events/hide-suggest.md) — 드롭다운이 닫힐 때 발생

~~~jsx {5-7}
const editor = new richtext.Richtext("#root", {
    triggers: [{ trigger: "@", data: people }]
});

editor.api.on("insert-token", ({ data, trigger, showTrigger }) => {
    console.log(`Inserted ${trigger}${data.label} (id: ${data.id})`);
});
~~~

## 드롭다운 항목 커스터마이즈 {#customize-the-dropdown-item}

기본적으로 드롭다운은 각 항목의 `label`을 표시합니다. 커스텀 제안(예: 아바타, 이름, 이메일)을 렌더링하려면 [`triggerTemplate`](api/config/trigger-template.md) 속성을 통해 템플릿을 전달하세요.

### 예제 {#example}

~~~jsx {1,4-9}
const { template } = richtext;

new richtext.Richtext("#root", {
    triggers: [{ trigger: "@", data: people }],
    triggerTemplate: template(({ data, trigger }) => `
        <div class="user">
            <div class="user-name">${trigger}${data.label}</div>
            <div class="user-url">${data.url || ""}</div>
        </div>
    `)
});
~~~

**관련 샘플:** [RichText. 트리거별 커스텀 드롭다운 템플릿](https://snippet.dhtmlx.com/0p3bbnhz?tag=richtext)

## 선택 시 커스텀 액션 {#custom-action-on-select}

기본적으로 항목을 선택하면 문서에 토큰으로 삽입됩니다. 대신 직접 작성한 코드를 실행하려면 트리거에 `action` callback을 추가하세요. RichText는 입력된 트리거 텍스트를 제거하고 선택한 항목과 함께 `action(item)`을 호출합니다. 토큰은 삽입되지 않으므로 무엇을 추가할지 직접 결정할 수 있습니다.

:::note[참고]
`action`은 `showTrigger`보다 우선합니다. `action`이 설정된 경우 `showTrigger`는 무시됩니다.
:::

### 이모지 추가 {#add-emoji}

`:` 트리거를 사용하여 이모지를 삽입할 수 있으며, 각 항목에는 커스텀 `code` 필드가 포함됩니다. 드롭다운에 레이블 대신 이모지가 표시되도록 `action`과 [`triggerTemplate`](api/config/trigger-template.md)을 함께 사용하세요:

~~~jsx {18-20,24}
const { template, Richtext } = richtext;

const emoji = [
    {
        id: "apple", label: "apple", code: "1F34E"
    },
    {
        id: "blue_car", label: "blue_car", code: "1F699"
    },
    {
        id: "computer", label: "computer", code: "1F4BB"
    }
];

const editor = new Richtext("#root", {
    triggers: [
        {
            trigger: ":",
            data: emoji, // [{ id: "apple", label: "apple", code: "1F34E" }, ...]
            action: item => editor.insertValue(`<span>${emojiFromCode(item.code)} </span>`)
        }
    ],
    // 드롭다운에 (레이블만이 아니라) 이모지 자체를 렌더링
    triggerTemplate: template(({ data }) => `${emojiFromCode(data.code)} ${data.label}`)
});

function emojiFromCode(code) {
    return String.fromCodePoint(parseInt(code, 16));
}
~~~

**관련 샘플:** [RichText. 이모지 자동 완성](https://snippet.dhtmlx.com/g5z1d868?tag=richtext)

### 이모지를 카테고리별로 그룹화 {#group-emoji-by-categories}

`data` 매개변수가 함수인 경우 내장된 `label` 매칭에 국한되지 않습니다. 직접 필터링을 수행하고 드롭다운에 카테고리 헤더를 유지할 수 있습니다. `label` 필드는 있지만 `code`는 없는 헤더 항목을 추가하세요. `data` 함수는 먼저 쿼리와 일치하는 이모지를 찾고, 그런 다음 여전히 일치하는 카테고리의 헤더와 함께 이모지를 반환합니다:

~~~jsx {17-26,31-33}
const { template, Richtext } = richtext;

// 헤더 항목에는 `code` 필드가 없습니다. 이모지 항목에는 있습니다
const emoji = [
    { id: "$smileys", label: "Smileys",                 category: 1 }, // 카테고리
    { id: "grinning", label: "grinning", code: "1F600", category: 1 },
    { id: "smile",    label: "smile",    code: "1F604", category: 1 },
    { id: "$animals", label: "Animals",                 category: 2 }, // 카테고리
    { id: "dog",      label: "dog",      code: "1F436", category: 2 },
    { id: "cat",      label: "cat",      code: "1F431", category: 2 }
];

const editor = new Richtext("#root", {
    triggers: [
        {
            trigger: ":",
            data: query => {
                const matched = emoji.filter(item =>
                    item.code &&
                    item.label.toLowerCase().startsWith(query.toLowerCase().trim())
                );
                const categories = new Set(matched.map(item => item.category));
                // 일치하는 이모지와 여전히 일치하는 카테고리의 헤더를 유지
                return emoji.filter(item =>
                    item.code ? matched.includes(item) : categories.has(item.category)
                );
            },
            action: item => editor.insertValue(`<span>${emojiFromCode(item.code)} </span>`)
        }
    ],
    // 이모지 행은 일반적으로, 카테고리 헤더는 굵게 렌더링
    triggerTemplate: template(({ data }) =>
        data.code ? `${emojiFromCode(data.code)} ${data.label}` : `<b>${data.label}</b>`
    )
});

function emojiFromCode(code) {
    return String.fromCodePoint(parseInt(code, 16));
}

// 헤더에는 `code`가 없습니다 — 헤더 선택은 무시하여 절대 삽입되지 않도록 합니다
editor.api.intercept("insert-token", ({ data }) => !!data.code);
~~~

### 슬래시 스타일 명령 메뉴 추가 {#add-slash-style-command-menu}

`action`을 사용하여 슬래시 스타일 명령 메뉴(Notion이나 Slack의 `/`와 같은)를 만들 수 있습니다. 각 항목의 `id`에 명령 이름을 저장하고, 옵션은 커스텀 `config` 필드에 저장한 후, callback이 [`api.exec`](api/internal/exec.md)로 실행하도록 합니다:

~~~jsx {13}
// 각 항목은 api.exec 액션 이름을 `id`에, 해당 매개변수를 `config`에 저장합니다
const commands = [
    { id: "set-text-style", label: "Heading 1",     config: { tag: "h1" } },
    { id: "insert-list",    label: "Bulleted list", config: { type: "bulleted" } },
    { id: "insert-line",    label: "Divider" } // 설정 없음 → `|| {}` 적용됨
];

const editor = new richtext.Richtext("#root", {
    triggers: [
        {
            trigger: "/",
            data: commands,
            action: item => editor.api.exec(item.id, item.config || {})
        }
    ]
});
~~~

**관련 샘플:** [RichText. 슬래시 명령](https://snippet.dhtmlx.com/e0mrmyam?tag=richtext)

## 관련 API {#related-api}

- [`triggers`](api/config/triggers.md)
- [`triggerTemplate`](api/config/trigger-template.md)
- [`insert-token`](api/events/insert-token.md)
- [`show-suggest`](api/events/show-suggest.md)
- [`hide-suggest`](api/events/hide-suggest.md)
