'use client'

import type * as React from 'react';
import type { SwitchProps } from './Switch';
import InternalSwitch from './Switch';
import Group from './Group';

export { SwitchChangeEventHandler, SwitchClickEventHandler, SwitchSize, SwitchProps } from './Switch'


type CompoundedComponent = React.ForwardRefExoticComponent<
  SwitchProps & React.RefAttributes<HTMLInputElement>
> & {
  Group: typeof Group;
  /** @internal */
  __ANT_SWITCH: boolean;
};

const Switch = InternalSwitch as CompoundedComponent;

Switch.Group = Group;
Switch.__ANT_SWITCH = true;

export default Switch;
