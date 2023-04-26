---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

The most basic usage.

```tsx
import {
  Form,
  Checkbox,
  Switch,
} from 'antd';
import React from 'react';

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const App: React.FC = () => {
  const [checked, setChecked] = React.useState(false)
  const [form] = Form.useForm()
  const userName = Form.useWatch('username', form);
  const fav = Form.useWatch('fav', form);
  console.log(form.getFieldsValue())
  const initialValues = {
    username: true,
    fav: ['A', "C"]
  }
  return (
    <div>
      <Switch defaultChecked onChange={onChange} />
      <Switch
        size="small"
        checked={checked}
        onChange={() => setChecked(!checked)}
      >
        文字说明
      </Switch>
      <br />
      <hr />
      <br />
      <h1>Form</h1>
      <Form
        layout="horizontal"
        form={form}
        initialValues={initialValues}
        onValuesChange={console.log}
      >
        <Form.Item label="Checkbox" valuePropName="checked" name="username">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked" name="username">
          <Switch>Switch</Switch>
        </Form.Item>
        <Form.Item label="Checkbox Group" name="fav">
          <Checkbox.Group>
            <Checkbox value="A">A</Checkbox>
            <Checkbox value="B">B</Checkbox>
            <Checkbox value="C">C</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item label="Switch" name="fav">
          <Switch.Group>
            <Switch value="A">A</Switch>
            <Switch value="B">B</Switch>
            <Switch value="C">C</Switch>
          </Switch.Group>
        </Form.Item>
        <Form.Item label="Switch" name="fav">
          <Switch.Group layout="vertical">
            <Switch value="A">A</Switch>
            <Switch value="B">B</Switch>
            <Switch value="C">C</Switch>
          </Switch.Group>
        </Form.Item>
      </Form>
    </div>
  )
}

export default App;
```
