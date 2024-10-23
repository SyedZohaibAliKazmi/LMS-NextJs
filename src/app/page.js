
"use client"; // Is line ko top par daalna hai
import { Button } from "@/components/ui/button";
export default function Home() {

  const handleAdminPanel = () =>{
    window.location.href = '/admin/dashboard'; 
  }
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className=" 	text-6xl text-orange-400 text-col  font-bold m-6">Welcome!</h1>
      
      <Button onClick={handleAdminPanel} className="font-bold">Admim Panel</Button>
      
    </div>
  );
}
