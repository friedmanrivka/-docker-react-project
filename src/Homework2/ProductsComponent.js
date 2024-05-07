import { useState } from "react"

export default function ProductsComponent()
{
    const [products, setProducts]=useState([
        {Name: "shoes",
        Price: 350},

        {Name: "boots",
        Price: 250},

        {Name: "slides",
        Price: 150}
    ])

    const [productName, setProductName]=useState()
    const [productPrice, setProductPrice]=useState()

    const AddItem=(newItem)=>{
        const newProducts=[...products, newItem]
        setProducts(newProducts)
    }

    const UpdateProduct=(price, index)=>{
        const newProducts=[...products]
        newProducts[index].Price=price
        setProducts(newProducts)
    }

    const DeleteProduct=(i)=>{
        setProducts(currentProducts=>currentProducts.filter((item, index)=>i!==index))
    }

    return (
        <>
        <table class="table table-striped" >
            {products.map((item, index)=>
            (<>
            <tr>

                <td><h3>Product name:{item.Name}</h3></td>
                <td><h3>Product price: {item.Price}</h3></td>
            </tr>
            </>
            ))}
        </table>
        <br></br>
        <p>new product:</p>
        <input placeholder="Product name" onChange={(e)=>setProductName(e.target.value)}></input>
        <input placeholder="Product price" onChange={(e)=>setProductPrice(e.target.value)}></input>
        <button onClick={()=>AddItem({Name: productName, Price: productPrice})}  class="btn btn-secondary">Add Product</button>
        <br></br>
        <p>update product:</p>
        <input placeholder="new price" onChange={(e)=>setProductPrice(e.target.value)}></input>
        <button onClick={()=>UpdateProduct(productPrice,2)} class="btn btn-secondary">Update Product</button>
        <br></br>
        <button onClick={()=>DeleteProduct(0)} class="btn btn-secondary">Delete first product</button>
        </>
    )
}