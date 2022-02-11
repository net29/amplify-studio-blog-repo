/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { Post } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PostCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    post?: Post;
    items?: any[];
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function PostCollection(props: PostCollectionProps): React.ReactElement;
