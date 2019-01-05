Bootcamp Arkademy
-----------------

by : Muhammad Ilham Haqqi

Requirement:

    - Nodejs >= v8.11.4
    - Python >= v3.6
    - yarn or npm

## Soal 1
1. Tuliskan sebuah method/function untuk me-return biodata Anda, dengan ketentuan
- name (String)
- address (String)
- hobbies (Array)
- is_married (Boolean)
- school (Obj) with key highSchool, and university
- skills (Array of Obj)
Return value harus berupa JSON

### Jawaban :
``` node soal1.js ```

### Hasil :
``` 
{ name: 'Muhammad Ilham Haqqi',
  address: 'RT 01/RW 01, Desa Banjiran, Kec. Warungasem, Kab. Batang, Jawa Tengah',
  hobbies: [ 'coding', 'browsing', 'membaca', 'jalan jalan' ],
  is_married: false,
  school:
   { highSchool: 'SMK N 1 Kedungwuni, Pekalongan',
     university: 'Universitas Dian Nuswantoro' },
  skills:
   [ { skill: 'python',
       description: 'Hampir 2 tahun telah mempelajari bahasa pemrograman python, khususnya pada pengembangan web, bisa menggunakan framework flask dan django' },
     { skill: 'javascript',
       description: 'Mulai belajar mengimplementasikan bahasa yang sedang ngetrend javascript, terlebih untuk pengembanganaplikasi web berbasis RESTful API' },
     { skill: 'html & css',
       description: 'Memahami dan mengimplementasikan, html dan css, untuk pembuatan layout suatu web, tetapi lebih sering, menggunakan framework dan template yang telah disediakan' } ] }
```
