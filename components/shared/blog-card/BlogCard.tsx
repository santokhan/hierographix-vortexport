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

// Blog Card will fill it's container
export default function BlogCard(props: { data: BCard }): JSX.Element {
  const { data } = props;

  return (
    <div className="w-full space-y-3">
      {/* Card Image */}
      <Link href={data.url}>
        {data.src && (
          <Image
            src={require(`../../../app/assets/images/blog/article/${data.src}.png`)}
            alt={data.title}
            width={0}
            height={0}
            className="w-full object-contain shadow rounded-lg"
          />
        )}
      </Link>
      <div className="space-y-4 px-2">
        {/* Card Caption */}
        <h5 className="font-medium text-sm lg:text-base tracking-tight text-gray-400 uppercase">
          {data.caption}
        </h5>
        {/* Card Title */}
        <Link
          href={data.url}
          className="block text-lg lg:text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100 capitalize"
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
      <Link href={data.url}>
        {data.src && (
          <Image
            src={require(`../../../app/assets/images/blog/article/${data.src}.png`)}
            alt={data.title}
            width={0}
            height={0}
            className="w-full object-contain shadow rounded overflow-hidden"
          />
        )}
      </Link>
      <div className="space-y-4 px-2">
        {/* Card Caption */}
        <h5 className="font-medium text-sm lg:text-base tracking-tight text-gray-500 uppercase">
          {data.caption}
        </h5>
        {/* Card Title */}
        <Link
          href={data.url}
          className="block text-lg lg:text-xl font-bold tracking-tight text-gray-800 capitalize"
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
