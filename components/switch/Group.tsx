'use client'

import classNames from 'classnames';
import omit from 'rc-util/lib/omit';
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import type { SwitchChangeEventHandler } from './Switch';
import Switch from './Switch';

export type SwitchValueType = string | number | boolean;

export interface SwitchOptionType {
  label: React.ReactNode;
  value: SwitchValueType;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange?: SwitchChangeEventHandler;
}

export interface AbstractSwitchGroupProps {
  prefixCls?: string;
  className?: string;
  options?: Array<SwitchOptionType | string | number>;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export interface SwitchGroupProps extends AbstractSwitchGroupProps {
  name?: string;
  defaultValue?: Array<SwitchValueType>;
  value?: Array<SwitchValueType>;
  layout?: 'vertical' | 'horizontal'
  onChange?: (checkedValue: Array<SwitchValueType>) => void;
  children?: React.ReactNode;
}

export interface SwitchGroupContext {
  name?: string;
  toggleOption?: (option: SwitchOptionType) => void;
  value?: any;
  disabled?: boolean;
  registerValue: (val: string) => void;
  cancelValue: (val: string) => void;
}

export const GroupContext = React.createContext<SwitchGroupContext | null>(null);

const InternalSwitchGroup: React.ForwardRefRenderFunction<HTMLDivElement, SwitchGroupProps> = (
  {
    defaultValue,
    children,
    options = [],
    prefixCls: customizePrefixCls,
    className,
    style,
    onChange,
    layout = 'horizontal',
    ...restProps
  },
  ref,
) => {
  const { getPrefixCls, direction } = React.useContext(ConfigContext);

  const [value, setValue] = React.useState<SwitchValueType[]>(
    restProps.value || defaultValue || [],
  );
  const [registeredValues, setRegisteredValues] = React.useState<SwitchValueType[]>([]);

  React.useEffect(() => {
    if ('value' in restProps) {
      setValue(restProps.value || []);
    }
  }, [restProps.value]);

  const getOptions = () =>
    options.map(option => {
      if (typeof option === 'string' || typeof option === 'number') {
        return {
          label: option,
          value: option,
        };
      }
      return option;
    });

  const cancelValue = (val: string) => {
    setRegisteredValues(prevValues => prevValues.filter(v => v !== val));
  };

  const registerValue = (val: string) => {
    setRegisteredValues(prevValues => [...prevValues, val]);
  };

  const toggleOption = (option: SwitchOptionType) => {
    const optionIndex = value.indexOf(option.value);
    const newValue = [...value];
    if (optionIndex === -1) {
      newValue.push(option.value);
    } else {
      newValue.splice(optionIndex, 1);
    }
    if (!('value' in restProps)) {
      setValue(newValue);
    }
    const opts = getOptions();
    onChange?.(
      newValue
        .filter(val => registeredValues.includes(val))
        .sort((a, b) => {
          const indexA = opts.findIndex(opt => opt.value === a);
          const indexB = opts.findIndex(opt => opt.value === b);
          return indexA - indexB;
        }),
    );
  };

  const prefixCls = getPrefixCls('switch', customizePrefixCls);
  const groupPrefixCls = `${prefixCls}-group`;

  const domProps = omit(restProps, ['value', 'disabled']);

  if (options && options.length > 0) {
    children = getOptions().map(option => (
      <Switch
        prefixCls={prefixCls}
        key={option.value.toString()}
        disabled={'disabled' in option ? option.disabled : restProps.disabled}
        value={option.value}
        checked={value.includes(option.value)}
        onChange={option.onChange}
        className={`${groupPrefixCls}-item`}
        style={option.style}
      >
        {option.label}
      </Switch>
    ));
  }

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const context = {
    toggleOption,
    value,
    disabled: restProps.disabled,
    name: restProps.name,
    // https://github.com/ant-design/ant-design/issues/16376
    registerValue,
    cancelValue,
  };
  const classString = classNames(
    groupPrefixCls,
    {
      [`${groupPrefixCls}-rtl`]: direction === 'rtl',
      [`${groupPrefixCls}-${layout}`]: true,
    },
    className,
  );
  return (
    <div className={classString} style={style} {...domProps} ref={ref}>
      <GroupContext.Provider value={context}>{children}</GroupContext.Provider>
    </div>
  );
};

const SwitchGroup = React.forwardRef<HTMLDivElement, SwitchGroupProps>(InternalSwitchGroup);

export default React.memo(SwitchGroup);
