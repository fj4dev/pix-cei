FROM node:14.18

WORKDIR /app
ENV SAPNWRFC_HOME=/usr/local/sap/nwrfcsdk
ENV LD_LIBRARY_PATH=/usr/local/sap/nwrfcsdk/lib

ADD nwrfcsdk /usr/local/sap/nwrfcsdk
COPY nwrfcsdk.conf /etc/ld.so.conf.d/nwrfcsdk.conf
COPY . .


RUN rm /bin/sh && ln -s /bin/bash /bin/sh \
    && chmod 777 /usr/local/bin/docker-entrypoint.sh

RUN npm install
RUN npm run build

CMD NODE_URLS=http://*:$PORT npm start