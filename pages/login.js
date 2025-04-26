import {User, ShieldCheck } from "lucide-react";

import Facebook from 'lucide-react/dist/esm/icons/facebook';
import Twitter from 'lucide-react/dist/esm/icons/twitter';


export default function LoginPage() {
  return (
    <div className="flex justify-center items-center mt-28 mb-28 bg-white px-4">
      <div className="w-full max-w-md space-y-6">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center">
          Log into your Account
          <div className="w-10 h-1 bg-yellow-400 mt-2 mx-auto" />
        </h1>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium">Mobile No.</label>
            <input
              type="text"
              placeholder="Enter Your Mobile no."
              className="mt-1 w-full border p-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 text-sm"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-gray-500 text-xs">Or</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button className="flex items-center justify-center gap-1 border p-2 rounded text-xs hover:shadow-md">
            <ShieldCheck size={18} />
            <span className="text-[11px]">Google</span>
          </button>
          <button className="flex items-center justify-center gap-1 border p-2 rounded text-xs hover:shadow-md">
            <Facebook size={18} className="text-blue-600" />
            <span className="text-[11px]">Facebook</span>
          </button>
          <button className="flex items-center justify-center gap-1 border p-2 rounded text-xs hover:shadow-md">
            <Twitter size={18} className="text-sky-400" />
            <span className="text-[11px]">Twitter</span>
          </button>
          <button className="flex items-center justify-center gap-1 border p-2 rounded text-xs hover:shadow-md">
            <User size={18} />
            <span className="text-[11px]">As Guest</span>
          </button>
        </div>

        {/* Bottom text */}
        <p className="text-xs text-center text-gray-500">
          If you don’t have an account,{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Create account
          </a>
        </p>
      </div>
    </div>
  );
}
