/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BooksGroup } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BooksGroupUpdateFormInputValues = {
    title?: string;
    image?: string;
};
export declare type BooksGroupUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BooksGroupUpdateFormOverridesProps = {
    BooksGroupUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BooksGroupUpdateFormProps = React.PropsWithChildren<{
    overrides?: BooksGroupUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    booksGroup?: BooksGroup;
    onSubmit?: (fields: BooksGroupUpdateFormInputValues) => BooksGroupUpdateFormInputValues;
    onSuccess?: (fields: BooksGroupUpdateFormInputValues) => void;
    onError?: (fields: BooksGroupUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BooksGroupUpdateFormInputValues) => BooksGroupUpdateFormInputValues;
    onValidate?: BooksGroupUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BooksGroupUpdateForm(props: BooksGroupUpdateFormProps): React.ReactElement;
