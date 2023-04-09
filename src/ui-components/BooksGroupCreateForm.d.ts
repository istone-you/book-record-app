/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BooksGroupCreateFormInputValues = {
    title?: string;
    image?: string;
};
export declare type BooksGroupCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BooksGroupCreateFormOverridesProps = {
    BooksGroupCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BooksGroupCreateFormProps = React.PropsWithChildren<{
    overrides?: BooksGroupCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BooksGroupCreateFormInputValues) => BooksGroupCreateFormInputValues;
    onSuccess?: (fields: BooksGroupCreateFormInputValues) => void;
    onError?: (fields: BooksGroupCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BooksGroupCreateFormInputValues) => BooksGroupCreateFormInputValues;
    onValidate?: BooksGroupCreateFormValidationValues;
} & React.CSSProperties>;
export default function BooksGroupCreateForm(props: BooksGroupCreateFormProps): React.ReactElement;
