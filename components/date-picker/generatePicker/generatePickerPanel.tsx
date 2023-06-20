import classNames from 'classnames';
import { PickerPanel as RCPickerPanel } from 'rc-picker';
import type { GenerateConfig } from 'rc-picker/lib/generate';
import type {
  PickerPanelBaseProps as RCPickerPanelBaseProps,
  PickerPanelDateProps as RCPickerPanelDateProps,
  PickerPanelTimeProps as RCPickerPanelTimeProps,
} from 'rc-picker/lib/PickerPanel';
import type { PickerMode } from 'rc-picker/lib/interface';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import * as React from 'react';
import { ConfigContext } from '../../config-provider';
import LocaleReceiver from '../../locale-provider/LocaleReceiver';
import enUS from '../locale/en_US';

type InjectDefaultProps<Props> = Omit<
  Props,
  'locale' | 'generateConfig' | 'prevIcon' | 'nextIcon' | 'superPrevIcon' | 'superNextIcon'
> & {
  locale?: typeof enUS;
};

// Picker Props
export type PickerPanelBaseProps<DateType> = InjectDefaultProps<RCPickerPanelBaseProps<DateType>>;
export type PickerPanelDateProps<DateType> = InjectDefaultProps<RCPickerPanelDateProps<DateType>>;
export type PickerPanelTimeProps<DateType> = InjectDefaultProps<RCPickerPanelTimeProps<DateType>>;

export type PickerProps<DateType> =
  | PickerPanelBaseProps<DateType>
  | PickerPanelDateProps<DateType>
  | PickerPanelTimeProps<DateType>;

export type HeaderRender<DateType> = (config: {
  value: DateType;
  type: Exclude<PickerMode, 'date' | 'time'>;
  onChange: (date: DateType) => void;
  onTypeChange: (type: Exclude<PickerMode, 'date' | 'time'>) => void;
}) => React.ReactNode;

export interface DatePickerPanelProps<DateType> {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  locale?: typeof enUS;
  validRange?: [DateType, DateType];
  disabledDate?: (date: DateType) => boolean;
  value?: DateType;
  defaultValue?: DateType;
  picker?: Exclude<PickerMode, 'date' | 'time'>;
  onChange?: (date: DateType) => void;
  onSelect?: (date: DateType) => void;
}

function generatePickerPanel<DateType>(generateConfig: GenerateConfig<DateType>) {
  function isSameYear(date1: DateType, date2: DateType) {
    return date1 && date2 && generateConfig.getYear(date1) === generateConfig.getYear(date2);
  }

  function isSameMonth(date1: DateType, date2: DateType) {
    return (
      isSameYear(date1, date2) && generateConfig.getMonth(date1) === generateConfig.getMonth(date2)
    );
  }

  function isSameDate(date1: DateType, date2: DateType) {
    return (
      isSameMonth(date1, date2) && generateConfig.getDate(date1) === generateConfig.getDate(date2)
    );
  }

  const DatePickerPanel = (props: DatePickerPanelProps<DateType>) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      style,
      value,
      defaultValue,
      disabledDate,
      picker,
      validRange,
      onChange,
      onSelect,
    } = props;
    const { getPrefixCls } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls('picker', customizePrefixCls);

    // ====================== State =======================

    // Value
    const [mergedValue, setMergedValue] = useMergedState(() => value || generateConfig.getNow(), {
      defaultValue,
      value,
    });

    // Disabled Date
    const mergedDisabledDate = React.useCallback(
      (date: DateType) => {
        const notInRange = validRange
          ? generateConfig.isAfter(validRange[0], date) ||
            generateConfig.isAfter(date, validRange[1])
          : false;
        return notInRange || !!disabledDate?.(date);
      },
      [disabledDate, validRange],
    );

    // ====================== Events ======================
    const triggerChange = (date: DateType) => {
      setMergedValue(date);

      if (!isSameDate(date, mergedValue)) {
        onChange?.(date);
      }
    };

    const onInternalSelect = (date: DateType) => {
      triggerChange(date);
      onSelect?.(date);
    };

    // ====================== Locale ======================
    const getDefaultLocale = () => {
      const { locale } = props;
      const result = {
        ...enUS,
        ...locale,
      };
      result.lang = {
        ...result.lang,
        ...(locale || {}).lang,
      };
      return result;
    };

    return (
      <LocaleReceiver componentName="Calendar" defaultLocale={getDefaultLocale}>
        {(contextLocale) => (
          <div className={classNames(className)} style={style}>
            <RCPickerPanel
              value={mergedValue}
              prefixCls={prefixCls}
              locale={contextLocale.lang}
              generateConfig={generateConfig}
              onSelect={onInternalSelect}
              picker={picker}
              disabledDate={mergedDisabledDate}
              prevIcon={<span className={`${prefixCls}-prev-icon`} />}
              nextIcon={<span className={`${prefixCls}-next-icon`} />}
              superPrevIcon={<span className={`${prefixCls}-super-prev-icon`} />}
              superNextIcon={<span className={`${prefixCls}-super-next-icon`} />}
            />
          </div>
        )}
      </LocaleReceiver>
    );
  };

  return DatePickerPanel;
}

export default generatePickerPanel;
