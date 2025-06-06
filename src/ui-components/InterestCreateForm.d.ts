/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
  [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
  [key: string]: string;
};
export declare type Variant = {
  variantValues: VariantValues;
  overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse,
) => ValidationResponse | Promise<ValidationResponse>;
export declare type InterestCreateFormInputValues = {
  name?: string;
  description?: string;
  icon?: string;
};
export declare type InterestCreateFormValidationValues = {
  name?: ValidationFunction<string>;
  description?: ValidationFunction<string>;
  icon?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type InterestCreateFormOverridesProps = {
  InterestCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  name?: PrimitiveOverrideProps<TextFieldProps>;
  description?: PrimitiveOverrideProps<TextFieldProps>;
  icon?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InterestCreateFormProps = React.PropsWithChildren<
  {
    overrides?: InterestCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: InterestCreateFormInputValues,
    ) => InterestCreateFormInputValues;
    onSuccess?: (fields: InterestCreateFormInputValues) => void;
    onError?: (
      fields: InterestCreateFormInputValues,
      errorMessage: string,
    ) => void;
    onChange?: (
      fields: InterestCreateFormInputValues,
    ) => InterestCreateFormInputValues;
    onValidate?: InterestCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function InterestCreateForm(
  props: InterestCreateFormProps,
): React.ReactElement;
