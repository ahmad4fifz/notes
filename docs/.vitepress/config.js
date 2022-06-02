module.exports = {
  title: "Notes",
  description: "My notes here.",
  base: "/",
  logo: "",
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/assets/favicons/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/assets/favicons/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/assets/favicons/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/assets/favicons/site.webmanifest" }],
    ["link", { rel: "shortcut icon", href: "/assets/favicons/favicon.ico" }],
  ],
  themeConfig: {
    repo: "ahmad4fifz/notes",
    docsDir: "docs",
    docsBranch: "main",
    nav: [{ text: "Blog", link: "https://ahmad4fifz.medium.com/" }],
    sidebar: [
      {
        text: "Guide",
        children: [
          { text: "Git", link: "/guide/git" },
          { text: "Linux", link: "/guide/linux" },
          { text: "Network", link: "/guide/network" },
          { text: "Transfer", link: "/guide/transfer" },
        ],
      },
      {
        text: "Installation",
        children: [
          { text: "Chisel", link: "/installation/chisel" },
          { text: "Fail2ban", link: "/installation/fail2ban" },
          { text: "Keepalived", link: "/installation/keepalived" },
        ],
      },
      {
        text: "Configuration",
        children: [
          { text: "Fail2ban", link: "/configuration/fail2ban" },
          { text: "VPN", link: "/configuration/vpn" },
        ],
      },
      {
        text: "Hardening",
        children: [
          { text: "Apache HTTPD", link: "/hardening/httpd" },
          { text: "SSH", link: "/hardening/ssh" },
        ],
      },
      {
        text: "Troubleshooting",
        children: [
          { text: "Redis", link: "/troubleshooting/redis" },
          { text: "VMware", link: "/troubleshooting/vmware" },
          { text: "WSL", link: "/troubleshooting/wsl" },
        ],
      },
    ],
  },
};
