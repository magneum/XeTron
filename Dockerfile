FROM kalilinux/kali-rolling
RUN apt update && apt upgrade -y && apt install git -y && apt install python3 -y && apt install python3-pip -y && apt install fonts-symbola && apt install nodejs -y && apt install npm -y && path=%PATH%
RUN git clone https://github.com/Krakinz/XeTron.git
RUN cd XeTron
WORKDIR /XeTron
RUN npm install n
RUN n 16.13.0
CMD node ☆XɛTrση✭.js