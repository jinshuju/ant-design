---
order: 35
title:
  zh-CN: 日期选择面板
  en-US: Date Picker Panel
---

## zh-CN

日期选择面板。

## en-US

日期选择面板.

```tsx
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import React from 'react';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const App: React.FC = () => (
  <Space direction="vertical">
    <DatePicker.PickerPanel onChange={onChange} />
    <DatePicker.PickerPanel onChange={onChange} picker="week" />
    <DatePicker.PickerPanel onChange={onChange} picker="month" />
    <DatePicker.PickerPanel onChange={onChange} picker="year" />
  </Space>
);

export default App;
```
