

exports. Query= {
    hello: () => {
        return ["Dixita", "Vijaykumar", "Patel"];
    },
    products: (parent,{filter},{Users}) => {
        let filteredProducts = Users;
       
            if(filter.onSale === true){
                filteredProducts = filteredProducts.filter((product) => {
                    return product.onSale;
                })           
        }
       
        return filteredProducts;
    },
    product: (parent,{id},{Users}) => {
        return Users.find((product) => {
             return product.id === id
        });
         
    },
    categories:(parent,args,{categories}) => {
        return categories
    
    },
    category:(parent, {id}, {categories})=>{
       return categories.find((category) => {
         return category.id === id
       }); 
    },
}