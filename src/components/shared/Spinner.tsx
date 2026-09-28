export default function Spinner() {
  return (
    <div className="flex gap-1 items-center justify-self-center md:col-span-2 lg:col-span-3 xl:col-span-4">
      <p className="animate-pulse text-lg"> Loading...</p>
    </div>
  );
}
