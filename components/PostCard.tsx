import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Post {
  id: number;
  title: string;
  label: string;
  author: string;
  comments: number;
  likes: number;
  datePosted: string;
}

// {
//     id: number;
//     name: string;
//     avatar: string;
//   };

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        router.push({
          pathname: "/post/[id]",
          params: { id: post.id, post: JSON.stringify(post) },
        })
      }
      style={styles.container}
    >
      <View style={styles.thumbnail}></View>
      <View style={styles.postDetails}>
        <Text style={styles.label}>{post.label}</Text>
        <Text style={styles.title}>{post.title}</Text>
        <View style={styles.authorInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{post.author.charAt(0)}</Text>
          </View>
          <View>
            <Text style={styles.authorName}>{post.author}</Text>
            <Text style={styles.authorDate}>{post.datePosted}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          marginTop: 5,
        }}
      >
        <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
        <MaterialIcons name="bookmark-add" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#ffffff",
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: "row",
    gap: 10,
    marginVertical: 20,

    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Android Shadow
    elevation: 3,
  },

  thumbnail: {
    height: 100,
    width: 100,
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: "lightgray",
  },

  postDetails: {
    width: "55%",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  label: {
    fontWeight: "bold",
    backgroundColor: "#cccccc",
    borderRadius: 12,
    textAlign: "center",
    fontSize: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    alignSelf: "flex-start",
  },

  title: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 5,
  },

  authorInfo: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },

  avatar: {
    height: 35,
    width: 35,
    backgroundColor: "red", // Or use post.avatarColor
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#fff",
    fontWeight: "bold",
  },

  authorName: {
    fontWeight: "600",
    fontSize: 12,
  },

  authorDate: {
    fontSize: 12,
    color: "gray",
  },

  icons: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 5,
  },
});
