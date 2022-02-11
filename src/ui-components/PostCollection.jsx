/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Post } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import SocialA from "./SocialA";
import { Collection } from "@aws-amplify/ui-react";
import { SortDirection } from "@aws-amplify/datastore";
export default function PostCollection(props) {
  const { post, items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const itemsPagination = {
    sort: (s) => s.updatedAt(SortDirection.DESCENDING),
  };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Post,
          pagination: itemsPagination,
        }).items;
  return (
    <Collection
      type="list"
      direction="column"
      alignItems="stretch"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <SocialA
          post={item}
          key={item.id}
          {...getOverrideProps(overrides, "Collection.SocialA[0]")}
        ></SocialA>
      )}
    </Collection>
  );
}
