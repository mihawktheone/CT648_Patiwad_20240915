IP http://13.213.64.223 <br>

ขั้นตอนการทำงาน <br>
1.ทำการสร้าง Instance AWS <br>
2.ทำการ pull ไฟล์จาก git assign งาน เดิม : sudo git clone https://github.com/dreampratchaya/ct648-assign1.git <br>
3.ทำการสร้างไฟล์ Docker : sudo vi DockerFile <br>
4.ทำการใส่ข้อมูลใน Dockerfile <br>
FROM oven/bun <br>
COPY . . <br>
RUN bun install <br>
CMD ["bun","run","start"] <br>

5.ทำการ build : sudo docker build -t patiwad/bun:web . <br>
6.ทำการ run docker : sudo docker run -it -d -p 80:3000 patiwad/bun:web <br>
7.เปิด IP 13.213.63.223 ตาม Instance AWS <br>
8.up ขึ้น git <br>





