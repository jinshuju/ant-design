---
order: 100
title:
  zh-CN: 变量类型
  en-US: Variable Type
---

## zh-CN

可以预设常用的变量。

## en-US

We can set preset variables to DatePicker to improve user experience.

```tsx
import { DatePicker, Space } from 'antd';
import type { DatePickerProps } from 'antd/es/date-picker';
import moment from 'moment';
import React from 'react';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      onChange={onChange}
      presets={[
        {
          label: 'Hello World!',
          value: moment(),
        },
        {
          label: '今天',
          value: 'today',
        },
        {
          label: '明天',
          value: 'tomorrow',
        },
      ]}
    />
  </Space>
);

export default App;
```
