import flowerEarings from "../images/flowerEarings.jpg"
import ayinSet  from "../images/ayinSet.jpg"
import blackSilverSet from "../images/blackSilverSet.jpeg"
import diamondsSet from "../images/diamondsSet.jpg"
import goldHeartSet from "../images/goldHeartSet.webp"
import goldNecklace from "../images/goldNecklace.jpg"
import goldRingGreenDiamonds from "../images/goldRingGreenDiamonds.jpg"
import goldRings from "../images/goldRings.webp"
import goldSet from "../images/goldSet.jpg"
import silverBracelet from "../images/silverBracelet.jpg"
import silverSet from "../images/silverSet.jpg"
import specialNecklace from "../images/specialNecklace.jpeg"
import { useSelector } from "react-redux"


const initialState=[{id:"1",name:"flower earings",qty:5,image: flowerEarings, price:199,description:"white flower gold earings",qtyInCart:0},
                    {id:"2",name:"ayin set",qty:10,image: ayinSet, price:299,description:"ayin silver neclace and ring",qtyInCart:0},
                    {id:"3",name:"black silver set",qty:15,image: blackSilverSet, price:249,description:"silver necklace and earings with black diamond",qtyInCart:0},
                    {id:"4",name:"diamond set",qty:10,image: diamondsSet, price:899,description:"diamonds necklace, earings and ring",qtyInCart:0},
                    {id:"5",name:"gold heart set",qty:8,image: goldHeartSet, price:399,description:"gold hearts earings and necklace",qtyInCart:0},
                    {id:"6",name:"gold necklace",qty:12,image: goldNecklace, price:129,description:"gold necklace",qtyInCart:0},
                    {id:"7",name:"gold green diamond ring",qty:5,image: goldRingGreenDiamonds, price:339,description:"gold ring with green diamonds",qtyInCart:0},
                    {id:"8",name:"gold rings",qty:18,image: goldRings, price:899,description:"a bunch of gold rings",qtyInCart:0},
                    {id:"9",name:"gold set",qty:5,image: goldSet, price:999,description:"gold bracelet and ring",qtyInCart:0},
                    {id:"10",name:"silver bracelet",qty:25,image: silverBracelet, price:289,description:"silver tennis bracelet",qtyInCart:0},
                    {id:"11",name:"silver set",qty:13,image: silverSet, price:399,description:"silver necklace and earings",qtyInCart:0},
                    {id:"12",name:"special necklace",qty:3,image:specialNecklace, price:3999,description:"special colorful necklace",qtyInCart:0}
                ]
              
 const ProductReducer=(state=initialState, action)=>{
   
    switch(action.type){
        case "DECREASE_QTY":
            {
            const newProducts=[...state]
            newProducts.find((shopItem)=>shopItem.id===action.id).qty-=1
            newProducts.find((shopItem)=>shopItem.id===action.id).qtyInCart+=1
            return newProducts
            }
        case "INCREASE_QTY":
            {
                const newProducts=[...state]
                newProducts.find((shopItem)=>shopItem.id===action.id).qty+=1
                newProducts.find((shopItem)=>shopItem.id===action.id).qtyInCart-=1
                return newProducts
            }
        default:
            return state
    }
}
export default ProductReducer