"use client";

import { useEffect, useState } from "react";
import { Add, Logout, Person, Search } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { SignOutButton, SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

const TopBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <div className="flex justify-between items-center mt-6 border-fuchsia-500">
      <div className="relative">
        <input
          type="text"
          className="search-bar"
          placeholder="Search posts, people, ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search
          className="search-icon"
          onClick={"() => router.push(`/search/posts/${search}`)"}
        />
      </div>

      <button
        className="create-post-btn"
        onClick={() => router.push("/create-post")}
      >
        <Add /> <p>Create A Post</p>
      </button>
      <div className="flex gap-3">
        <SignedIn>
          <SignOutButton>
            <div className="flex items-center cursor-pointer md:hidden">
              {" "}
              {/* Wrap icon and text in a div */}
              <Logout sx={{ color: "white", fontSize: "32px" }} />
              <p className="text-body-bold text-light-1"></p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
      <div className="flex gap-4 md:hidden">
        <Link href="/">
          {/* <Person sx={{ fontSize: "35px", color: "white" }} /> */}
          <Image
            src="/assets/cat.jpg"
            alt="logo"
            width={50}
            height={50}
            className="rounded-full md:hidden"
          />
        </Link>

        {/* <UserButton
          appearance={{ baseTheme: dark }}
          afterSignOutUrl="/sign-in"
        /> */}
      </div>
    </div>
  );
};

export default TopBar;
