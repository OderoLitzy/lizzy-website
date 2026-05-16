export default function RootLoading() {
  return (
    <div className="animate-pulse flex flex-col min-h-screen">
      {/* Hero skeleton */}
      <div className="h-[480px] bg-teal-primary/20 w-full" />

      {/* Content area */}
      <div className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 flex flex-col gap-6">
        <div className="h-6 bg-stone-200 rounded w-1/3" />
        <div className="h-4 bg-stone-200 rounded w-2/3" />
        <div className="h-4 bg-stone-200 rounded w-1/2" />
      </div>
    </div>
  );
}
