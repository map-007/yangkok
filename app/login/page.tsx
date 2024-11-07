import Image from "next/image";
import style from "./login.module.scss";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
const LoginPage = () => {
  return (
    <div className={style.loginPage}>
      <div className={style.container}>
        <p>တယ်လီဂရမ်ဖြင့် ဝင်ပါ</p>
        <Link href="/" className={style.button}>
          <FaTelegramPlane />
          <span>Login as Guest</span>
          <Image
            src="/vercel.svg"
            className={style.profileImg}
            alt="telegram"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
