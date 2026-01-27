FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/site.conf
COPY index.html /usr/share/nginx/html/
COPY favicon.ico /usr/share/nginx/html/
COPY favicon.png /usr/share/nginx/html/
COPY placeholder.svg /usr/share/nginx/html/
COPY robots.txt /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
EXPOSE 8080
