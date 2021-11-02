FROM kalilinux/kali-rolling
RUN apt update && apt upgrade -y && apt install git -y && apt install python3 -y && apt install python3-pip -y && apt install fonts-symbola 
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_16.x | -E bash -
RUN apt-get install nodejs -y
RUN git clone https://github.com/Krakinz/XeTron.git
RUN cd XeTron
WORKDIR /XeTron
RUN npm install 
CMD node ☆XɛTrση✭.js