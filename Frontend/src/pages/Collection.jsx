import React, { useContext, useState ,useEffect} from 'react'
import { ShopContext } from '../context/Shopcontext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products} = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);

  const[filterProducts,setFilterProducts] = useState([]);
  const[category,setCategory] = useState([]);
  const[subCategory,setSubCategory] = useState([]);


  const toggleCategory = (e) =>{
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value));
    }
    else{
      setCategory(prev => [...prev, e.target.value]);
    }
  }

  const toggleSubCategory = (e) =>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    }
    else{
      setSubCategory(prev => [...prev, e.target.value]);
    }
  }

  const applyFilter = () =>{
    let productCopy = products.slice();

    if(category.length>0){
      productCopy = productCopy.filter(item => category.includes(item.category));
    }
    setFilterProducts(productCopy);
  }

  useEffect(() => {
   setFilterProducts(products)
  }, [])

  useEffect(()=>{
    applyFilter();
  },[category,subCategory])


  
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t pt-10 '>
      {/* filter options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl gap-2 flex items-center cursor-pointer'>filters
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter? 'rotate-90' : '' }`} alt="" />
        </p>
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter? '':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'men'} onChange={toggleCategory} />men
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'women'} onChange={toggleCategory} />women
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'children'} onChange={toggleCategory} />children
            </p>
          </div>
        </div>
        {/* subcategory */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter? '':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'top-wear'}onChange={toggleSubCategory}/>top-wear
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'bottom-wear'}onChange={toggleSubCategory}/>bottom-wear
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'winter-wear'}onChange={toggleSubCategory}/>winter-wear
            </p>
          </div>
        </div>
      </div>
      {/* right side ui */}
      <div className='flex-1'>
        <div className='flex justify-between test-base sm:text-2xl mb-4'>
          <Title text1={'all'} text2={'collection'} />
          {/* sorting */}
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">sort by:relevant</option>
            <option value="low-high">sort by:low-high</option>
            <option value="high-low">sort by:high-low</option>
          </select>
        </div>

      {/* rendering products */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          filterProducts.map((items,index)=>(
            <ProductItem key={index} name={items.name} id={items._id} price={items.price} image={items.image}  />
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Collection
