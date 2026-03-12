type Props = {
  title: string;
  description: string;
};

export default function FeatureCard({ title, description }: Props) {
  return (
    <div className="p-6 bg-white shadow rounded">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
}
