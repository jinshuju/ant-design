'use client';

import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import classNames from 'classnames';
import RcSwitch from 'rc-switch';
import * as React from 'react';
import { useContext } from 'react';
import { FormItemInputContext } from '../form/context';
import { GroupContext } from './Group';
import { ConfigContext } from '../config-provider';
import DisabledContext from '../config-provider/DisabledContext';
import SizeContext from '../config-provider/SizeContext';
import warning from '../_util/warning';
import Wave from '../_util/wave';

export type SwitchSize = 'small' | 'default';
export type SwitchChangeEventHandler = (
  checked: boolean,
  event: React.MouseEvent<HTMLButtonElement>,
) => void;
export type SwitchClickEventHandler = SwitchChangeEventHandler;

export interface SwitchProps {
  prefixCls?: string;
  size?: SwitchSize;
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: SwitchChangeEventHandler;
  onClick?: SwitchClickEventHandler;
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  autoFocus?: boolean;
  style?: React.CSSProperties;
  title?: string;
  tabIndex?: number;
  id?: string;
  value?: any;
  children?: React.ReactNode;
}

type CompoundedComponent = React.ForwardRefExoticComponent<
  SwitchProps & React.RefAttributes<HTMLElement>
> & {
  /** @internal */
  __ANT_SWITCH: boolean;
};

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      prefixCls: customizePrefixCls,
      size: customizeSize,
      disabled: customDisabled,
      loading,
      className = '',
      children,
      ...props
    },
    ref,
  ) => {
    warning(
      'checked' in props || !('value' in props),
      'Switch',
      '`value` is not a valid prop, do you mean `checked`?',
    );

    const { getPrefixCls, direction } = React.useContext(ConfigContext);
    const switchGroup = React.useContext(GroupContext);
    const { isFormItemInput } = useContext(FormItemInputContext);
    const contextSize = React.useContext(SizeContext);
    const size = React.useMemo(
      () => (isFormItemInput ? 'small' : contextSize),
      [contextSize, isFormItemInput],
    );

    // ===================== Disabled =====================
    const disabled = React.useContext(DisabledContext);
    const mergedDisabled = (customDisabled ?? disabled) || loading;

    const prefixCls = getPrefixCls('switch', customizePrefixCls);
    const loadingIcon = (
      <div className={`${prefixCls}-handle`}>
        {loading && <LoadingOutlined className={`${prefixCls}-loading-icon`} />}
      </div>
    );

    const classString = classNames(
      {
        [`${prefixCls}-wrapper`]: true,
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-wrapper-checked`]: props.checked,
        [`${prefixCls}-wrapper-disabled`]: mergedDisabled,
        [`${prefixCls}-wrapper-in-form-item`]: isFormItemInput,
      },
      className,
    );

    const classes = classNames(
      {
        [`${prefixCls}-small`]: (customizeSize || size) === 'small',
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-rtl`]: direction === 'rtl',
      },
      className,
    );

    const prevValue = React.useRef(props.value);
    React.useEffect(() => {
      switchGroup?.registerValue(props.value);
      warning(
        'checked' in props || !!switchGroup || !('value' in props),
        'Switch',
        '`value` is not a valid prop, do you mean `checked`?',
      );
    }, []);

    React.useEffect(() => {
      if (props.value !== prevValue.current) {
        switchGroup?.cancelValue(prevValue.current);
        switchGroup?.registerValue(props.value);
        prevValue.current = props.value;
      }
      return () => switchGroup?.cancelValue(props.value);
    }, [props.value]);

    const switchProps: SwitchProps = { ...props };

    if (switchGroup) {
      switchProps.onChange = (...args) => {
        if (props.onChange) {
          props.onChange(...args);
        }
        if (switchGroup.toggleOption) {
          switchGroup.toggleOption({ label: children, value: props.value });
        }
      };
      switchProps.checked = switchGroup.value.includes(props.value);
    }

    const switchBtn = (
      <RcSwitch
        {...switchProps}
        prefixCls={prefixCls}
        className={classes}
        data-value={switchProps.value}
        disabled={mergedDisabled}
        ref={ref}
        loadingIcon={loadingIcon}
      />
    );

    return children !== undefined ? (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label className={classString}>
        <Wave insertExtraNode>
          {switchBtn}
          <span>{children}</span>
        </Wave>
      </label>
    ) : (
      <Wave insertExtraNode>{switchBtn}</Wave>
    );
  },
) as CompoundedComponent;

Switch.__ANT_SWITCH = true;
if (process.env.NODE_ENV !== 'production') {
  Switch.displayName = 'Switch';
}

export default Switch;
