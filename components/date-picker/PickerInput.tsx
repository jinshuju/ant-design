import * as React from 'react';
import type { InputProps } from '../input';
import Input from '../input';

export default function PickerInput(props: InputProps) {
  return <Input size="middle" {...props} />;
}
