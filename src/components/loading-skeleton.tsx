import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export function HeroSkeleton() {
  return (
    <div className="h-screen relative flex items-center">
      <div className="absolute inset-0 bg-muted" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Skeleton className="w-10 h-10 rounded-md" />
            <Skeleton className="h-4 w-32" />
          </div>
          <Skeleton className="h-12 w-full mb-2" />
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-2/3 mb-8" />
          <div className="flex gap-6 mb-8">
            <Skeleton className="h-12 w-36 rounded-md" />
            <Skeleton className="h-12 w-48 rounded-md" />
          </div>
          <Skeleton className="h-12 w-36" />
        </div>
      </div>
    </div>
  );
}

export function AboutSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex items-start gap-3">
          <Skeleton className="w-6 h-6 rounded-full flex-shrink-0" />
          <Skeleton className="h-4 w-full" />
        </div>
      ))}
    </div>
  );
}

export function ServicesSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="border-border/50">
          <CardContent className="p-6 lg:p-8">
            <Skeleton className="w-14 h-14 rounded-md mb-6" />
            <Skeleton className="h-6 w-3/4 mb-3" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3 mb-4" />
            <Skeleton className="h-4 w-24" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function TeamSkeleton() {
  return (
    <div className="flex gap-6 pl-4 sm:pl-6 lg:pl-8">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex-shrink-0 w-64 sm:w-72">
          <Skeleton className="w-full aspect-[3/4] rounded-md mb-4" />
          <Skeleton className="h-5 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
}

export function CounterSkeleton() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          <Skeleton className="w-16 h-16 rounded-md mb-4" />
          <Skeleton className="h-8 w-24 mb-2" />
          <Skeleton className="h-4 w-20" />
        </div>
      ))}
    </div>
  );
}

export function ProcessSkeleton() {
  return (
    <div className="space-y-8">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex gap-6">
          <Skeleton className="w-12 h-12 rounded-md flex-shrink-0" />
          <div className="flex-1">
            <Skeleton className="h-6 w-1/2 mb-2" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function CaseStudiesSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...Array(8)].map((_, i) => (
        <Skeleton 
          key={i} 
          className={`aspect-square rounded-md ${i === 0 || i === 5 ? "row-span-2 aspect-auto h-full" : ""}`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSkeleton() {
  return (
    <div className="max-w-4xl mx-auto text-center px-8 py-6">
      <div className="flex justify-center mb-6">
        <Skeleton className="w-20 h-20 rounded-full" />
      </div>
      <div className="flex justify-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="w-5 h-5" />
        ))}
      </div>
      <Skeleton className="h-6 w-full mb-2 mx-auto max-w-2xl" />
      <Skeleton className="h-6 w-full mb-2 mx-auto max-w-2xl" />
      <Skeleton className="h-6 w-3/4 mb-8 mx-auto" />
      <Skeleton className="h-6 w-40 mx-auto mb-2" />
      <Skeleton className="h-4 w-32 mx-auto" />
    </div>
  );
}

export function BrandMarqueeSkeleton() {
  return (
    <div className="flex gap-16 items-center justify-center">
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} className="w-16 h-16 rounded-full" />
      ))}
    </div>
  );
}
