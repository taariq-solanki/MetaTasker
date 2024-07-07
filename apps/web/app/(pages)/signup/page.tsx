"use client"

import Link from "next/link"
import { Button } from "@repo/ui/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card"
import { Input } from "@repo/ui/components/ui/input"
import { Label } from "@repo/ui/components/ui/label"
import { useRecoilState } from "recoil"
import { userConfPasswordAtom, userEmailAtom, userNameAtom, userPasswordAtom } from "@repo/store/src/atoms/userDetail"
import axios from "axios"
import { redirect } from "next/navigation"
import { signIn } from "next-auth/react"

export default function Signup() {

  const [userName, setUserName] = useRecoilState(userNameAtom)
  const [userEmail, setUserEmail] = useRecoilState(userEmailAtom)
  const [userPassword, setUserPassword] = useRecoilState(userPasswordAtom)
  const [userConfPassword, setUserConfPassword] = useRecoilState(userConfPasswordAtom)
  return <div className="pt-20">

    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid  gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">User name</Label>
              <Input  onChange={function (i) {
                setUserName(i.target.value)
              }} id="userName" placeholder="xyz" required />
            </div>

          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={function (i) {
                setUserEmail(i.target.value)
              }}
              id="userEmail"
              type="email"
              placeholder="xyz@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={function (i) {
                setUserPassword(i.target.value)
              }}
              id="userPassword" type="password" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              onChange={function (i) {
                setUserConfPassword(i.target.value)
              }}
              id="userPassword" type="password" />
          </div>

          <Button
            onClick={async function () {

              try {
                const axdata = await axios({
                  method: "POST",
                  url: 'api/user/signup',
                  data: {
                    userName: userName,
                    userEmail: userEmail,
                    userPassword: userPassword
                  }
                })

                if (axdata.status == 200) {
                  alert("Account Created!")
                  signIn()

                }
                console.log(axdata)
              } catch {

                alert("Email Already Exists!")

              }






            }}
            type="submit" variant={"outline"} className="w-full">
            Create an account
          </Button>

        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Button onClick={function () {
            signIn()
          }} variant={"link"}>signIn</Button>
        </div>
      </CardContent>
    </Card>
  </div>
}