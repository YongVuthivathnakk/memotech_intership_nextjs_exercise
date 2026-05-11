"use client";

import { submitContact } from "@/app/action/contact";
import { useActionState, useState } from "react";

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  const [state, action, pending] = useActionState(submitContact, undefined);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!agreed)
      return alert("Please agree to the Terms of Service and Privacy Policy.");
  };

  return (
    <div className="flex items-center justify-center">
      <form
        action={action}
        className="bg-white mt-16 rounded-2xl border border-gray-200 p-8 w-full max-w-xl shadow-sm"
      >
        <h2 className="text-submitContact2xl font-semibold text-gray-900 mb-1">
          Send Us a Message
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Please fill in the form below to get in touch with us.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <input
            type="text"
            name="firstName"
            required
            placeholder="First name"
            className="col-span-1 px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="col-span-1 px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        <div className="grid grid-cols-1 gap-3 mb-3">
          <input
            required
            type="email"
            name="email"
            placeholder="Email address"
            className="col-span-1 px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        <textarea
          required
          placeholder="Message"
          name="message"
          rows={4}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-y mb-4"
        />

        <div className="flex items-center gap-2.5 mb-5">
          <input
            type="checkbox"
            id="terms"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="w-4 h-4 cursor-pointer accent-black"
          />
          <label
            htmlFor="terms"
            className="text-xs text-gray-500 cursor-pointer"
          >
            I've read and agree with{" "}
            <a href="#" className="text-gray-900 underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-gray-900 underline">
              Privacy Policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          
        >
          {pending ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
