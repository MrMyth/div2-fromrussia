
import { Headphones } from "lucide-react";
import { benefits } from "@/constants/discord-benefits";

const DiscordBenefits: React.FC = () => {
  return (
    <section>
      <h2 className="subheading text-center mb-6 flex items-center justify-center gap-2">
        <Headphones className="w-6 h-6 text-[#F97316]" />
        Преимущества нашего Discord
      </h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <span className="text-[#F97316] mr-2">•</span>
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DiscordBenefits;
