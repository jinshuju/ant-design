---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

## zh-CN

按钮有七种类型：主按钮、次按钮、默认按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。

## en-US

There are `primary` button, `default` button, `dashed` button, `text` button and `link` button in antd.

```tsx
import { Button } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <>
    <Button type="primary">Primary</Button>
    <Button type="primary" loading>
      Primary
    </Button>
    <Button type="primary" danger>
      Primary
    </Button>
    <Button type="primary" disabled>
      Primary
    </Button>
    <br />
    <Button type="secondary">Secondary</Button>
    <Button type="secondary" loading>
      Secondary
    </Button>
    <Button type="secondary" danger>
      Secondary
    </Button>
    <Button type="secondary" disabled>
      Secondary
    </Button>
    <br />
    <Button>Default</Button>
    <Button loading>Default</Button>
    <Button danger>Default</Button>
    <Button disabled>Default</Button>
    <br />
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" loading>
      Dashed
    </Button>
    <Button type="dashed" danger>
      Dashed
    </Button>
    <Button type="dashed" disabled>
      Dashed
    </Button>
    <br />
    <Button type="text">Text</Button>
    <Button type="text" loading>
      Text
    </Button>
    <Button type="text" danger>
      Text
    </Button>
    <Button type="text" disabled>
      Text
    </Button>
    <br />
    <Button type="link">Link</Button>
    <Button type="link" size="large">
      Link
    </Button>
    <Button type="link" loading>
      Link
    </Button>
    <Button type="link" danger>
      Link
    </Button>
    <Button type="link" disabled>
      Link
    </Button>
    <br />
    <Button type="dashlink">Dash Link</Button>
    <Button type="dashlink" size="large">
      Large Dash Link
    </Button>
    <Button type="dashlink" loading>
      Dash Link
    </Button>
    <Button type="dashlink" danger>
      Dash Link
    </Button>
    <Button type="dashlink" disabled>
      Dash Link
    </Button>

    <p>
      Fugiat tempor magna cupidatat exercitation
      <Button type="dashlink">
        Et veniam Lorem laborum et occaecat cupidatat commodo Non eiusmod excepteur eiusmod ea
        consectetur fugiat excepteur quis
      </Button> exercitation. Nostrud magna amet qui qui sint adipisicing. Consequat in anim tempor quis
      irure. Anim pariatur minim esse mollit irure ex nulla Lorem ut ad quis non dolor anim. Voluptate
      reprehenderit commodo laboris et reprehenderit aliquip sunt qui sint id. Cillum quis elit nulla
      dolore reprehenderit minim elit enim velit sint sit dolor.
    </p>
  </>
);

export default App;
```
