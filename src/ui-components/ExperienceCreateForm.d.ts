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
export declare type ExperienceCreateFormInputValues = {
  title?: string;
  subTitle?: string;
  date?: string;
  logo?: string;
};
export declare type ExperienceCreateFormValidationValues = {
  title?: ValidationFunction<string>;
  subTitle?: ValidationFunction<string>;
  date?: ValidationFunction<string>;
  logo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type ExperienceCreateFormOverridesProps = {
  ExperienceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  title?: PrimitiveOverrideProps<TextFieldProps>;
  subTitle?: PrimitiveOverrideProps<TextFieldProps>;
  date?: PrimitiveOverrideProps<TextFieldProps>;
  logo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExperienceCreateFormProps = React.PropsWithChildren<
  {
    overrides?: ExperienceCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: ExperienceCreateFormInputValues,
    ) => ExperienceCreateFormInputValues;
    onSuccess?: (fields: ExperienceCreateFormInputValues) => void;
    onError?: (
      fields: ExperienceCreateFormInputValues,
      errorMessage: string,
    ) => void;
    onChange?: (
      fields: ExperienceCreateFormInputValues,
    ) => ExperienceCreateFormInputValues;
    onValidate?: ExperienceCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function ExperienceCreateForm(
  props: ExperienceCreateFormProps,
): React.ReactElement;
