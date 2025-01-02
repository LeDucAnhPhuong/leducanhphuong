import { socialLink } from "@/helper/data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        {socialLink.map((item) => (
          <Link key={item.link} href={item.link} className="social-icon">
            <Image
              src={item.icon}
              alt="github"
              className="w-full h-full"
              width={100}
              height={100}
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
