import FeatureCard from "./FeatureCard";
import { features } from "@/data/features";

export default function Features() {
  return (
    <section className="py-20 px-10">
      <h2 className="text-3xl font-bold text-center mb-12">Features</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
