import Image from "next/image";
import dash from '/dash.png';
import styles from "./page.module.css";
import { Appbar } from "./components/app";
import { Signup } from "./components/signup";

export default function Home() {
  const imageStyle = {
    borderRadius: '1%',
    border: '1px solid #fff',
  }
  
  return (
    <div>
      <div className="flex justify-between p-3 border border-b-slate-300 ">
        <div className="text-4xl font-bold">MetaTasker </div>
        <div className="flex">
          <div className="m-1"><Signup></Signup></div>
          <div className="m-1"><Appbar></Appbar></div>
        </div>


      </div>
      

      {/* <Image
      src={'/dash.png'}
      width={1500}
      height={1000}
      alt="Picture of the author"
      sizes="(max-width: 768px)"
    /> */}
    <div className="flex flex-col md:flex-row items-center justify-between h-screen
     bg-gradient-to-r from-teal-100 to-blue-100 pl-10">
      <div className="md:w-1/2 text-left">
       
        <h1 className="text-5xl font-bold mb-4 text-black">STREAMLINE</h1>
        <h1 className="text-5xl font-bold text-black">YOUR TASKS</h1>
      </div>
       
      <div className="md:w-1/2 text-right mt-10 md:mt-0 mr-10">
        <h2 className="text-2xl font-semibold text-gray-700">FAST</h2>
        <h2 className="text-2xl font-semibold text-gray-700">SIMPLE</h2>
        <h2 className="text-2xl font-semibold text-gray-700">EFFICIENT</h2>
      </div>
      <div>
        <Image
      src={'/dashboard1.png'}
      width={1500}
      height={1000}
      alt="Picture of the author"
      style={imageStyle}
      
    />
        </div>
    </div>
    
    </div>
  );
}
