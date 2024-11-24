import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" py-12 w-full ">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 pb-5">
          <Link href="/">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-5xl font-sans py-2 md:py-6 lg:py-1 relative z-20 font-bold tracking-tight">
              ShinraiDevs
            </h2>
          </Link>
        </div>
        <div className="flex items-center gap-4 pb-5">
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary transition"
            prefetch={false}
          >
            <TwitterIcon className="h-6 w-6" />
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary transition"
            prefetch={false}
          >
            <FacebookIcon className="h-6 w-6" />
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary transition"
            prefetch={false}
          >
            <InstagramIcon className="h-6 w-6" />
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary transition"
            prefetch={false}
          >
            <LinkedinIcon className="h-6 w-6" />
          </Link>
        </div>
        <div className="flex  items-center gap-7 pb-5">
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition"
            prefetch={false}
          >
            Cookie Policy
          </Link>
        </div>
        <p className="text-sm text-muted-foreground pb-5">
          &copy; 2024 All rights reserved | ShinraiDevs
        </p>
      </div>
    </footer>
  );
}

function FacebookIcon(props: any) {
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

function InstagramIcon(props: any) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
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

function TwitterIcon(props: any) {
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
