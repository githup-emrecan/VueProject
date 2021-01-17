import { expect } from 'chai'
import  {getters} from '../store/index'
describe('getters', () => {
 
    test('data was passed when cart were called', () => {

       const state = {
           cart: [
            {
                Price : 69.44,
                ProductName : "Mania Blend NEXT (250 GR)",
                id : 3,
                images: "https://www.coffeemania.com/epanel/upl/1084/big_mania_blend_next.png",
                pid : 2,
                piece : 1
              },
              {
                Price: 7.87,
                ProductName : "Türk Kahvesi (100 GR)",
                id : 3,
                images : "https://www.coffeemania.com/epanel/upl/1098/big_t_kahvesi.png",
                pid : 4,
                piece : 2
              }
           ]
       }
      const result = getters.productsInCart(state)
      
      expect(result).to.deep.equal(
        {
            Price : 69.44,
            ProductName : "Mania Blend NEXT (250 GR)",
            id : 3,
            images: "https://www.coffeemania.com/epanel/upl/1084/big_mania_blend_next.png",
            pid : 2,
            piece : 1
          },
          {
            Price: 7.87,
            ProductName : "Türk Kahvesi (100 GR)",
            id : 3,
            images : "https://www.coffeemania.com/epanel/upl/1098/big_t_kahvesi.png",
            pid : 4,
            piece : 2
          }
      )

    })
})