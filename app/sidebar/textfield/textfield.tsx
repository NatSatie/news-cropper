"use client";

import {
    TextArea,
    TextField as AriaTextField,
    TextFieldProps as AriaTextFieldProps,
    ValidationResult
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { Description, FieldError, Input, Label, fieldBorderStyles } from './field';
import { composeTailwindRenderProps, focusRing } from "./../utils";

const inputStyles = tv({
  extend: focusRing,
  base: 'border-1 rounded-lg min-h-9 font-sans text-sm py-0 px-3 box-border transition',
  variants: {
    isFocused: fieldBorderStyles.variants.isFocusWithin,
    isInvalid: fieldBorderStyles.variants.isInvalid,
    isDisabled: fieldBorderStyles.variants.isDisabled
  }
});

const inputAreaStyles = tv({
  extend: focusRing,
  base: 'w-full [field-sizing:content] min-h-[100px] border-1 rounded-lg min-h-9 font-sans text-sm py-0 px-3 box-border transition',
  variants: {
    isFocused: fieldBorderStyles.variants.isFocusWithin,
    isInvalid: fieldBorderStyles.variants.isInvalid,
    isDisabled: fieldBorderStyles.variants.isDisabled
  }
});

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
  placeholder?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  isTextArea?: boolean;
}

export function TextField(
  { label, description, errorMessage, isTextArea, ...props }: TextFieldProps
) {
  return (
    <AriaTextField {...props} className={composeTailwindRenderProps(props.className, 'flex flex-col gap-1 font-sans')}>
      {label && <Label>{label}</Label>}
      {isTextArea ? (
        <TextArea className={inputAreaStyles}/>) : (<Input className={inputStyles} />)}
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  );
}
