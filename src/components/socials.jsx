export default function SocialLinks() {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/Liam-Key24",
      icon: "/icons/github-sign.png",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gabrielkhidyer",
      icon: "/icons/linkedin.png",
    },
    {
      name: "Pinterest",
      url: "https://www.pinterest.com/GLK01",
      icon: "/icons/pinterest-logo.png",
    },
  ];

  return (
    <div className="flex w-full h-fit p-2 justify-center items-center gap-5 mt-10">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={social.icon}
            alt={`${social.name} Icon`}
            className="w-10 h-10 transition-transform transform hover:scale-110"
          />
        </a>
      ))}
    </div>
  );
}
