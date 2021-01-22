import { expect } from 'chai'
import  {getters} from '../store/index'
describe('getters', () => {
 
    test('data was passed when users were called', () => {

       const state = {
        users: [
            {
                "Adress" : [ {
                    "PostaKod" : 34000,
                    "adresDescription" : "adrese gelindiğinde Sıemens Adlı bir vir mağaza var.O mağadan sonraki sokaktan girin",
                    "adresText" : "Aydos cad. Ertuğrulgazi Mah. Zemzem Sok. No:9/1",
                    "id" : 0,
                    "il" : "İstanbul",
                    "ilce" : "Pendik",
                    "title" : "Ev Adresi"
                  }, {
                    "PostaKod" : 32152,
                    "adresDescription" : "adrese gelindiğinde Dumankaya Kuleleri Görünecek Resepsiondan girin 5.kat Dumankaya AŞ. ",
                    "adresText" : "Vatan Cad.  Erler Mah. Geçilmez Sok. no:9 kat:5",
                    "id" : 1,
                    "il" : "İstanbul",
                    "ilce" : "Kartal",
                    "title" : "İş Adresi"
                  } ],
                  "BeforeOrders" : [ {
                    "Aid" : 0,
                    "DeliveryDate" : "22.12.2020 Salı",
                    "OrderDate" : "18.12.2020 Cuma",
                    "Price" : 64.81,
                    "ProductName" : "Mania Blend NEXT (250 GR)",
                    "ShipDate" : "19.12.2020 Cumartesi",
                    "Total" : 140,
                    "id" : 0,
                    "imga" : "https://www.coffeemania.com/epanel/upl/1084/big_mania_blend_next.png",
                    "pid" : 1,
                    "piece" : 2
                  }, {
                    "Aid" : 1,
                    "DeliveryDate" : "07.12.2020 Cuma",
                    "OrderDate" : "01.12.2020 Cuma",
                    "Price" : 69.44,
                    "ProductName" : "Türk Kahvesi (100 GR)",
                    "ShipDate" : "03.12.2020 Pazartesi",
                    "Total" : 75,
                    "id" : 1,
                    "imga" : "https://www.coffeemania.com/epanel/upl/1098/big_t_kahvesi.png",
                    "pid" : 3,
                    "piece" : 1
                  } ],
                  "birthdate" : "11.11.1999",
                  "email" : "emre.c.kaldi@gmail.com",
                  "img" : "https://cdn.iconscout.com/icon/premium/png-512-thumb/employee-417-789460.png",
                  "name" : "Emre can",
                  "phone" : "0 543 369 75 23",
                  "surname" : "Kaldı",
                  "uid" : 0

              },
           ]
       }
      const result = getters.getusers(state)
      
      expect(result).to.deep.equal(
        {
            "Adress" : [ {
                "PostaKod" : 34000,
                "adresDescription" : "adrese gelindiğinde Sıemens Adlı bir vir mağaza var.O mağadan sonraki sokaktan girin",
                "adresText" : "Aydos cad. Ertuğrulgazi Mah. Zemzem Sok. No:9/1",
                "id" : 0,
                "il" : "İstanbul",
                "ilce" : "Pendik",
                "title" : "Ev Adresi"
              }, {
                "PostaKod" : 32152,
                "adresDescription" : "adrese gelindiğinde Dumankaya Kuleleri Görünecek Resepsiondan girin 5.kat Dumankaya AŞ. ",
                "adresText" : "Vatan Cad.  Erler Mah. Geçilmez Sok. no:9 kat:5",
                "id" : 1,
                "il" : "İstanbul",
                "ilce" : "Kartal",
                "title" : "İş Adresi"
              } ],
              "BeforeOrders" : [ {
                "Aid" : 0,
                "DeliveryDate" : "22.12.2020 Salı",
                "OrderDate" : "18.12.2020 Cuma",
                "Price" : 64.81,
                "ProductName" : "Mania Blend NEXT (250 GR)",
                "ShipDate" : "19.12.2020 Cumartesi",
                "Total" : 140,
                "id" : 0,
                "imga" : "https://www.coffeemania.com/epanel/upl/1084/big_mania_blend_next.png",
                "pid" : 1,
                "piece" : 2
              }, {
                "Aid" : 1,
                "DeliveryDate" : "07.12.2020 Cuma",
                "OrderDate" : "01.12.2020 Cuma",
                "Price" : 69.44,
                "ProductName" : "Türk Kahvesi (100 GR)",
                "ShipDate" : "03.12.2020 Pazartesi",
                "Total" : 75,
                "id" : 1,
                "imga" : "https://www.coffeemania.com/epanel/upl/1098/big_t_kahvesi.png",
                "pid" : 3,
                "piece" : 1
              } ],
              "birthdate" : "11.11.1999",
              "email" : "emre.c.kaldi@gmail.com",
              "img" : "https://cdn.iconscout.com/icon/premium/png-512-thumb/employee-417-789460.png",
              "name" : "Emre can",
              "phone" : "0 543 369 75 23",
              "surname" : "Kaldı",
              "uid" : 0

          },
      )

    })
})