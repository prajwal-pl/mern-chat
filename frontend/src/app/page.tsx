"use client";
import MessageContainer from "@/components/messages/MessageContainer";
import Sidebar from "@/components/sidebar/Sidebar";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();
  //@ts-ignore
  const { authUser } = useAuthContext();
 
  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
}

export default Home;
