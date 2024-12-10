import Link from "next/link";
import styles from "./home.module.scss";

export default function NotFoundPage() {
  return (
    <div className={styles.homePage}>
      <div className={styles.container}>
        <div className={styles.notFound}>
          Not Found!
          <Link className={styles.goBack} href="/">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
