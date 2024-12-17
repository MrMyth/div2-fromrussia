const DiscordSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Discord Widget */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Виджет Discord сервера</h2>
            <iframe 
              src="https://discord.com/widget?id=835802952521351180&theme=dark" 
              width="350" 
              height="500" 
              allowTransparency={true} 
              frameBorder="0" 
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              className="w-full max-w-[350px] mx-auto"
            ></iframe>
          </div>

          {/* Right Column - Join Instructions */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Как присоединиться к серверу</h2>
            <p className="text-lg text-muted-foreground">
              Чтобы зайти на сервер нажмите на "Присоединится к Discord". Если приглашение не сработало, то используйте кнопку "Join Discord".
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;