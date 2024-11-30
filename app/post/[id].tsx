import AuthorCard from "@/components/AuthorCard";
import PostContent from "@/components/PostContent";
import PostCta from "@/components/PostCta";
import { useGlobalContext } from "@/contexts/GlobalProvider";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CommentCard = ({ comment }) => (
  <View style={styles.commentCard}>
    <Text style={styles.commentAuthor}>{comment.author}</Text>
    <Text style={styles.commentText}>{comment.text}</Text>
  </View>
);

const PostDetails = () => {
  const { id, post } = useLocalSearchParams();
  const postDetails = JSON.parse(post);
  const { comment, setComment, user } = useGlobalContext();

  const [userComment, setUserComment] = useState("");

  // Mock data for comments
  // const comments = [
  //   {
  //     author: "John Doe",
  //     text: "This is a great post! I really enjoyed reading it.",
  //   },
  //   {
  //     author: "Jane Smith",
  //     text: "I agree with John, this post is very insightful.",
  //   },
  // ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Placeholder for the post image or banner */}
        <View style={styles.banner}></View>

        {/* Post Details */}
        <View style={styles.postContainer}>
          <Text style={styles.label}>{postDetails.label}</Text>
          <Text style={styles.title}>{postDetails.title}</Text>

          {/* Author Section */}
          <AuthorCard author={postDetails.author} />

          {/* Post Content */}
          <PostContent />
        </View>

        {/* Comments Section */}
        <View style={styles.commentsSection}>
          <Text style={styles.commentsTitle}>Comments</Text>
          {comment.map((comment, index) => (
            <CommentCard key={index} comment={comment} />
          ))}
        </View>

        <View
          style={{
            marginHorizontal: 12,
            marginVertical: 16,
            borderRadius: 12,
          }}
        >
          <TextInput
            value={userComment}
            onChangeText={(text) => setUserComment(text)}
            style={{
              height: 60,
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 8,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              console.log(userComment);
              comment.push({
                author: user.name,
                text: userComment,
              });
              setUserComment("");
            }}
          >
            <Text
              style={{ fontSize: 16, color: "#007AFF", fontWeight: "bold" }}
            >
              Comment
            </Text>
          </TouchableOpacity>
        </View>

        <PostCta />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  banner: {
    height: 250,
    backgroundColor: "#e0e0e0",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  postContainer: {
    padding: 16,
    backgroundColor: "#fff",
    marginTop: -20,
    marginHorizontal: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 16,
  },
  commentsSection: {
    padding: 16,
    backgroundColor: "#fff",
    marginTop: 16,
    marginHorizontal: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  commentsTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
  },
  commentCard: {
    padding: 12,
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    marginBottom: 12,
  },
  commentAuthor: {
    fontSize: 14,
    fontWeight: "600",
    color: "#007AFF",
    marginBottom: 4,
  },
  commentText: {
    fontSize: 16,
    color: "#333",
  },
});

export default PostDetails;
