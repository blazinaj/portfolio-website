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
export declare type ProjectCreateFormInputValues = {
  name?: string;
  description?: string;
  link?: string;
};
export declare type ProjectCreateFormValidationValues = {
  name?: ValidationFunction<string>;
  description?: ValidationFunction<string>;
  link?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type ProjectCreateFormOverridesProps = {
  ProjectCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  name?: PrimitiveOverrideProps<TextFieldProps>;
  description?: PrimitiveOverrideProps<TextFieldProps>;
  link?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProjectCreateFormProps = React.PropsWithChildren<
  {
    overrides?: ProjectCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: ProjectCreateFormInputValues,
    ) => ProjectCreateFormInputValues;
    onSuccess?: (fields: ProjectCreateFormInputValues) => void;
    onError?: (
      fields: ProjectCreateFormInputValues,
      errorMessage: string,
    ) => void;
    onChange?: (
      fields: ProjectCreateFormInputValues,
    ) => ProjectCreateFormInputValues;
    onValidate?: ProjectCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function ProjectCreateForm(
  props: ProjectCreateFormProps,
): React.ReactElement;
