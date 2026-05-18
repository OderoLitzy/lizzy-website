export default function Loading() {
  return (
    <div className="animate-pulse flex flex-col">
      <div className="h-48 bg-teal-primary/20 w-full" />
      <div className="max-w-5xl mx-auto w-full px-6 py-10 flex flex-col gap-5">
        <div className="h-5 bg-stone-200 rounded w-1/3" />
        <div className="h-4 bg-stone-200 rounded w-2/3" />
        <div className="h-4 bg-stone-200 rounded w-1/2" />
      </div>
    </div>
  );
}
