import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="w-full bg-blue-900 px-6 py-2">
        <ul className="flex">
          <li className="px-2">
            <Link href={"/home"} className="text-white text-base">
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link href={"/chips-input"} className="text-white text-base">
              Chips Input
            </Link>
          </li>
          <li className="px-2">
            <Link href={"/dark-mode"} className="text-white text-base">
              Dark Mode
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
