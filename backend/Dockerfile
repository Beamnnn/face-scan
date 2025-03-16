# ใช้ Python 3.10
FROM python:3.10

# กำหนด Working Directory
WORKDIR /app

# คัดลอกไฟล์ทั้งหมด
COPY . /app

# ติดตั้ง dependencies
RUN pip install --no-cache-dir -r requirements.txt

# เปิดพอร์ต 8000
EXPOSE 8000

# รัน Backend ด้วย Uvicorn
CMD ["uvicorn", "main:app", "--host=0.0.0.0", "--port=8000"]
