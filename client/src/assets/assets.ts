import { TruckIcon, LeafIcon, ClockIcon, ShieldCheckIcon } from "lucide-react";

import hero_bg from "./hero_bg.jpeg";

export const assets = {
  hero_bg,
};

export const heroSectionData = {
  description:
    "Fresh, organic groceries delivered from local farms to your doorstep. Quality you can taste, convenience you deserve.",
  hero_image: hero_bg,
  hero_features: [
    { icon: TruckIcon, title: "Free Delivery", desc: "Orders over $20" },
    { icon: LeafIcon, title: "100% Organic", desc: "Certified products" },
    { icon: ClockIcon, title: "Same Day", desc: "Express delivery" },
    { icon: ShieldCheckIcon, title: "Secure Pay", desc: "Safe checkout" },
  ],
};
