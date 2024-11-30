import PostCard from "@/components/PostCard";
import { useGlobalContext } from "@/contexts/GlobalProvider";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// const blogPosts = [
//   {
//     id: 1,
//     label: "Design",
//     title: "Building a successful Design System",
//     author: "John Doe",
//     avatarColor: "red",
//     datePosted: "2 days ago",
//   },
//   {
//     id: 2,
//     label: "Development",
//     title: "Mastering React Native Animations",
//     author: "Jane Smith",
//     avatarColor: "blue",
//     datePosted: "5 days ago",
//   },
//   {
//     id: 3,
//     label: "Marketing",
//     title: "The Secret to Viral Content",
//     author: "Michael Brown",
//     avatarColor: "green",
//     datePosted: "1 week ago",
//   },
//   {
//     id: 4,
//     label: "UI/UX",
//     title: "Creating Accessible User Interfaces",
//     author: "Emily Davis",
//     avatarColor: "purple",
//     datePosted: "3 hours ago",
//   },
//   {
//     id: 5,
//     label: "Productivity",
//     title: "10 Tips for Remote Work Efficiency",
//     author: "Chris Johnson",
//     avatarColor: "orange",
//     datePosted: "4 days ago",
//   },
// ];

const blogPosts = [
  {
    id: 1,
    label: "Design",
    title: "Building a successful Design System",
    author: "John Doe",
    avatarColor: "red",
    datePosted: "2 days ago",
    minsRead: 8, // Added reading time in minutes
  },
  {
    id: 2,
    label: "Development",
    title: "Mastering React Native Animations",
    author: "Jane Smith",
    avatarColor: "blue",
    datePosted: "5 days ago",
    minsRead: 10, // Added reading time in minutes
  },
  {
    id: 3,
    label: "Marketing",
    title: "The Secret to Viral Content",
    author: "Michael Brown",
    avatarColor: "green",
    datePosted: "1 week ago",
    minsRead: 7, // Added reading time in minutes
  },
  {
    id: 4,
    label: "UI/UX",
    title: "Creating Accessible User Interfaces",
    author: "Emily Davis",
    avatarColor: "purple",
    datePosted: "3 hours ago",
    minsRead: 6, // Added reading time in minutes
  },
  {
    id: 5,
    label: "Productivity",
    title: "10 Tips for Remote Work Efficiency",
    author: "Chris Johnson",
    avatarColor: "orange",
    datePosted: "4 days ago",
    minsRead: 5, // Added reading time in minutes
  },
];

const Home = () => {
  const { user } = useGlobalContext();

  console.log("User in Home:", user);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <MaterialIcons name="menu" size={24} color="black" />
        </View>
        <View>
          <Octicons name="feed-person" size={24} color="black" />
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 23,
            fontWeight: "700",
            marginVertical: 10,
          }}
        >
          {" "}
          Hi, Good Day!
        </Text>
      </View>

      <View style={styles.categoryContainer}>
        {["for you", "Popular", "Trending", "following", "recent"].map(
          (category, index) => (
            <ScrollView horizontal key={index} style={styles.categoryItem}>
              <Text style={styles.categoryText}>{category}</Text>
            </ScrollView>
          )
        )}
      </View>
      <View style={styles.feedContainer}>
        {blogPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  categoryItem: {},
  categoryText: {
    fontWeight: "medium",
    textTransform: "capitalize",
  },
});
