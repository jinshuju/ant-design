import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import {
  FunctionCheckIcon,
  FunctionCloseIcon,
  FunctionIndexDownIcon,
  FunctionIndexUpIcon,
  FunctionSearchIcon,
} from '@gd-uikit/icons';
import type { ReactNode } from 'react';
import * as React from 'react';

type RenderNode = React.ReactNode | ((props: any) => React.ReactNode);

export default function getIcons({
  suffixIcon,
  clearIcon,
  menuItemSelectedIcon,
  removeIcon,
  loading,
  multiple,
  hasFeedback,
  prefixCls,
  showArrow,
  feedbackIcon,
}: {
  suffixIcon?: React.ReactNode;
  clearIcon?: RenderNode;
  menuItemSelectedIcon?: RenderNode;
  removeIcon?: RenderNode;
  loading?: boolean;
  multiple?: boolean;
  hasFeedback?: boolean;
  feedbackIcon?: ReactNode;
  prefixCls: string;
  showArrow?: boolean;
}) {
  // Clear Icon
  const mergedClearIcon = clearIcon ?? <CloseCircleFilled />;

  // Validation Feedback Icon
  const getSuffixIconNode = (arrowIcon?: ReactNode) => (
    <>
      {showArrow !== false && arrowIcon}
      {hasFeedback && feedbackIcon}
    </>
  );

  // Arrow item icon
  let mergedSuffixIcon = null;
  if (suffixIcon !== undefined) {
    mergedSuffixIcon = getSuffixIconNode(suffixIcon);
  } else if (loading) {
    mergedSuffixIcon = getSuffixIconNode(<LoadingOutlined spin />);
  } else {
    const iconCls = `${prefixCls}-suffix`;
    mergedSuffixIcon = ({ open, showSearch }: { open: boolean; showSearch: boolean }) => {
      if (open && showSearch) {
        return getSuffixIconNode(<FunctionSearchIcon className={iconCls} size={18} />);
      }

      if (open) {
        return getSuffixIconNode(<FunctionIndexUpIcon className={iconCls} size={20} />);
      }

      return getSuffixIconNode(<FunctionIndexDownIcon className={iconCls} size={20} />);
    };
  }

  // Checked item icon
  let mergedItemIcon = null;
  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = <FunctionCheckIcon size={20} />;
  } else {
    mergedItemIcon = null;
  }

  let mergedRemoveIcon = null;
  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = <FunctionCloseIcon size={18} />;
  }

  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon,
  };
}
