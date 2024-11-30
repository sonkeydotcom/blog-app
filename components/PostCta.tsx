import { useGlobalContext } from "@/contexts/GlobalProvider";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PostCta = () => {
  const { comment } = useGlobalContext();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <AntDesign name="like2" size={26} color="black" />
        <Text>20</Text>
      </View>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="comment-outline"
          size={26}
          color="black"
        />
        <Text>{comment.length}</Text>
      </View>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="bookmark-plus-outline"
          size={26}
          color="black"
        />
        <Text>5</Text>
      </View>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="share-all-outline"
          size={26}
          color="black"
        />
        <Text>Share</Text>
      </View>
    </View>
  );
};

export default PostCta;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly", // Evenly spaced icons
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginTop: 20,
    borderRadius: 12,
    marginHorizontal: 12,
    marginBottom: 20,
    backgroundColor: "#f5f5f5", // Lighter background for contrast
    shadowColor: "#000", // Shadow to make icons stand out
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5, // Android shadow
    position: "fixed",
    zIndex: 1,
    top: "auto",
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 14,
  },
});
