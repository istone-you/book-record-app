/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BooksGroup } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BooksGroupOverridesProps = {
    BooksGroup?: PrimitiveOverrideProps<ViewProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type BooksGroupProps = React.PropsWithChildren<Partial<ViewProps> & {
    label?: String;
    booksGroup?: BooksGroup;
} & {
    overrides?: BooksGroupOverridesProps | undefined | null;
}>;
export default function BooksGroup(props: BooksGroupProps): React.ReactElement;
