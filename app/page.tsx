import Image from "next/image";
import { BsTwitter, BsBell, BsBookmark } from "react-icons/bs";
import {
  BiHomeCircle,
  BiEnvelope,
  BiUser,
  BiHash,
} from "react-icons/bi";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  { icon: <BiHash />, title: "Explore" },
  { icon: <BsBell />, title: "Notifications"},
  { icon: <BiEnvelope />, title: "Messages"},
  { icon: <BsBookmark />, title: "Bookmarks"},
  { icon: <BiUser />, title: "Profile" }
];

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 justify-start pt-8">
          <div className="text-3xl w-fit h-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-4 text-2xl pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit  cursor-pointer mt-2"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-10">
            <button className="bg-[#1d9bf0] rounded-full w-full p-3 text-lg ">Tweet</button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
