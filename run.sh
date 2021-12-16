cd /home/ubuntu/www
npm run build
pm2 start npm --name "next_app" -- start