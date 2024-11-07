"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [user] = useState(null);
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [router, user]);
  return <div className="">Hello from Yangkok</div>;
}
