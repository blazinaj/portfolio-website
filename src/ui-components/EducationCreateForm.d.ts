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
export declare type EducationCreateFormInputValues = {
  title?: string;
  subTitle?: string;
  date?: string;
};
export declare type EducationCreateFormValidationValues = {
  title?: ValidationFunction<string>;
  subTitle?: ValidationFunction<string>;
  date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type EducationCreateFormOverridesProps = {
  EducationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  title?: PrimitiveOverrideProps<TextFieldProps>;
  subTitle?: PrimitiveOverrideProps<TextFieldProps>;
  date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EducationCreateFormProps = React.PropsWithChildren<
  {
    overrides?: EducationCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: EducationCreateFormInputValues,
    ) => EducationCreateFormInputValues;
    onSuccess?: (fields: EducationCreateFormInputValues) => void;
    onError?: (
      fields: EducationCreateFormInputValues,
      errorMessage: string,
    ) => void;
    onChange?: (
      fields: EducationCreateFormInputValues,
    ) => EducationCreateFormInputValues;
    onValidate?: EducationCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function EducationCreateForm(
  props: EducationCreateFormProps,
): React.ReactElement;
