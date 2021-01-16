import { expect } from 'chai'
import  {getters} from '../store/index'
describe('getters', () => {
 
    test('When id is given, that product passed the coming test.', () => {

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
              },
              {
                Price : 7.87,
                ProductName: "Türk Kahvesi (100 GR)",
                id: 4,
                images: "https://www.coffeemania.com/epanel/upl/1098/big_t_kahvesi.png",
                images2 : "https://www.coffeemania.com/epanel/upl/1098/big_WhatsApp%20Image%202020-09-14%20at%2011.39.06.jpeg",
                isSlide : 1,
                kdvPrice : "8.50"
              }, {
                Price: 64.81,
                ProductName : "El Salvador (250 GR)",
                id : 5,
                images : "https://www.coffeemania.com/epanel/upl/1089/big_el_salvador_250gr.png",
                images2 : "",
                isSlide : 0,
                kdvPrice : "70.00"
              }
           ]
       }

       const id =1;
      const result = getters.getProductById(id)
      
      expect(result).to.deep.equal(
        {
            Price : 64.81,
            ProductName : "Colombia (250 GR)",
            id : 1,
            images : "https://www.coffeemania.com/epanel/upl/1096/big_colombia_250gr.png",
            images2 : " ",
            isSlide : 0,
            kdvPrice : "70.00"
         }
      )

    })


 const testid =[1,2,3,4,5]
     testid.forEach(products => {
        test('When'+products+ ' id is given, that product passed the coming test.', () => {

        const result = getters.getProductById(products)
        expect(result).to.deep.equal()

        })

     })


     test('When the category is given, the fiter passed the category test.', () => {

        const state = {
            products: [
              {
                 Price : 64.81,
                 ProductName : "Colombia (250 GR)",
                 id : 1,
                 images : "https://www.coffeemania.com/epanel/upl/1096/big_colombia_250gr.png",
                 images2 : " ",
                 isSlide : 0,
                 kdvPrice : "70.00",
                 category: "populer"
              },
              {
                 Price : 69.44,
                 ProductName : "Mania Blend NEXT (250 GR)",
                 id : 2,
                 images : "https://www.coffeemania.com/epanel/upl/1084/big_mania_blend_next.png",
                 images2 : "",
                 isSlide : 0,
                 kdvPrice : "75.00",
                 category: "populer"
               },
               {
                 Price : 69.44,
                 ProductName : "Ethiopia (250 GR)",
                 id : 3,
                 images : "https://www.coffeemania.com/epanel/upl/1093/big_ethiopia_250gr.png",
                 images2 : " ",
                 isSlide : 0,
                 kdvPrice : "75.00",
                 category: "kavhe"
               },
               {
                 Price : 7.87,
                 ProductName: "Türk Kahvesi (100 GR)",
                 id: 4,
                 images: "https://www.coffeemania.com/epanel/upl/1098/big_t_kahvesi.png",
                 images2 : "https://www.coffeemania.com/epanel/upl/1098/big_WhatsApp%20Image%202020-09-14%20at%2011.39.06.jpeg",
                 isSlide : 1,
                 kdvPrice : "8.50",
                 category: "kavhe"
               }, {
                 Price: 64.81,
                 ProductName : "El Salvador (250 GR)",
                 id : 5,
                 images : "https://www.coffeemania.com/epanel/upl/1089/big_el_salvador_250gr.png",
                 images2 : "",
                 isSlide : 0,
                 kdvPrice : "70.00",
                 category: "populer"
               }
            ]
        }
 
        const filterCategory ='populer';
       const result = getters.filteredProducts(state, { filterCategory })
       
       expect(result).to.deep.equal(
        {
            Price : 64.81,
            ProductName : "Colombia (250 GR)",
            id : 1,
            images : "https://www.coffeemania.com/epanel/upl/1096/big_colombia_250gr.png",
            images2 : " ",
            isSlide : 0,
            kdvPrice : "70.00",
            category: "populer"
         },
         {
            Price : 69.44,
            ProductName : "Mania Blend NEXT (250 GR)",
            id : 2,
            images : "https://www.coffeemania.com/epanel/upl/1084/big_mania_blend_next.png",
            images2 : "",
            isSlide : 0,
            kdvPrice : "75.00",
            category: "populer"
          },
          {
            Price: 64.81,
            ProductName : "El Salvador (250 GR)",
            id : 5,
            images : "https://www.coffeemania.com/epanel/upl/1089/big_el_salvador_250gr.png",
            images2 : "",
            isSlide : 0,
            kdvPrice : "70.00",
            category: "populer"
          }
       )
 
     })

     test('When the isslide is given, the fiter passed the category test.', () => {

        const state = {
            products: [
              {
                 Price : 64.81,
                 ProductName : "Colombia (250 GR)",
                 id : 1,
                 images : "https://www.coffeemania.com/epanel/upl/1096/big_colombia_250gr.png",
                 images2 : " ",
                 isSlide : 0,
                 kdvPrice : "70.00",
                 category: "populer"
              },
              {
                 Price : 69.44,
                 ProductName : "Mania Blend NEXT (250 GR)",
                 id : 2,
                 images : "https://www.coffeemania.com/epanel/upl/1084/big_mania_blend_next.png",
                 images2 : "",
                 isSlide : 0,
                 kdvPrice : "75.00",
                 category: "populer"
               },
               {
                 Price : 69.44,
                 ProductName : "Ethiopia (250 GR)",
                 id : 3,
                 images : "https://www.coffeemania.com/epanel/upl/1093/big_ethiopia_250gr.png",
                 images2 : " ",
                 isSlide : 0,
                 kdvPrice : "75.00",
                 category: "kavhe"
               },
               {
                 Price : 7.87,
                 ProductName: "Türk Kahvesi (100 GR)",
                 id: 4,
                 images: "https://www.coffeemania.com/epanel/upl/1098/big_t_kahvesi.png",
                 images2 : "https://www.coffeemania.com/epanel/upl/1098/big_WhatsApp%20Image%202020-09-14%20at%2011.39.06.jpeg",
                 isSlide : 1,
                 kdvPrice : "8.50",
                 category: "kavhe"
               }, {
                 Price: 64.81,
                 ProductName : "El Salvador (250 GR)",
                 id : 5,
                 images : "https://www.coffeemania.com/epanel/upl/1089/big_el_salvador_250gr.png",
                 images2 : "",
                 isSlide : 0,
                 kdvPrice : "70.00",
                 category: "populer"
               }
            ]
        }
 
        const filterisSlide =1;
       const result = getters.filteredisSlideProducts(state, { filterisSlide })
       
       expect(result).to.deep.equal(
        {
            Price : 7.87,
            ProductName: "Türk Kahvesi (100 GR)",
            id: 4,
            images: "https://www.coffeemania.com/epanel/upl/1098/big_t_kahvesi.png",
            images2 : "https://www.coffeemania.com/epanel/upl/1098/big_WhatsApp%20Image%202020-09-14%20at%2011.39.06.jpeg",
            isSlide : 1,
            kdvPrice : "8.50",
            category: "kavhe"
          }
       )
 
     })
   

     test('When the price is given, the fiter passed the category test.', () => {

        const state = {
            products: [
              {
                 Price : 64.81,
                 ProductName : "Colombia (250 GR)",
                 id : 1,
                 images : "https://www.coffeemania.com/epanel/upl/1096/big_colombia_250gr.png",
                 images2 : " ",
                 isSlide : 0,
                 kdvPrice : "70.00",
                 category: "populer"
              },
              {
                 Price : 69.44,
                 ProductName : "Mania Blend NEXT (250 GR)",
                 id : 2,
                 images : "https://www.coffeemania.com/epanel/upl/1084/big_mania_blend_next.png",
                 images2 : "",
                 isSlide : 0,
                 kdvPrice : "75.00",
                 category: "populer"
               },
               {
                 Price : 69.44,
                 ProductName : "Ethiopia (250 GR)",
                 id : 3,
                 images : "https://www.coffeemania.com/epanel/upl/1093/big_ethiopia_250gr.png",
                 images2 : " ",
                 isSlide : 0,
                 kdvPrice : "75.00",
                 category: "kavhe"
               },
               {
                 Price : 7.87,
                 ProductName: "Türk Kahvesi (100 GR)",
                 id: 4,
                 images: "https://www.coffeemania.com/epanel/upl/1098/big_t_kahvesi.png",
                 images2 : "https://www.coffeemania.com/epanel/upl/1098/big_WhatsApp%20Image%202020-09-14%20at%2011.39.06.jpeg",
                 isSlide : 1,
                 kdvPrice : "8.50",
                 category: "kavhe"
               }, {
                 Price: 64.81,
                 ProductName : "El Salvador (250 GR)",
                 id : 5,
                 images : "https://www.coffeemania.com/epanel/upl/1089/big_el_salvador_250gr.png",
                 images2 : "",
                 isSlide : 0,
                 kdvPrice : "70.00",
                 category: "populer"
               }
            ]
        }
 
        const filterPrice =7.87;
       const result = getters.filteredPriceProducts(state, { filterPrice })
       
       expect(result).to.deep.equal(
        {
            Price : 7.87,
            ProductName: "Türk Kahvesi (100 GR)",
            id: 4,
            images: "https://www.coffeemania.com/epanel/upl/1098/big_t_kahvesi.png",
            images2 : "https://www.coffeemania.com/epanel/upl/1098/big_WhatsApp%20Image%202020-09-14%20at%2011.39.06.jpeg",
            isSlide : 1,
            kdvPrice : "8.50",
            category: "kavhe"
          }
       )
 
     })

})
