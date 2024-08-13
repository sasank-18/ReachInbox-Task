import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "@/public/icons/googleLogo.png";

const page = () => {
  return (
    <Card className=" flex flex-col background-light300_dark300 border-light_dark items-center max-w-[25%] w-[25%] min-w-72">
      <CardHeader className="pt-6 pb-3">
        <CardTitle className="text-center dark:text-white ">
          Create a new account
        </CardTitle>
        <CardDescription className="w-full  flex-col flex-1 justify-center items-center"></CardDescription>
      </CardHeader>
      <CardContent className=" flex flex-col w-full items-center">
        <Button
          className="rounded-md border-light_dark w-full dark:text-white "
          variant="outline"
        >
          <Image
            className="mr-3"
            width={14}
            height={14}
            alt="logo"
            src={Logo}
          />
          Sign Up with Google
        </Button>
        <Button className=" w-40%   mt-7 border-gray-300 bg-primary-500 text-white ">
          Create an Account
        </Button>
      </CardContent>
      <CardFooter className="pb-5">
        <p className="text-gray-400 text-sm ">
          Already have an account?
          <span className="text-black dark:text-white"> Sign in</span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default page;
