import Link from "next/link";
import { Share2, Send, AtSign } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
        <div>
          <h3 className="mb-3 text-lg font-semibold text-white">Filters</h3>
          <ul className="space-y-2 text-sm">
            <li>All</li>
            <li>Electronics</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold text-white">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex gap-3">
            <Link
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500"
            >
              <Share2 className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500"
            >
              <Send className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500"
            >
              <AtSign className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-900 px-4 py-4 text-sm sm:px-6 lg:px-8">
        © 2024 American
      </div>
    </footer>
  );
}
