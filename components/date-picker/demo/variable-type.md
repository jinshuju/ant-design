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

const { RangePicker } = DatePicker;

const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const onRangeChange: RangePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      onChange={onDateChange}
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
    <RangePicker
      onChange={onRangeChange}
      presetsHeader={<div style={{ paddingLeft: 16, paddingTop: 10 }}>快速查看</div>}
      presets={[
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
    <RangePicker
      onChange={onRangeChange}
      presetsHeader={<div style={{ paddingLeft: 16, paddingTop: 10 }}>快速查看</div>}
      presets={[
        {
          label: '今天',
          value: 'today',
        },
        {
          label: '明天',
          value: 'tomorrow',
        },
      ]}
      showTime={{
        showSecond: false,
        defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')],
      }}
      format="YYYY/MM/DD HH:mm:ss"
    />
  </Space>
);

export default App;
```
