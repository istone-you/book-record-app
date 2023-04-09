/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function BooksGroup(props) {
  const { label, booksGroup, overrides, ...rest } = props;
  return (
    <View
      width="354px"
      height="471px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      border="2px SOLID rgba(0,0,0,1)"
      boxShadow="15px 15px 0px rgba(0, 0, 0, 1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "BooksGroup")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="29.045454025268555px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="268px"
        height="37px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 18.5px - -186px)"
        left="calc(50% - 134px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={booksGroup?.title}
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Image
        width="221px"
        height="384px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="17px"
        left="65px"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        objectFit="contain"
        src={booksGroup?.image}
        {...getOverrideProps(overrides, "Image")}
      ></Image>
    </View>
  );
}
