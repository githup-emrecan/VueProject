import { expect } from 'chai'
import  {mutations} from '../store/index'
describe('mutations', () => {
 
    test('orders add test passed', () => {

       const state = {
        orders: [
            {
                name:'emre can',
                surname:'KALDI',
                tc:'58399514004',
                email:'emre.c.kaldi@gmail.com',
                tel:'58399514004',
                adres:'deneme',
                pkod:34000,
                il:'iladi1',
                ilce:'ilceadi2',
                ProductName:'El Salvador (250 GR)',
                Price :64.81,
                imga :'https://www.coffeemania.com/epanel/upl/1089/big_el_salvador_250gr.png',
                pid : 4,
                piece : 1,
                Total:75,
                DeliveryDate : 'henüz teslim edilmedi',
                OrderDate :'22.01.2021 Pazartesi',
                ShipDate : 'bilinmiyor'

              },
           ]
       } 

      const newcart ={
        name:'emre can',
                surname:'KALDI',
                tc:'58399514004',
                email:'emre.c.kaldi@gmail.com',
                tel:'58399514004',
                adres:'deneme',
                pkod:34000,
                il:'iladi1',
                ilce:'ilceadi2',
                ProductName:'El Salvador (250 GR)',
                Price :64.81,
                imga :'https://www.coffeemania.com/epanel/upl/1089/big_el_salvador_250gr.png',
                pid : 4,
                piece : 1,
                Total:75,
                DeliveryDate : 'henüz teslim edilmedi',
                OrderDate :'22.01.2021 Pazartesi',
                ShipDate : 'bilinmiyor'
     }

     const result = mutations.AAddTheOrder(state ,{ newcart })
      expect(result).to.deep.equal(
        {
            name:'emre can',
            surname:'KALDI',
            tc:'58399514004',
            email:'emre.c.kaldi@gmail.com',
            tel:'58399514004',
            adres:'deneme',
            pkod:34000,
            il:'iladi1',
            ilce:'ilceadi2',
            ProductName:'El Salvador (250 GR)',
            Price :64.81,
            imga :'https://www.coffeemania.com/epanel/upl/1089/big_el_salvador_250gr.png',
            pid : 4,
            piece : 2,
            Total:75,
            DeliveryDate : 'henüz teslim edilmedi',
            OrderDate :'22.01.2021 Pazartesi',
            ShipDate : 'bilinmiyor'

          },
      )

    })


    test('orders add test2 passed', () => {

        const state = {
         orders: [
             {
                 name:'emre can',
                 surname:'KALDI',
                 tc:'58399514004',
                 email:'emre.c.kaldi@gmail.com',
                 tel:'58399514004',
                 adres:'deneme',
                 pkod:34000,
                 il:'iladi1',
                 ilce:'ilceadi2',
                 Price: 7.87,
                 ProductName : "Türk Kahvesi (100 GR)",
                 imga :'https://www.coffeemania.com/epanel/upl/1084/big_mania_blend_next.png',
                 pid :2,
                 piece : 1,
                 Total:75,
                 DeliveryDate : 'henüz teslim edilmedi',
                 OrderDate :'22.01.2021 Pazartesi',
                 ShipDate : 'bilinmiyor'
 
               },
            ]
        } 
 
       const newcart ={
                 name:'emre can',
                 surname:'KALDI',
                 tc:'58399514004',
                 email:'emre.c.kaldi@gmail.com',
                 tel:'58399514004',
                 adres:'deneme2',
                 pkod:34000,
                 il:'iladi1',
                 ilce:'ilceadi2',
                 ProductName:'El Salvador (250 GR)',
                 Price :64.81,
                 imga :'https://www.coffeemania.com/epanel/upl/1089/big_el_salvador_250gr.png',
                 pid : 4,
                 piece : 1,
                 Total=75,
                 DeliveryDate :'henüz teslim edilmedi',
                 OrderDate :'22.01.2021 Pazartesi',
                 ShipDate :'bilinmiyor'
      }
 
      const result = mutations.AAddTheOrder(state ,{ newcart })
       expect(result).to.deep.equal(
        {
            name:'emre can',
            surname:'KALDI',
            tc:'58399514004',
            email:'emre.c.kaldi@gmail.com',
            tel:'58399514004',
            adres:'deneme',
            pkod:34000,
            il:'iladi1',
            ilce:'ilceadi2',
            Price: 7.87,
            ProductName : "Türk Kahvesi (100 GR)",
                 imga :'https://www.coffeemania.com/epanel/upl/1084/big_mania_blend_next.png',
                 pid :2,
                 piece : 1,
                 Total:75,
                 DeliveryDate : 'henüz teslim edilmedi',
                 OrderDate :'22.01.2021 Pazartesi',
                 ShipDate : 'bilinmiyor'

          },
          {
            name:'emre can',
            surname:'KALDI',
            tc:'58399514004',
            email:'emre.c.kaldi@gmail.com',
            tel:'58399514004',
            adres:'deneme2',
            pkod:34000,
            il:'iladi1',
            ilce:'ilceadi2',
            ProductName:'El Salvador (250 GR)',
            Price :64.81,
            imga :'https://www.coffeemania.com/epanel/upl/1089/big_el_salvador_250gr.png',
            pid : 4,
            piece : 1,
            Total=75,
            DeliveryDate :'henüz teslim edilmedi',
            OrderDate :'22.01.2021 Pazartesi',
            ShipDate :'bilinmiyor'
 }
       )
 
     })


})