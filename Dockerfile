FROM nginxinc/nginx-unprivileged:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html favicon.ico favicon.png placeholder.svg robots.txt /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
