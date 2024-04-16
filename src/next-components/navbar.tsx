/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xYHqD5MkVkT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import signin from "@/app/sign-in/[[...sign-in]]/page";
import signup from "@/app/sign-up/[[...sign-up]]/page";
import { Mail } from "lucide-react";

export default function Navbar() {
  const { user, isLoaded } = useUser();
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link className="flex items-center" href="#">
            {/* <MountainIcon className="h-6 w-6" /> */}
            <Image
              src="/blogger_img.png"
              alt="bloggerImage"
              height={50}
              width={50}
            />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden md:flex gap-10">
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="#"
            >
              About
            </Link>
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="#"
            >
              Services
            </Link>
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="#"
            >
              Contact
            </Link>
          </nav>
          {isLoaded && user && (
            <>
              <Link href="/dashboard">Dashboard</Link>
              <UserButton afterSignOutUrl="/"></UserButton>
            </>
          )}
          {!user && (
            <div className="flex items-center gap-4">
              <Link href="/sign-in">
                <Button size="sm" variant="ghost">
                  <Mail className="mr-2 h-4 w-4" /> Sign In
                </Button>
              </Link>
              /
              <Link href="/sign-up">
                <Button size="sm" variant="ghost">
                  <Mail className="mr-2 h-4 w-4" /> Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
