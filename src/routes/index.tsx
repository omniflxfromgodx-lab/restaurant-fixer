import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import markup from "../site/markup.html?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "New Pearl Restaurant, Purnia — North Indian Dining & Delivery",
      },
      {
        name: "description",
        content:
          "New Pearl Restaurant, PWD Colony, Purnia — North Indian favourites like Chicken Lollipop and Chicken Tikka Butter Masala. Dine-in, drive-through and delivery, 11 AM – 11 PM.",
      },
      {
        property: "og:title",
        content: "New Pearl Restaurant, Purnia — North Indian Dining",
      },
      {
        property: "og:description",
        content:
          "Rated 3.9 by 2,979 diners. ₹200–1,200 per person. Opposite Ford Co, PWD Colony, Purnia, Bihar. Call 06454 241 259.",
      },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: "/site/style.css" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    document.body.setAttribute("data-theme-accent", "olive");
    const script = document.createElement("script");
    script.src = "/site/script.js";
    script.onload = () => {
      (window as unknown as { __initNoireSite?: () => void }).__initNoireSite?.();
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeAttribute("data-theme-accent");
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
