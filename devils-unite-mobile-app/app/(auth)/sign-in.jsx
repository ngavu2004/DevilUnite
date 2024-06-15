import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState,useGlobalContext } from "react";
import { Link, router } from "expo-router";

import { images } from "../../constants";
import  CustomButton  from "../../components/CustomButton";
import FormField from "../../components/FormField";


const SignIn = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
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
          <Text className="text-2xl font-semibold text-black mt-10 font-psemibold">
            Log in to Devils Unite
          </Text>
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
            title="Sign In"
            handlePress={() => router.push("/home")}
            containerStyles="mt-10"
            isLoading={isSubmitting}
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-black font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-black"
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn