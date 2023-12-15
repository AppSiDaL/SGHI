import { View, Text } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

export default function TableSkeleton() {
  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <Skeleton style={{ flex: 1,margin:2 }} animation="pulse" height={40} />
        <Skeleton style={{ flex: 1,margin:2 }} animation="pulse" height={40} />
        <Skeleton style={{ flex: 2,margin:2 }} animation="pulse" height={40} />
        <Skeleton style={{ flex: 0.5,margin:2 }} animation="pulse" height={40} />
        <Skeleton style={{ flex: 2,margin:2 }} animation="pulse" height={40} />
      </View>
    </>
  );
}
