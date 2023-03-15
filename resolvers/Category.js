exports.Category={
    products:({id: categoryId},{filter},{db}) => {
       const categoryUsers = db.Users.filter((product) => product.categoryId === categoryId);
           let filterCategoryUsers = categoryUsers;
           if(filter){
            if(filter.onSale === true){
              filterCategoryUsers = filterCategoryUsers.filter((product) => {
                    return product.onSale;
                })           
        }
    }
    return filterCategoryUsers ;
      }
 }