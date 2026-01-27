FROM joseluisq/static-web-server:2-alpine
COPY dist/index.html /public/
COPY dist/favicon.ico /public/
COPY dist/favicon.png /public/
COPY dist/placeholder.svg /public/
COPY dist/robots.txt /public/
COPY dist/assets /public/assets
ENV SERVER_PORT=8080
ENV SERVER_ROOT=/public
ENV SERVER_FALLBACK_PAGE=/public/index.html
EXPOSE 8080
