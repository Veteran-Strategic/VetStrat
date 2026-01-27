FROM joseluisq/static-web-server:2-alpine
COPY index.html /public/
COPY favicon.ico /public/
COPY favicon.png /public/
COPY placeholder.svg /public/
COPY robots.txt /public/
COPY assets /public/assets
ENV SERVER_PORT=8080
ENV SERVER_ROOT=/public
EXPOSE 8080
