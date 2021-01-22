import { expect } from 'chai'
import  {getters} from '../store/index'
describe('getters', () => {
 
    test('data was passed when order were called', () => {

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
                ProductName='El Salvador (250 GR)',
                Price =64.81,
                imga ='https://www.coffeemania.com/epanel/upl/1089/big_el_salvador_250gr.png',
                pid = 4,
                piece = 1,
                Total=75,
                DeliveryDate = 'henüz teslim edilmedi',
                OrderDate ='22.01.2021 Pazartesi',
                ShipDate = 'bilinmiyor'

              },
           ]
       }
      const result = getters.Getorders(state)
      
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
            ProductName='El Salvador (250 GR)',
            Price =64.81,
            imga ='https://www.coffeemania.com/epanel/upl/1089/big_el_salvador_250gr.png',
            pid = 4,
            piece = 1,
            Total=75,
            DeliveryDate = 'henüz teslim edilmedi',
            OrderDate ='22.01.2021 Pazartesi',
            ShipDate = 'bilinmiyor'

          },
      )

    })
})