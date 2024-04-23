import Image from "next/image";
import { BsTwitter, BsBell, BsBookmark } from "react-icons/bs";
import {
  BiHomeCircle,
  BiEnvelope,
  BiUser,
  BiHash,
  BiMoney,
} from "react-icons/bi";


import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";


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
  {icon:<BiMoney />, title:"Twitter Blue"},
  { icon: <BiUser />, title: "Profile" },
  {icon:<SlOptions />, title: "More Options"}
];

export default function Home() {
  return (
    <div >
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 justify-start pt-1 ml-28">
          <div className="text-3xl w-fit h-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-1 text-xl pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-2 w-fit  cursor-pointer mt-2"
                  key={item.title}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-10">
            <button className="bg-[#1d9bf0] rounded-full w-full py-4 px-2 text-lg ">Tweet</button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-400">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
