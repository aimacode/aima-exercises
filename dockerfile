FROM ruby:2.5.9
WORKDIR /home/app

RUN gem install rails bundler
RUN gem install rails
RUN gem install jekyll bundler

ENTRYPOINT [ "/home/app/start.sh" ]