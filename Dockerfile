FROM nginxinc/nginx-unprivileged:alpine
USER root
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html favicon.ico favicon.png placeholder.svg robots.txt /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
RUN chown -R nginx:nginx /usr/share/nginx/html && chmod -R 755 /usr/share/nginx/html
USER nginx
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
