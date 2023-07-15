import { cloneElement, isValidElement } from "react";

interface Props extends React.AllHTMLAttributes<HTMLSpanElement> {}

export const ButtonIcon = (props: Props) => {
  const { children, ...rest } = props;

  const _children = isValidElement(children)
    ? cloneElement(children, {
        // @ts-expect-error typings are wrong
        "aria-hidden": true,
        focusable: false,
      })
    : children;

  return <span {...rest}>{_children}</span>;
};
