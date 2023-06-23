export interface PriceList {
  features: string[];
  price: number;
  title: string;
  url: string;
  recommended?: boolean;
}

export const starting: PriceList = {
  features: [
    "Branding design",
    "Web design",
    "App design",
    "1-2 projects",
    "4-7 days Turn Around park project",
    "Not included development",
    "Unlimited request",
    "Unlimited revisions",
  ],
  price: 500,
  title: "Starter",
  url: "",
};

export const pro: PriceList = {
  features: [
    "Brand design",
    "Web design",
    "App design",
    "1-2 projects",
    "4-7 days turn around per project",
    "Included development",
    "Unlimited request",
    "Unlimited revisions",
  ],
  price: 1000,
  title: "Pro",
  url: "",
  recommended: true,
};

export const enterprise: PriceList = {
  features: [
    "Grand design",
    "Web design",
    "App design",
    "3-5 projects",
    "3-5 days turnaround park project",
    "Included development",
    "Unlimited request",
    "Unlimited revisions",
  ],
  price: 1500,
  title: "Enterprise",
  url: "",
};

const priceList: PriceList[] = [starting, pro, enterprise];

export function getPriceList(listName: string): PriceList {
  return priceList.filter((e) => e.title === listName)[0];
}

export default priceList;
