import React, { useState } from 'react';
import { Bot, MessageSquare, TowerControl, Copy } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

const BotSection: React.FC = () => {
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
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-[#F97316] text-center mb-8 flex items-center justify-center">
        <Bot className="w-6 h-6 mr-2 text-[#F97316]" />
        Поддержка бота для Саммита
      </h2>
      
      <div className="max-w-3xl mx-auto px-4">
        <section className="rounded-lg">
          <h3 className="subheading text-center mb-4 flex items-center justify-center">
            <TowerControl className="w-6 h-6 mr-2" />
            Интересует наш бот для 'Саммита'?
          </h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ol className="text-gray-800 space-y-2 pl-5 list-decimal">
              <li>Зайти на наш Discord сервер</li>
              <li>Выбрать роли на сервере</li>
              <li>Открыть канал сервера 'бот-100-й-этаж' и воспользоваться инструкцией по боту</li>
            </ol>
          </div>
        </section>

        <section className="mt-8">
          <h3 className="subheading text-center mb-4 flex items-center justify-center">
            <MessageSquare className="w-6 h-6 mr-2 text-[#F97316]" />
            Поддержать бота финансово
          </h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-4 text-center">
              Если вам нравится наш бот и вы хотите помочь его развитию:
            </p>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <p className="text-gray-500 text-sm mb-2">Номер карты Сбербанка:</p>
              <div className="flex items-center">
                <code className="bg-gray-100 p-2 rounded text-base font-mono flex-1">{cardNumber}</code>
                <Button 
                  size="sm" 
                  variant="default" 
                  className="ml-3 flex items-center gap-1" 
                  onClick={handleCopy}
                >
                  <Copy className="w-4 h-4" />
                  {copied ? "Скопировано" : "Скопировать"}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h3 className="subheading text-center mb-6 flex items-center justify-center">
            <MessageSquare className="w-6 h-6 mr-2 text-[#F97316]" />
            Форма обратной связи для бота
          </h3>
          <div className="border-0 rounded-lg overflow-hidden">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSeXCr_WqmXhcxxHBPdqfj_goal6uwsmn64DVcRUtbpFf1FHYg/viewform?embedded=true" 
              width="100%" 
              height="1754" 
              frameBorder="0" 
              marginHeight={0}
              marginWidth={0}
              className="block border-0"
              title="Форма обратной связи для бота"
            >
              Загрузка…
            </iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BotSection;
