import math

class Hitung:
    def __init__(self, total, bayar):
        self.total = total
        self.bayar = bayar
        self.sisa = 0
    
    def hitung(self):
        sisa = self.kembalian
        sisa = self.bayar - self.total
        return self.kembalian(sisa)
        
    def kembalian(self, kembali):
        lembar = ["dua","tiga","empat","lima","enam","tujuh","delapan","sembilan"]
        uang = [
            [50000,0],
            [20000,0],
            [10000,0],
            [5000,0],
            [2000,0],
            [1000,0],
            [500,0]
        ]
        result = []
        sisa = kembali
        while sisa!=0 :
            for i in range(0, len(uang)):
                if sisa >= uang[i][0]:
                    uang[i][1] = math.floor(sisa / uang[i][0]) 
                    sisa = sisa % uang[i][0]
                    if(uang[i][1]!=1):
                        result.append(lembar[uang[i][1]-2]+" lembar "+str(uang[i][0]))
                    elif(uang[6][1]!=0):
                        result.append("satu koin "+str(uang[i][0]))
                    else:
                        result.append("selembar "+str(uang[i][0]))

        return result


belanja = Hitung(15500, 50000)
print("Belanja : 15500")
print("Bayar : 50000")
print('\n'.join(belanja.hitung()))


