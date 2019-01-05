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
``` Javascript ```

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

## Soal 2
2. Buatlah sebuah function untuk memverifikasi valid password dengan requirements
    - Berjumlah delapan karakter
    - Setidaknya terdapat sebuah huruf kecil, sebuah huruf besar, sebuah angka dan
    sebuah karakter spesial
    Contoh valid password adalah
        - 123Qwer_
        - ssdga_A7
        - SUper&&4

### Jawaban :
``` Javascript ```

``` node soal2.js ```

### Hasil :
``` 
>> password yang diinputkan: L0rd_hacker
>> result : true
```


## Soal 3
3.  Buatlah function untuk mencetak garis miring dari karakter “*”, dengan parameter
panjang kolom
Jika function itu dijalankan:
``` drawLine(8) ```
akan dicetak di layar:

### Jawaban :
``` Python ```

``` python3 soal3.py ```

### Hasil :
``` 

*
  *
    *
      *
        *
          *
            *
```

## Soal 5
4. Sebuah mesin penjual mandiri mempunyai stok uang kembalian 500, 1.000, 2.000,
5.000, 10.000, 20.000 dan 50.000.
Buatlah sebuah function untuk menentukan kembalian yang paling tepat!
Misalnya: Total belanja 15.500, uang yang dimasukkan ke mesin adalah 50.000,
sedangkan kembalian adalah 34.500, sehingga output yang dibutuhkan adalah:
   - selembar 20.000
   - selembar 10.000
   - dua lembar 2.000
   - satu koin 500

### Jawaban :
``` Python ```

``` python3 soal4.py ```

### Hasil :
``` 
Belanja : 15500
Bayar : 50000
selembar 20000
selembar 10000
dua lembar 2000
satu koin 500
```

## Soal 5
5. Buatlah function untuk menghitung jumlah jabat tangan yang terjadi dalam pertemuan
yang dihadiri oleh beberapa orang. Jika setiap orang berjabat tangan dengan semua
yang hadir dan hanya sekali berjabat tangan tangan dengan orang yang sama!
Notice, Gunakan perulangan dan tidak menggunakan rumus matematika n x (n-1)/2
atau ½.n.(n-1) ataupun yang lainnya!
Clue:
    - print(count_handshake(3))
    - result: 3
    - print(count_handshake(6))
    - result: 15

### Jawaban :
``` Python ```

``` python3 soal5.py ```

### Hasil :
``` 
3
15
```

## Soal 6
6. Sebua DB gudang mempunyai tabel sebagai berikut:
- products
    - id, name, category_id(FK categories.id)
- categories
    - id, name
    
A. Isikan data relevan sesuai dengan tabel db yang telah dibuat!

B. Buatlah query SQL sehingga menampilkan data sebagai berikut!
### Jawaban :
``` SQL ```
``` SELECT categories.id, categories.name AS category_name, GROUP_CONCAT(products.name) AS products  FROM products JOIN categories ON categories.id = products.category_id GROUP BY products.category_id ```
### Hasil :
``` 

```

## Soal 7
7. Dari soal nomor 6, buatlah aplikasi sederhana untuk menampilkan hasil dari query ke
layar. Gunakan Html, css, dan twitter bootstrap untuk tampilan. Sedangkan bahasa
pemrograman bebas.

### Jawaban :
``` Javascript ```

### Hasil :
``` 

```