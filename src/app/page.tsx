import { auth } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";


export default function Home() {
  const {userID} = auth();
  if(userID){
    redirect('/dashboard');
  }
  return (
    <>Hello World</>
  );
}
