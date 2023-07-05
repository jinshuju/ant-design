---
order: 0
title:
  zh-CN: 完全块节点
  en-US: Full Block Node
---

## zh-CN

完全块节点。

## en-US

Full Block Node.

```tsx
import { Tree } from 'antd';
import { CarryOutOutlined } from '@ant-design/icons';
import type { DataNode, TreeProps } from 'antd/es/tree';
import React from 'react';

const treeData: DataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        icon: <CarryOutOutlined />,
        children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
      },
    ],
  },
];

const App: React.FC = () => {
  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  return (
    <Tree
      checkable
      selectable={false}
      defaultExpandedKeys={['0-0-0', '0-0-1']}
      defaultSelectedKeys={['0-0-1']}
      defaultCheckedKeys={['0-0-0', '0-0-1']}
      // onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData}
      showIcon
      showLine
      blockNode
      fullBlock
    />
  );
};

export default App;
```
