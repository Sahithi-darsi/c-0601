
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-skill-purple flex items-center justify-center">
                <span className="font-bold text-white">SK</span>
              </div>
              <span className="font-bold text-xl">SkillKart</span>
            </div>
            <p className="text-sm text-gray-500">
              Building the future of personalized education, one roadmap at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-base">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:underline">Features</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Roadmaps</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Pricing</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Enterprise</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-base">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:underline">Community</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Guides</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Support</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-base">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:underline">About</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Privacy</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Terms</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} SkillKart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// Social Icons Components
function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
