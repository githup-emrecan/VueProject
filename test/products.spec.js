
//import {shollowMount,mount} from '@vue/test-utils'
// import helloword from '../components/header/'

import { expect } from 'chai'
import  {getters} from '../store/index'
describe('getters', () => {
 
    test('data was passed when products were called', () => {

       const state = {
           products: [
             {
                Price : 64.81,
                ProductName : "Colombia (250 GR)",
                id : 1,
                images : "https://www.coffeemania.com/epanel/upl/1096/big_colombia_250gr.png",
                images2 : " ",
                isSlide : 0,
                kdvPrice : "70.00"
             },
             {
                Price : 69.44,
                ProductName : "Mania Blend NEXT (250 GR)",
                id : 2,
                images : "https://www.coffeemania.com/epanel/upl/1084/big_mania_blend_next.png",
                images2 : "",
                isSlide : 0,
                kdvPrice : "75.00"
              },
              {
                Price : 69.44,
                ProductName : "Ethiopia (250 GR)",
                id : 3,
                images : "https://www.coffeemania.com/epanel/upl/1093/big_ethiopia_250gr.png",
                images2 : " ",
                isSlide : 0,
                kdvPrice : "75.00"
              }
           ]
       }
      const result = getters.products(state)
      
      expect(result).to.deep.equal(
        {
            Price : 64.81,
            ProductName : "Colombia (250 GR)",
            id : 1,
            images : "https://www.coffeemania.com/epanel/upl/1096/big_colombia_250gr.png",
            images2 : " ",
            isSlide : 0,
            kdvPrice : "70.00"
         },
         {
            Price : 69.44,
            ProductName : "Mania Blend NEXT (250 GR)",
            id : 2,
            images : "https://www.coffeemania.com/epanel/upl/1084/big_mania_blend_next.png",
            images2 : "",
            isSlide : 0,
            kdvPrice : "75.00"
          },
          {
            Price : 69.44,
            ProductName : "Ethiopia (250 GR)",
            id : 3,
            images : "https://www.coffeemania.com/epanel/upl/1093/big_ethiopia_250gr.png",
            images2 : " ",
            isSlide : 0,
            kdvPrice : "75.00"
          }
      )

    })
})