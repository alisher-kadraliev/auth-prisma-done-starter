"use client"

import {
  Card,
  CardContent,
  CardDescription, CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { useCurrentUser } from "@/hooks/use-current-user";
import Link from "next/link";
import Image from "next/image";

export default function PlaceholderContent() {
  const user = useCurrentUser()
  console.log(user);
  const fallbackImage = '/fallback-image.png';
  return (

    <Card className="rounded-lg border-none mt-6 h-[660px]">
      <CardHeader>
        <CardTitle>Setttings</CardTitle>
        <CardDescription>
          Update your account settings.
        </CardDescription>
      </CardHeader>
      <hr />
      <div className="flex justify-start max-lg:flex-col ml-8 items-start pt-6 gap-4">
        <div>
          <nav
            className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1"
          >
            <Link
              href="/account"
              className="bg-muted hover:bg-muted w-auto px-3 py-2 rounded-xl hover:bg-slate-300 transition-all"
            >
              Account
            </Link>
          </nav>
        </div>
        <CardContent className="px-6 max-lg:px-0 max-md:overflow-scroll">
          <div className="flex flex-col gap-9">
            <div className="flex items-end max-lg:flex-wrap gap-8">
              <div className="flex flex-col gap-2">
                <Label className="text-muted-foreground">
                  Avatar
                </Label>
                <Image
                  src={user?.image ?? fallbackImage}
                  width={80}
                  height={80}
                  className="rounded-full"
                  alt="User Avatar"
                />
              </div>
              <div className="flex gap-10">
                <div className="flex flex-col gap-2">
                  <Label className="text-muted-foreground">
                    User role:
                  </Label>
                  <div className="font-bold">{user?.role ?? undefined} </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-muted-foreground">
                    Created:
                  </Label>
                  <div className="font-bold">{user?.id} </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between max-lg:flex-wrap gap-8">
              <div className="flex flex-col gap-2">
                <Label className="text-muted-foreground">
                  Name
                </Label>
                <input type="text" className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-2 rounded-md flex text-center focus-visible:outline-none placeholder:text-black focus-visible:ring-0 focus-visible:ring-offset-0 font-bold text-xl" value={user?.name ?? undefined} />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-muted-foreground">
                  Email
                </Label>
                <input type="text" className="w-auto shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-2 rounded-md flex text-center focus-visible:outline-none placeholder:text-black focus-visible:ring-0 focus-visible:ring-offset-0 font-bold text-xl" value={user?.email ?? undefined} />
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>

  );
}
