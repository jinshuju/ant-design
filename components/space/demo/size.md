---
order: 2
title:
  zh-CN: 间距大小
  en-US: Space Size
---

## zh-CN

间距预设 xxl、xl、large、middle、small、xs 六种大小。

通过设置 `size` 控制间距。若不设置 `size`，则间距为 small。

## en-US

Spacing preset xxl, xl, large, middle, small, xs six sizes.

Control the spacing by setting 'size'. If 'size' is not set, the spacing is small.

```tsx
import { Button, Radio, Space } from 'antd';
import type { SpaceSize } from 'antd/es/space';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [size, setSize] = useState<SpaceSize | [SpaceSize, SpaceSize]>('small');

  return (
    <>
      <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
        <Radio value="xs">xs</Radio>
        <Radio value="small">Small</Radio>
        <Radio value="middle">Middle</Radio>
        <Radio value="large">Large</Radio>
        <Radio value="xl">xl</Radio>
        <Radio value="xxl">xxl</Radio>
      </Radio.Group>
      <br />
      <br />
      <Space size={size}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Space>
    </>
  );
};

export default App;
```
