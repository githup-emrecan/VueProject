import { expect } from 'chai'
import  {mutations} from '../store/index'
describe('mutations', () => {
 
    test('cart add test passed', () => {

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
             
           ]
       }

      const newcart ={
        Price: 7.87,
        ProductName : "Türk Kahvesi (100 GR)",
        id : 3,
        images : "https://www.coffeemania.com/epanel/upl/1098/big_t_kahvesi.png",
        pid : 4,
        piece : 2
      }
      const result = mutations.AAddToCart(state ,{ newcart })
      
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


    test('cart add test2 passed', () => {

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
            
          ]
      }

     const newcart ={
      Price : 69.44,
               ProductName : "Mania Blend NEXT (250 GR)",
               id : 3,
               images: "https://www.coffeemania.com/epanel/upl/1084/big_mania_blend_next.png",
               pid : 2,
               piece : 1
     }
     const result = mutations.AAddToCart(state ,{ newcart })
     
     expect(result).to.deep.equal(
       {
           Price : 69.44,
           ProductName : "Mania Blend NEXT (250 GR)",
           id : 3,
           images: "https://www.coffeemania.com/epanel/upl/1084/big_mania_blend_next.png",
           pid : 2,
           piece : 2
         },
        
     )

   })


   test('cart delete test passed', () => {

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

const pid=4
const result = mutations.ddeleteCart(state ,{ pid })

expect(result).to.deep.equal(
 {
     Price : 69.44,
     ProductName : "Mania Blend NEXT (250 GR)",
     id : 3,
     images: "https://www.coffeemania.com/epanel/upl/1084/big_mania_blend_next.png",
     pid : 2,
     piece : 1
   },
   
    
)

})
   
})