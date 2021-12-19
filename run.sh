cd /home/ubuntu/www
sudo chmod 777 prisma prisma/dev.db
pm2 stop all
pm2 delete all
pm2 start npm --name "next_app" -- start