cd /home/ubuntu/www
npm run generate
npm run build
sudo chmod 777 prisma prisma/dev.db
pm2 start npm --name "next_app" -- start