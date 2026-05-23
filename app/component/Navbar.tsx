/* eslint-disable react-hooks/purity */
"use client";
import Link from "next/link";
import Image from "next/image";
import { NAVBAR_ITEMS } from "../helper/data";
import confetti from "canvas-confetti";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const handleClick = (href: string) => {
    const end = Date.now() + 3 * 1000;

    const colors = ["#212c00", "#ede9db", "#ede9db", "#212c00"];
    const frame = () => {
      if (Date.now() > end) return;
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });
      requestAnimationFrame(frame);
    };
    frame();
    router.push(href);
  };

  return (
    <div className="w-full h-[80px] bg-linear-to-r from-white to-primary-color rounded-2xl flex items-center justify-between px-10">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={80}
            className="w-20 h-20 !object-contain"
          />
        </Link>
      </div>
      <div className="flex items-center gap-10">
        {NAVBAR_ITEMS.map((item) => (
          <div
            key={item.label}
            onClick={() => handleClick(item.href)}
            className="!text-white font-normal cursor-pointer select-none"
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
