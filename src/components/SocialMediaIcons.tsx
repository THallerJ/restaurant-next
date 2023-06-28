import { Instagram, Facebook, Twitter } from "../assets";

type SocialMediaIconsProps = {
  styles?: string;
  iconStyles?: string;
};

const SocialMediaIcons = ({ styles, iconStyles }: SocialMediaIconsProps) => {
  return (
    <div className={styles}>
      <a href="https://instagram.com" target="_blank" rel="noreferrer noopener">
        <Instagram className={`${iconStyles}`} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer noopener">
        <Facebook className={`${iconStyles}`} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer noopener">
        <Twitter className={`${iconStyles}`} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
