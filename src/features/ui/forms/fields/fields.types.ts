export type Variant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export type ReactHTML = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  React.InputHTMLAttributes<HTMLInputElement>;

export interface FiledProps extends ReactHTML {
  variant?: Variant;
  rounded?: boolean;
  outline?: boolean;
  children?: React.ReactNode;
}

export interface ClassVariations extends ReactHTML {
  variant?: Variant;
  rounded?: boolean;
  outline?: boolean;
}
