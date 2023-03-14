---
order: 8
title:
  zh-CN: 预设范围
  en-US: Preset Ranges
---

## zh-CN

可以预设常用的日期范围以提高用户体验。

## en-US

We can set preset ranges to RangePicker to improve user experience.

```tsx
import { DatePicker, Space } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import moment from 'moment';
import React from 'react';

const { RangePicker } = DatePicker;

const onChange: RangePickerProps['onChange'] = (dates, dateStrings) => {
  if (dates) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  } else {
    console.log('Clear');
  }
};

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <RangePicker
      presets={[
        {
          label: 'Today',
          value: [moment(), moment()],
        },
        {
          label: 'This Month',
          value: [moment().startOf('month'), moment().endOf('month')],
        },
      ]}
      onChange={onChange}
    />
    <RangePicker
      presets={[
        {
          label: 'Today',
          value: [moment(), moment()],
        },
        {
          label: 'This Month',
          value: [moment().startOf('month'), moment().endOf('month')],
        },
      ]}
      presetsHeader={<div style={{ paddingLeft: 16, paddingTop: 10 }}>快速查看</div>}
      showTime
      format="YYYY/MM/DD HH:mm:ss"
      onChange={onChange}
    />
    <RangePicker
      presets={[
        {
          label: 'Today',
          value: [moment(), moment()],
        },
        {
          label: 'This Month',
          value: [moment().startOf('month'), moment().endOf('month')],
        },
      ]}
      value={[moment().startOf('date'), moment().endOf('date')]}
      presetsHeader={<div style={{ paddingLeft: 16, paddingTop: 10 }}>快速查看</div>}
      showTime={{
        showSecond: true,
        defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')],
      }}
      format="YYYY/MM/DD HH:mm:ss"
      onChange={onChange}
    />
  </Space>
);

export default App;
```
