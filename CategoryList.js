   import React from 'react';

   function CategoryList({ categories, onSelectCategory }) {
     return (
       <div className="category-list">
         {categories.map(category => (
           <div key={category.id} className="category-item" onClick={() => onSelectCategory(category)}>
             <img src={category.image} alt={category.name} />
             <h3>{category.name}</h3>
           </div>
         ))}
       </div>
     );
   }

   export default CategoryList;
