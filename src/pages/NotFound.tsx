import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="space-y-2">
        <p className="text-8xl font-bold text-text/50 md:text-9xl">404</p>
        <p className="text-xl text-text md:text-2xl">Oops! Page not found.</p>
        <p className="mx-auto max-w-md text-sm text-text/50">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
      </div>

      <Link
        to="/"
        role="button"
        className="flex gap-2 items-center p-2 shadow-md transition-[shadow] rounded-md text-xl bg-icon hover:shadow-none"
      >
        Back to Home
      </Link>
    </main>
  );
}
