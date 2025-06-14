import Card from "@/components/Card";
import ButtonVariants from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      <ButtonVariants />

      <div className="mt-8">
        <Card />
      </div>
    </div>
  );
};

export default Landing;
