import Card from "@/components/Card";
import ButtonVariants from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      {/* Render all button variants from the Button component */}
      <div className="flex flex-wrap gap-4 mb-6">
        <ButtonVariants />
      </div>

      <Card />
    </div>
  );
};

export default Landing;
