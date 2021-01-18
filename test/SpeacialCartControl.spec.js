import { expect } from 'chai'
import  {mutations} from '../store/index'
describe('mutations', () => {
 
    test(' Speacial cart add test passed', () => {

       const state = {
        speacialcart: [
            {
                Price : 7.87,
                ProductName : "Türk Kahvesi (100 GR)",
                id: 3,
                images : "https://www.coffeemania.com/epanel/upl/1098/big_t_kahvesi.png",
                pid : 4,
                piece : 2
              },
             
           ]
       }

      const newcart ={
        Price : 69.44,
        ProductName : "Mania Blend NEXT (250 GR)",
        id : 3,
        images : "https://www.coffeemania.com/epanel/upl/1084/big_mania_blend_next.png",
        pid : 2,
        piece : 1
      }
      const result = mutations.AAddToSpecialCart(state ,{ newcart })
      
      expect(result).to.deep.equal(
        {
            Price : 7.87,
            ProductName : "Türk Kahvesi (100 GR)",
            id: 3,
            images : "https://www.coffeemania.com/epanel/upl/1098/big_t_kahvesi.png",
            pid : 4,
            piece : 2
          },
          {
            Price : 69.44,
            ProductName : "Mania Blend NEXT (250 GR)",
            id : 3,
            images : "https://www.coffeemania.com/epanel/upl/1084/big_mania_blend_next.png",
            pid : 2,
            piece : 1
          }
      )

    })


    test('Speacial cart add test2 passed', () => {

      const state = {
        speacialcart: [
            {
                Price : 7.87,
                ProductName : "Türk Kahvesi (100 GR)",
                id: 3,
                images : "https://www.coffeemania.com/epanel/upl/1098/big_t_kahvesi.png",
                pid : 4,
                piece : 1
              },
            
          ]
      }

     const newcart ={
        Price : 7.87,
        ProductName : "Türk Kahvesi (100 GR)",
        id: 3,
        images : "https://www.coffeemania.com/epanel/upl/1098/big_t_kahvesi.png",
        pid : 4,
        piece : 1
     }
     const result = mutations.AAddToSpecialCart(state ,{ newcart })
     
     expect(result).to.deep.equal(
       {
        Price : 7.87,
        ProductName : "Türk Kahvesi (100 GR)",
        id: 3,
        images : "https://www.coffeemania.com/epanel/upl/1098/big_t_kahvesi.png",
        pid : 4,
        piece : 2
         },
        
     )

   })


   test('Speacial cart delete test passed', () => {

   const state = {
    speacialcart: [
        {
            Price : 7.87,
            ProductName : "Türk Kahvesi (100 GR)",
            id: 3,
            images : "https://www.coffeemania.com/epanel/upl/1098/big_t_kahvesi.png",
            pid : 4,
            piece : 2
          },
          {
            Price : 69.44,
            ProductName : "Mania Blend NEXT (250 GR)",
            id : 3,
            images : "https://www.coffeemania.com/epanel/upl/1084/big_mania_blend_next.png",
            pid : 2,
            piece : 1
          }
      
    ]
}

const pid=2
const result = mutations.deletespeacialCart(state ,{ pid })

expect(result).to.deep.equal(
    {
        Price : 7.87,
        ProductName : "Türk Kahvesi (100 GR)",
        id: 3,
        images : "https://www.coffeemania.com/epanel/upl/1098/big_t_kahvesi.png",
        pid : 4,
        piece : 2
      },
   
    
)

})
   
})