
import Card from "@/components/Card"
import Button from "@/components/Button"


const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
 <div className="flex flex-wrap gap-4 mb-6">
        {/* Size variants */}
        <Button title="Small" className="text-xs px-3 py-1 bg-blue-500 text-white rounded-sm" />
        <Button title="Medium" className="text-base px-4 py-2 bg-green-500 text-white rounded-md" />
        <Button title="Large" className="text-xl px-6 py-3 bg-red-500 text-white rounded-full" />
        
        {/* Shape variants */}
        <Button title="Rounded Small" className="px-4 py-2 bg-purple-500 text-white rounded-sm" />
        <Button title="Rounded Medium" className="px-4 py-2 bg-yellow-500 text-white rounded-md" />
        <Button title="Rounded Full" className="px-4 py-2 bg-indigo-500 text-white rounded-full" />
      </div>

      <Card />
      
    </div>
  )
}
export default Landing