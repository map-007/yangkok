export interface FooterItemType {
  name: string;
  url: string;
  icon: string;
}

export const footerItems: FooterItemType[] = [
  {
    name: "Home",
    url: "/",
    icon: "./images/footer/hot-icon.svg",
  },
  {
    name: "News",
    url: "/news",
    icon: "./images/footer/news-icon.svg",
  },
  {
    name: "Video",
    url: "/video",
    icon: "./images/footer/video-icon.svg",
  },
  {
    name: "Account",
    url: "/account",
    icon: "./images/footer/account-icon.svg",
  },
];
