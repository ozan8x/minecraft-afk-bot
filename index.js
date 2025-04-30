const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'oyna.aesirmc.com', // Örn: play.craftrise.tc
  port: 25565,           // Genellikle 25565
  username: 'yetims', // Premium Minecraft hesabı
  auth: 'offline' // Hesabın Microsoft ise bu şekilde
});

bot.on('spawn', () => {
  console.log('Bot sunucuya giriş yaptı!');
  // Eğer sunucu cracked ise aşağıdaki satırı aktif et
  // bot.chat('/login 258258');
});

bot.on('end', () => {
  console.log('Bot düştü, yeniden bağlanıyor...');
  setTimeout(() => bot.connect(), 5000);
});
