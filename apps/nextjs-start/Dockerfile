FROM node:16.5.0-buster-slim


WORKDIR /opt/deploy
RUN ls -R

COPY /common/deploy .
COPY /apps/nextjs-start/.next apps/nextjs-start/.next

RUN ls

WORKDIR /opt/deploy/apps/nextjs-start

EXPOSE 3000

ENV NODE_ENV production

CMD [ "yarn", "start" ]