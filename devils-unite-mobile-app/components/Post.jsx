import { View, Text, Image } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';

const Post = ({ post }) => {
  return (
    <View className="mb-10">
      <Divider width={1} orientation="horizontal" />
      <PostHeader post={post} />
      <PostImage post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View className="flex-row justify-between m-3 items-center">
    <View className="flex-row items-center">
      <Image
        source={{ uri: post.profile_picture }}
        className="w-10 h-10 rounded-full border-2 border-secondary-200"
      />
      <Text className="ml-2 font-semibold">{post.user}</Text>
    </View>
    <Text className="font-bold">...</Text>
  </View>
);

const PostImage = ({ post }) => (
  <View className="w-full h-96">
    <Image
      source={{ uri: post.imageUrl }}
      className="w-full h-full"
      resizeMode="cover"
    />
  </View>
);

export default Post;
