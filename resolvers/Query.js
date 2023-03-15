

exports. Query= {
    hello: () => {
        return ["Dixita", "Vijaykumar", "Patel"];
    },
    products: (parent,{filter},{db}) => {
        let filteredProducts = db.Users;
        console.log(db.reviews);
        if(filter){
            if(filter.onSale === true){
                filteredProducts = filteredProducts.filter((product) => {
                    return product.onSale;
                })           
        }
    }
       
        return filteredProducts;
    },
    product: (parent,{id},{db}) => {
        return db.Users.find((product) => {
             return product.id === id
        });
         
    },
    categories:(parent,args,{db}) => {
        return db.categories
    
    },
    category:(parent, {id}, {db})=>{
       return db.categories.find((category) => {
         return category.id === id
       }); 
    },
}