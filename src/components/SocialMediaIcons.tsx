import { Instagram, Facebook, Twitter } from "../assets";

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
      <a href="https://instagram.com" target="_blank" rel="noreferrer noopener">
        <Instagram className={`${iconClassName}`} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer noopener">
        <Facebook className={`${iconClassName}`} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer noopener">
        <Twitter className={`${iconClassName}`} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
