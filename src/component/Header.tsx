import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex w-full justify-between items-center p-10">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        <div className="flex gap-16 justify-between items-center">
          <div className="flex items-center gap-3">
            <svg
              viewBox="0 0 40 40"
              aria-hidden="true"
              width="40"
              height="40"
              className="fill-cyan-500"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
              ></path>
            </svg>
            <span className="font-bold">Pocket</span>
          </div>
          <div className="flex gap-6 text-neutral-500 *:transition-transform">
            <Link
              className="hover:bg-neutral-100 rounded-md px-3 py-2"
              href={'/#features'}
            >
              Features
            </Link>
            <Link
              className="hover:bg-neutral-100 rounded-md px-3 py-2"
              href={'/#Reviews'}
            >
              Reviews
            </Link>
            <Link
              className="hover:bg-neutral-100 rounded-md px-3 py-2"
              href={'/#Pricing'}
            >
              Pricing
            </Link>
            <Link
              className="hover:bg-neutral-100 rounded-md px-3 py-2"
              href={'/#FAQs'}
            >
              FAQs
            </Link>
          </div>
        </div>
        <div className="flex gap-3 text-sm">
          <p className="border border-black rounded-xl px-3 py-2">Log in</p>
          <p className="bg-black text-white rounded-xl px-3 py-2">Download</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
