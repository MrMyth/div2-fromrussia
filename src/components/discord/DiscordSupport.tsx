import { useState } from "react";
import { Copy } from "lucide-react";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";
import ButtonLink from "../common/ButtonLink";

const DiscordSupport: React.FC = () => {
  const { toast } = useToast();
  const cardNumber = "2202200321251892";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(cardNumber)
      .then(() => {
        setCopied(true);
        toast({
          title: "Скопировано!",
          description: "Номер карты скопирован в буфер обмена",
          duration: 3000,
        });
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        toast({
          title: "Ошибка",
          description: "Не удалось скопировать номер карты",
          variant: "destructive",
          duration: 3000,
        });
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <section>
      <h2 className="text-xl font-semibold mb-6 text-center flex items-center justify-center gap-2 text-[#F97316]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#F97316]">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
        Поддержать Discord сервер
      </h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="space-y-4">
          <p className="text-gray-700 mb-4">
            Если вам нравится наш сервер и вы хотите помочь нам развиваться, вы можете поддержать нас финансово:
          </p>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-gray-500 text-sm mb-2">Номер карты:</p>
            <div className="flex items-center">
              <code className="bg-gray-100 p-2 rounded text-base font-mono flex-1">{cardNumber}</code>
              <Button 
                size="sm" 
                variant="default" 
                className="ml-3 flex items-center gap-1 bg-[#8b3ffd] hover:bg-[#8b3ffd]/90 text-white" 
                onClick={handleCopy}
              >
                <Copy className="w-4 h-4" />
                {copied ? "Скопировано" : "Скопировать"}
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-gray-500 text-sm mb-2">Или через YooMoney:</p>
            <ButtonLink 
              href="https://yoomoney.ru/to/4100118249151359" 
              className="w-full bg-[#8b3ffd] hover:bg-[#8b3ffd]/90 py-2 text-base font-medium text-white"
            >
              Поддержать через YooMoney
            </ButtonLink>
          </div>
          
          <p className="text-gray-700 text-sm mt-2">
            Спасибо за вашу поддержку! Это помогает нам улучшать сервер и создавать больше контента.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiscordSupport;
