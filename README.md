IP 13.213.64.223

ขั้นตอนการทำงาน 
1.ทำการสร้าง Instance AWS
2.ทำการ pull ไฟล์จาก git assign งาน เดิม : sudo git clone https://github.com/dreampratchaya/ct648-assign1.git
3.ทำการสร้างไฟล์ Docker : sudo vi DockerFile
4.ทำการใส่ข้อมูลใน Dockerfile
FROM oven/bun
COPY . .
RUN bun install
CMD ["bun","run","start"]

5.ทำการ build : sudo docker build -t patiwad/bun:web .
6.ทำการ run docker : sudo docker run -it -d -p 80:3000 patiwad/bun:web
7.เปิด IP 13.213.63.223 ตาม Instance AWS
8.up ขึ้น git





