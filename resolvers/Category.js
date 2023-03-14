exports.Category={
    products:({id: categoryId},args,{Users}) => {
      return Users.filter((product) => product.categoryId === categoryId);
    }
 }