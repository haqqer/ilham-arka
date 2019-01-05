function biodata() {
	let data = {
		"name": "Muhammad Ilham Haqqi",
		"address": "RT 01/RW 01, Desa Banjiran, Kec. Warungasem, Kab. Batang, Jawa Tengah",
		"hobbies": ["coding","browsing","membaca","jalan jalan"],
		"is_married": false,
		"school": {
			"highSchool": "SMK N 1 Kedungwuni, Pekalongan",
			"university": "Universitas Dian Nuswantoro"
		},
		"skills": [
			{
				"skill": "python",
				"description": "Hampir 2 tahun telah mempelajari bahasa pemrograman python, khususnya pada pengembangan web, bisa menggunakan framework flask dan django"
			},
			{
				"skill": "javascript",
				"description": "Mulai belajar mengimplementasikan bahasa yang sedang ngetrend javascript, terlebih untuk pengembangan aplikasi web berbasis RESTful API"
			},
			{
				"skill": "html & css",
				"description": "Memahami dan mengimplementasikan, html dan css, untuk pembuatan layout suatu web, tetapi lebih sering, menggunakan framework dan template yang telah disediakan"
			}
		]
	}
	return data
}

console.log(biodata())
