import Image from "next/image";
import { BiMessageRounded,BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart  } from "react-icons/ai";


const FeedCard:React.FC = ()=>{
    return( 
    <div className="border border-r-0 border-l-0 p-5 border-gray-600 hover:bg-slate-900 transition-all ">
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-1">
                <Image src="https://avatars.githubusercontent.com/u/105413822?v=4" alt="user-image" height={50} width={50} />
            </div>
            <div className="col-span-11">
                <h5>Rohan Shelke</h5>
                <p>
                    Im currently working on a MERN Project and DSA. Im Interested to work on Web 3.0. Im making the world better by PRs
                </p>
                <div>
                    <div className="flex justify-evenly mt-5 text-2xl items-center p-2 w-[90%]">
                        <div>
                            <BiMessageRounded />
                        </div>
                        <div>
                            <FaRetweet />
                        </div>
                        <div>
                            <AiOutlineHeart />
                        </div>
                        <div>
                            <BiUpload />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default FeedCard;