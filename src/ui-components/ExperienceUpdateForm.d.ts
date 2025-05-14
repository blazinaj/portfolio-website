/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Experience } from "../models";
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
export declare type ExperienceUpdateFormInputValues = {
  title?: string;
  subTitle?: string;
  date?: string;
  logo?: string;
};
export declare type ExperienceUpdateFormValidationValues = {
  title?: ValidationFunction<string>;
  subTitle?: ValidationFunction<string>;
  date?: ValidationFunction<string>;
  logo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type ExperienceUpdateFormOverridesProps = {
  ExperienceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  title?: PrimitiveOverrideProps<TextFieldProps>;
  subTitle?: PrimitiveOverrideProps<TextFieldProps>;
  date?: PrimitiveOverrideProps<TextFieldProps>;
  logo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExperienceUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: ExperienceUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    experience?: Experience;
    onSubmit?: (
      fields: ExperienceUpdateFormInputValues,
    ) => ExperienceUpdateFormInputValues;
    onSuccess?: (fields: ExperienceUpdateFormInputValues) => void;
    onError?: (
      fields: ExperienceUpdateFormInputValues,
      errorMessage: string,
    ) => void;
    onChange?: (
      fields: ExperienceUpdateFormInputValues,
    ) => ExperienceUpdateFormInputValues;
    onValidate?: ExperienceUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function ExperienceUpdateForm(
  props: ExperienceUpdateFormProps,
): React.ReactElement;
