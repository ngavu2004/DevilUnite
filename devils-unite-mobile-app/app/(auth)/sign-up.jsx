import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState,useGlobalContext } from "react";
import { Link, router } from "expo-router";

import { images } from "../../constants";
import  CustomButton  from "../../components/CustomButton";
import FormField from "../../components/FormField";


const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  })
  const submit = () => {

  }
  return (
    <SafeAreaView className = "bg-primary h-full">
      <ScrollView>
        <View className="w-full flex justify-center  min-h-[75vh] px-4 my-6">
          <View className="items-center">
        <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[140px] h-[180px]"
          />
          </View>
          <View className = " -top-10">
          <Text className="text-2xl font-semibold text-black mt-10 font-psemibold">
            Sign Up to Devils Unite
          </Text>
          <FormField
          title="Username"
          value = {form.username}
          handleChangeText={(e) => setForm({ ...form, username: e })}
          otherStyles="mt-10"
          />

          <FormField
          title="Email"
          value = {form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
         <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-10"
            isLoading={isSubmitting}
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-black font-pregular">
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary-300"
            >
              Login
            </Link>
            </View>
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp