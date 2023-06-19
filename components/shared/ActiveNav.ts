import { usePathname } from "next/navigation";

export default function ActiveNav(url: string): boolean {
  const pathName = usePathname();
  return pathName === url;
}
