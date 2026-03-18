import { Logo } from "../Logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-primary w-full px-8 sm:px-14 md:px-20 lg:px-26.25 py-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Logo */}
        <Logo link={false} className="w-29.75" />

        {/* Legal links + copyright */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-[9.54px] text-white text-[14.31px] font-normal leading-[23.05px]">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <span aria-hidden="true" className="hidden md:inline">
            &bull;
          </span>
          <Link href="/cookie-policy" className="hover:underline">
            Cookie Policy
          </Link>
          <span aria-hidden="true" className="hidden md:inline">
            &bull;
          </span>
          <span>&copy;2026 NerstAgric. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};
