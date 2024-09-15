# earthquake_app

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run start
```
The application will be available at http://localhost:3000 in your browser.


66130423 ปราชญา ป้องกัน <br>
66130502 ปฏิวัติ สบายยิ่ง <br>
66130409 พิชิต  ทองดำ <br>


<h2><p>หลักการออกแบบและการทำงานใช้ข้อมูลรายงาน Earthquake</p></h2> <br>โดยการแสดงข้อมูลจากการเลือกวันที่ข้อมูลจะถูกเปลี่ยนไปตามวันที่เลือก โดนไม่ได้มีการ Refresh Screen !!! โดยเลือกใช้งาน Server Express รูปแบบ CSR

หลักการคือ Server จะส่งไฟล์ Index.html + Java script ไปให้กับ Client ทำการ Run Java script ที่ Local 

หลักการออกแบบ Quick Step 
  1. ดึงข้อมูลจาก API มาจาก "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-01-02"
  2. จากนั้นทำการ Reture data จาก Loop ออกมาตามวันที่เรา Select date 


### หลักการทำงานของโค้ด

1. **การใช้ `useState` เพื่อจัดการกับสถานะ (State):**
   - `earthquakes`: จัดเก็บข้อมูลแผ่นดินไหวในรูปแบบ array ของวัตถุแต่ละเหตุการณ์แผ่นดินไหวที่ดึงมาจาก API
   - `loading`: จัดเก็บสถานะของการดึงข้อมูลว่าอยู่ระหว่างการโหลดข้อมูลหรือไม่
   - `error`: จัดเก็บข้อความแสดงข้อผิดพลาดหากการดึงข้อมูลล้มเหลว
   - `date`: จัดเก็บวันที่ที่ผู้ใช้เลือกเพื่อดึงข้อมูลแผ่นดินไหว

2. **การใช้ `useEffect` เพื่อเรียกใช้ฟังก์ชันเมื่อ component mount หรือตัวแปร `date` มีการเปลี่ยนแปลง:**
   - เมื่อ component ถูกสร้างขึ้นครั้งแรก หรือเมื่อผู้ใช้เปลี่ยนวันที่ใน input ของชนิด `date` ฟังก์ชัน `fetchEarthquakeData` จะถูกเรียกใช้ เพื่อดึงข้อมูลแผ่นดินไหวจาก API ตามวันที่ที่เลือก

3. **การดึงข้อมูลจาก API:**
   - ฟังก์ชัน `fetchEarthquakeData` จะถูกเรียกใช้ทุกครั้งที่ผู้ใช้เปลี่ยนวันที่ใน input หรือเมื่อ component ถูก mount
   - ใช้ `fetch` เพื่อดึงข้อมูลในรูปแบบ geoJSON จาก API ของ USGS
   - เมื่อได้รับข้อมูลแล้วจะนำข้อมูลไปเก็บในตัวแปร `earthquakes`
   - หากเกิดข้อผิดพลาดระหว่างการดึงข้อมูล จะตั้งค่า `error` เพื่อแสดงข้อความแจ้งข้อผิดพลาดให้ผู้ใช้เห็น

4. **การแสดงผล:**
   - มีการสร้าง input ให้ผู้ใช้เลือกวันที่ที่ต้องการดูข้อมูลแผ่นดินไหว
   - มีการแสดงสถานะต่างๆ เช่น กำลังโหลด (`loading`), ข้อผิดพลาด (`error`), หรือข้อมูลแผ่นดินไหวหากมีการดึงข้อมูลสำเร็จ
   - ข้อมูลแผ่นดินไหวแต่ละรายการจะแสดงสถานที่ (`place`), ขนาดของแผ่นดินไหว (`mag`), และเวลาที่เกิดเหตุการณ์แผ่นดินไหว

### อธิบายแต่ละส่วนของโค้ด:

1. **`useState` และ `useEffect`:**
   - ใช้เพื่อจัดการกับสถานะของข้อมูลต่างๆ ใน component และการทำงานตาม lifecycle ของ component เช่นการดึงข้อมูลเมื่อมีการเปลี่ยนแปลงวันที่

2. **การดึงข้อมูลจาก API:**
   - โค้ดนี้ใช้ `fetch` ในการทำการเรียก HTTP Request เพื่อดึงข้อมูลในรูปแบบ JSON จาก USGS API แล้วแปลงข้อมูลไปใช้ใน React State

3. **การจัดการ Loading และ Error:**
   - มีการจัดการสถานะการโหลด และแสดงข้อความข้อผิดพลาดเมื่อการดึงข้อมูลล้มเหลว เพื่อทำให้ผู้ใช้ทราบสถานะการทำงานของแอป

4. **การแสดงผลข้อมูล:**
   - ใช้การ loop `map` เพื่อนำข้อมูลแต่ละรายการมาแสดงเป็นรายการใน `<ul>` โดยแสดงข้อมูลที่สำคัญ เช่น สถานที่และขนาดของแผ่นดินไหว




