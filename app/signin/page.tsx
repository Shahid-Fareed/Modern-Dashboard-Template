"use client"
import Textinput from "@/components/ui/Textinput"


function signin() {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-gradient-to-tr from-[#fff] from-30% to-[#6BA6FE]/40 to-100%">
      <div className="text-center">
        <h2 className="text-5xl mb-3">Welcome Back!</h2>
        <p className="mb-10 text-5xl text-black">Sign in with your credentials.</p>
        <div className="w-[80%] mx-auto">
          <Textinput name="" placeholder="Enter Email ..." className="bg-white border border-gray-200 p-5 py-3 mb-5"/>
          <Textinput name="" placeholder="Enter Email ..." className="bg-white border border-gray-200 p-5 py-3 mb-5"/>
        </div>
        <div className="flex justify-between mb-5 w-[80%] mx-auto">
          <div>Remember me</div>
          <div>Forget password?</div>
        </div>
        <button className="p-3 py-4 rounded-[10px] bg-[#6CA7FF] text-white  w-[80%]">Submit</button>
      </div>
    </div>
  )
}

export default signin