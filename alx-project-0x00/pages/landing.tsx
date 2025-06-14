import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button
        title="Continue"
        styles="text-sm rounded-sm bg-green-400 hover:bg-green-400/50 "
      />
      <Button
        title="Accept"
        styles="text-sm rounded-md bg-yellow-500 hover:bg-yellow-500/50"
      />
      <Button
        title="Buy"
        styles="text-sm rounded-full bg-green-500 hover:bg-green-500/50"
      />
      <Button
        title="Buy"
        styles="text-sm rounded-lg bg-green-500 hover:bg-green-500/50"
      />
    </div>
  );
};
export default Landing;