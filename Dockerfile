FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/* && rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html favicon.ico favicon.png placeholder.svg robots.txt /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
RUN chmod -R 755 /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
