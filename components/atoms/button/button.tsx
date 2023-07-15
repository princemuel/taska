import { cn } from "@/lib";
import { cva, type VariantProps } from "cva";
import NextLink, { type LinkProps } from "next/link";
import { ButtonContent, type ButtonContentProps } from "./button-content";

export const buttonVariants = cva(
  [
    "inline-flex items-center font-bold text-white transition-colors",
    "focus-visible:outline-none focus-visible:ring-1",
    "disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-brand-500 text-white hover:bg-brand-300 focus:bg-brand-300",
        neutral:
          "border border-black bg-white text-black hover:bg-black hover:text-white focus:bg-black focus:text-white",
        destructive:
          "bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90",
        outline:
          "border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        secondary:
          "bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        ghost:
          "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
        none: "",
      },
      text: {
        default: "text-200 uppercase leading-300 tracking-100",
      },
      size: {
        default: "px-12 py-5",
        sm: "px-7 py-5",
        md: "",
        lg: "",
        none: null,
      },
      fullWidth: {
        true: "w-full",
      },
      weight: {
        bold: "font-bold",
        medium: "font-medium",
        regular: "font-normal",
      },
      radius: {
        default: "rounded-lg",
        pill: "rounded-pill",
        full: "rounded-full",
        brand: "rounded-brand",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      text: "default",
      weight: "bold",
    },
    compoundVariants: [
      // {
      //   variant: 'default',
      //   size: 'lg',
      //   fullWidth: true,
      //   weight: 'bold',
      // },
      // {
      //   variant: 'destructive',
      //   size: 'sm',
      //   fullWidth: true,
      // },
    ],
  }
);

interface ButtonVariants extends VariantProps<typeof buttonVariants> {}

const button = (variants: ButtonVariants, className = "") =>
  cn(buttonVariants(variants), className);

export type ButtonProps = ButtonVariants &
  ButtonContentProps & {
    href?: LinkProps<string>["href"];
  } & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = (props: ButtonProps) => {
  const {
    variant,
    size,
    href,
    leftIcon,
    rightIcon,
    children,
    className,
    ...rest
  } = props;

  if (href) {
    return (
      <NextLink legacyBehavior href={href} passHref>
        <a className={button({ variant, size }, className)} {...rest}>
          <ButtonContent leftIcon={leftIcon} rightIcon={rightIcon}>
            {children}
          </ButtonContent>
        </a>
      </NextLink>
    );
  }

  return (
    <button className={button({ variant, size }, className)} {...rest}>
      <ButtonContent leftIcon={leftIcon} rightIcon={rightIcon}>
        {children}
      </ButtonContent>
    </button>
  );
};
