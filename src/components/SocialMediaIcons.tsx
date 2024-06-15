import { Instagram, Facebook, Twitter } from "../assets";
import Link from "next/link";

type SocialMediaIconsProps = {
  className?: string;
  iconClassName?: string;
};

const SocialMediaIcons = ({
  className,
  iconClassName,
}: SocialMediaIconsProps) => {
  return (
    <div className={className}>
      <Link
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="instagram"
      >
        <Instagram className={`${iconClassName}`} />
      </Link>
      <Link
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="facebook"
      >
        <Facebook className={`${iconClassName}`} />
      </Link>
      <Link
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="twitter"
      >
        <Twitter className={`${iconClassName}`} />
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
