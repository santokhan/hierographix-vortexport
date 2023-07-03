import Image from "next/image";
import Link from "next/link";

export interface BCard {
  caption: string;
  src: string;
  title: string;
  url: string;
  creator: string;
  timestamp: string;
  read: string;
}

export function BlogImage(props: { src: string }) {
  return (
    <div className="w-full overflow-hidden rounded-xl">
      <Image
        src={require(`../../../app/assets/images/blog/article/${props.src}.png`)} alt="showcase"
        className="w-full h-full object-contain transition-transform ease-in duration-150 group-hover:scale-[1.125]"
        width={0} height={0}
      />
    </div>
  );
}

// Blog Card will fill it's container
export default function BlogCard(props: { data: BCard }): JSX.Element {
  const { data } = props;

  return (
    <div className="w-full space-y-3 overflow-hidden">
      {/* Card Image */}
      <Link href={data.url} className="group">
        {data.src && <BlogImage src={data.src} />}
      </Link>
      <div className="space-y-4 px-2">
        {/* Card Caption */}
        <h5 className="font-medium text-sm lg:text-base tracking-tight text-gray-400 uppercase">
          {data.caption}
        </h5>
        {/* Card Title */}
        <Link
          href={data.url}
          className="block text-lg lg:text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100 capitalize hover:text-vpurple-500 hover:dark:text-vpurple-500"
        >
          {data.title}
        </Link>
        {/* Card Footer */}
        <BlogCardFooter data={data} />
      </div>
    </div>
  );
}

// this is for only light mode, not for dark
export function BlogCardWhite({ data }: { data: BCard }): JSX.Element {
  return (
    <div className="w-full space-y-3">
      {/* Card Image */}
      <Link href={data.url} className="group">
        {data.src && <BlogImage src={data.src} />}
      </Link>
      <div className="space-y-4 px-2">
        {/* Card Caption */}
        <h5 className="font-medium text-sm lg:text-base tracking-tight text-gray-500 uppercase">
          {data.caption}
        </h5>
        {/* Card Title */}
        <Link
          href={data.url}
          className="block text-lg lg:text-xl font-bold tracking-tight text-gray-800 capitalize hover:text-vpurple-500"
        >
          {data.title}
        </Link>
        {/* Card Footer for Light mode */}
        <div className="flex gap-4 items-center whitespace-nowrap">
          <div className="flex items-center gap-2 text-xs lg:text-sm text-gray-800">
            <div className="w-9 h-9 rounded-full bg-teal-400 flex justify-center items-center hover:bg-teal-500 focus:ring-4 ring-teal-400/50"></div>
            {data.creator}
          </div>
          <div className="w-[2px] h-3 bg-gray-400"></div>
          <div className="text-xs lg:text-sm text-gray-800">
            {data.timestamp}
          </div>
          <div className="w-[2px] h-3 bg-gray-400"></div>
          <div className="text-xs lg:text-sm text-gray-800">{data.read}</div>
        </div>
      </div>
    </div>
  );
}

export function BlogCardFooter(props: { data: BCard }): JSX.Element {
  const { data } = props;

  return (
    <div className="flex gap-4 items-center whitespace-nowrap">
      <div className="flex items-center gap-2 text-xs text-gray-400">
        <div className="w-9 h-9 rounded-full bg-teal-400 flex justify-center items-center hover:bg-teal-500 focus:ring-4 ring-teal-400/50"></div>
        {data.creator}
      </div>
      <div className="w-[2px] h-3 bg-gray-400"></div>
      <div className="text-xs text-gray-400">{data.timestamp}</div>
      <div className="w-[2px] h-3 bg-gray-400"></div>
      <div className="text-xs text-gray-400">{data.read}</div>
    </div>
  );
}
