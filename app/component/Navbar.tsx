import Link from "next/link";
import Image from "next/image";
import { NAVBAR_ITEMS } from "../helper/data";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] !bg-primary-color  rounded-2xl flex items-center justify-between px-10">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={80}
            className="w-20 h-20"
          />
        </Link>
      </div>
      <div className="flex items-center gap-10">
        {NAVBAR_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="!text-white font-normal"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
