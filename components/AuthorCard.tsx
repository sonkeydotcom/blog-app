import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AuthorCard = ({ author }) => {
  return (
    <View style={styles.authorInfo}>
      {/* Author Avatar */}
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{author.charAt(0)}</Text>
      </View>

      {/* Author Details */}
      <View style={styles.authorDetails}>
        {/* Author Name and Follow Button */}
        <View style={styles.authorHeader}>
          <Text style={styles.authorName}>{author}</Text>
          <Entypo name="dot-single" size={16} color="gray" />
          <Text style={styles.followText}>Follow</Text>
        </View>

        {/* Additional Info */}
        <View style={styles.metaInfo}>
          <Text style={styles.metaText}>Today</Text>
          <Entypo name="dot-single" size={16} color="gray" />
          <Text style={styles.metaText}>5 mins read</Text>
          <Entypo name="dot-single" size={16} color="gray" />
          <Text style={styles.metaText}>12 comments</Text>
        </View>
      </View>
    </View>
  );
};

export default AuthorCard;

const styles = StyleSheet.create({
  authorInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#f9f9f9", // Light background for card
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Android shadow
    marginVertical: 10,
  },
  avatar: {
    height: 35,
    width: 35,
    backgroundColor: "red", // Or use post.avatarColor
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  authorDetails: {
    flex: 1,
    flexDirection: "column",
  },
  authorHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  authorName: {
    fontWeight: "700",
    fontSize: 14,
    color: "#333",
  },
  followText: {
    fontSize: 12,
    color: "#007AFF", // Accent color for Follow
    fontWeight: "600",
  },
  metaInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  metaText: {
    fontSize: 12,
    color: "gray",
  },
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
