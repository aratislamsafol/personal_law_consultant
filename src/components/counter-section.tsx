import { useEffect, useState, useRef } from "react";
import { Briefcase, Users, Smile, Award, AlertCircle } from "lucide-react";
import { useDataStore } from "@/stores/data-store";
import { CounterSkeleton } from "@/components/loading-skeleton";
import type { CounterStat } from "@/lib/types";

const iconMap: Record<string, typeof Briefcase> = {
  briefcase: Briefcase,
  users: Users,
  smile: Smile,
  award: Award,
};

function CounterItem({ stat, isVisible }: { stat: CounterStat; isVisible: boolean }) {
  const [count, setCount] = useState(0);
  const Icon = iconMap[stat.icon] || Briefcase;

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <div className="flex flex-col items-center text-center" data-testid={`counter-${stat.id}`}>
      <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
        {count}
        <span className="text-primary">{stat.suffix}</span>
      </div>
      <p className="text-muted-foreground font-medium">{stat.label}</p>
    </div>
  );
}

export function CounterSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { counterStats, isLoading, errors, fetchCounterStats } = useDataStore();
  
  const stats = counterStats;
  const isLoadingStats = isLoading.counterStats;
  const error = errors.counterStats;

  useEffect(() => {
    if (counterStats.length === 0) {
      fetchCounterStats();
    }
  }, [counterStats.length, fetchCounterStats]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-muted/50"
      data-testid="counter-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoadingStats && <CounterSkeleton />}

        {error && (
          <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
            <AlertCircle className="w-12 h-12 mb-4" />
            <p>Failed to load statistics.</p>
          </div>
        )}

        {stats && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <CounterItem key={stat.id} stat={stat} isVisible={isVisible} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
