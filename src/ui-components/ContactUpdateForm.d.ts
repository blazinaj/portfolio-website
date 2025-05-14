/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Contact } from "../models";
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
export declare type ContactUpdateFormInputValues = {
  firstName?: string;
  lastName?: string;
  bio?: string;
  linkedIn?: string;
  github?: string;
  facebook?: string;
};
export declare type ContactUpdateFormValidationValues = {
  firstName?: ValidationFunction<string>;
  lastName?: ValidationFunction<string>;
  bio?: ValidationFunction<string>;
  linkedIn?: ValidationFunction<string>;
  github?: ValidationFunction<string>;
  facebook?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type ContactUpdateFormOverridesProps = {
  ContactUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  firstName?: PrimitiveOverrideProps<TextFieldProps>;
  lastName?: PrimitiveOverrideProps<TextFieldProps>;
  bio?: PrimitiveOverrideProps<TextFieldProps>;
  linkedIn?: PrimitiveOverrideProps<TextFieldProps>;
  github?: PrimitiveOverrideProps<TextFieldProps>;
  facebook?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: ContactUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    contact?: Contact;
    onSubmit?: (
      fields: ContactUpdateFormInputValues,
    ) => ContactUpdateFormInputValues;
    onSuccess?: (fields: ContactUpdateFormInputValues) => void;
    onError?: (
      fields: ContactUpdateFormInputValues,
      errorMessage: string,
    ) => void;
    onChange?: (
      fields: ContactUpdateFormInputValues,
    ) => ContactUpdateFormInputValues;
    onValidate?: ContactUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function ContactUpdateForm(
  props: ContactUpdateFormProps,
): React.ReactElement;
