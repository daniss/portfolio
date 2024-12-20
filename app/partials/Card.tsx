import React from "react";
import profile from "../images/profile.png";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

type SocialLinks = {
	github: string
	linkedin: string
	email: string
}

type CardProps = {
  name: string
  title: string
  social: SocialLinks
}

export default function Card({ name, title, social: { github, linkedin, email } }: CardProps) {
  return (
	<div className="w-full">
	  <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
		<div className="">
		  <Image
			className="w-32 mx-auto shadow-xl rounded-full"
            width={128}
            height={128}
			src={profile.src}
			alt="Profile face"
		  />
		</div>
		<div className="text-center mt-5">
		  <p className="text-xl sm:text-2xl font-semibold text-gray-900">
			{name}
		  </p>
		  <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
			{title}
		  </p>
		  <div className="flex align-center justify-center mt-4">
			<a
			  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
			  href={github}
			>
			  <FaGithub />
			  <span className="sr-only">Github</span>
			</a>
			<a
			  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
			  href={linkedin}
			>
			  <FaLinkedin />
			  <span className="sr-only">linkedin</span>
			</a>
			<a
			  className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
			  href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + email}
			>
			  <FaRegEnvelope />
			  <span className="sr-only">Email</span>
			</a>
		  </div>
		</div>
	  </div>
	</div>
  );
}
