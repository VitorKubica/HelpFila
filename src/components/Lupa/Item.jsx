"use client";
import Link from "next/link";

export const Item = (props) => {
  return (
    <li
      className=" py-1 flex px-2 hover:bg-gray-200 transition-all duration-300"
      key={props.index}
      onClick={() => handleOptionClick(props.option)}
    >
      <Link href={"https://youtube.com"}>
        {props.option}
      </Link>
    </li>
  );
};
