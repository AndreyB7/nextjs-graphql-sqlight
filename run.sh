cd /home/ubuntu/www
sudo chmod 777 prisma prisma/dev.db
pm2 start npm --name "next_app" -- start