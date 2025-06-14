import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <Button title="Small" styles="text-xs" />
        <Button title="Medium" styles="text-base" />
        <Button title="Large" styles="text-xl" />

        <Button title="Rounded-sm" styles="rounded-sm" />
        <Button title="Rounded-md" styles="rounded-md" />
        <Button title="Rounded-lg" styles="rounded-lg" />
        <Button title="Rounded-full" styles="rounded-full" />
      </div>

      <Card />
    </div>
  );
};

export default Landing;
