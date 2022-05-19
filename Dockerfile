FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY deploy/ /usr/share/nginx/html/


# Set working directory to nginx asset directory
ENTRYPOINT ["nginx", "-g", "daemon off;"]