"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import { footerItems } from "@/const/footer";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  // const [user] = useState(null);
  const [user] = useState({
    name: "testUser",
  });
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [router, user]);
  return (
    <div className={styles.homePage}>
      <div className={styles.container}>
        <div className={styles.avatar}>
          <p>ရန်ကောက်</p>
          <Image src="/images/avatar.png" width={56} height={56} alt="avatar" />
        </div>
        <div className={styles.info}>
          <div className="text-center py-5">
            <p>ကြိုဆိုပါတယ် UserName</p>
          </div>
          <div className={styles.balance}>
            <p>လက်ကျန်ငွေ</p>
            <p>၁၄၅,၈၀ဝ ကျပ်</p>
          </div>
        </div>
        <div className={styles.testImg}>
          <Image
            src="/images/text-image.png"
            layout="fill"
            alt="test-img"
            quality={100}
          />
        </div>
        <div className={styles.footer}>
          <ul>
            {footerItems.map((item, index) => (
              <Link href={item.url} key={index}>
                <li>
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={24}
                    height={24}
                  />
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
