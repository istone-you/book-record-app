/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { BooksGroup as BooksGroup0 } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import BooksGroup from "./BooksGroup";
import { Collection } from "@aws-amplify/ui-react";
export default function BooksGroupCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: BooksGroup0,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    async function setItemsFromDataStore() {
      var loaded = await Promise.all(
        itemsDataStore.map(async (item) => ({
          ...item,
          Books: await item.Books.toArray(),
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isSearchable="true"
      isPaginated={true}
      searchPlaceholder="検索"
      itemsPerPage={10}
      direction="row"
      alignItems="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "BooksGroupCollection")}
      {...rest}
    >
      {(item, index) => (
        <BooksGroup
          booksGroup={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></BooksGroup>
      )}
    </Collection>
  );
}
