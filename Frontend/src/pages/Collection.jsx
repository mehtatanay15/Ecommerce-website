import React, { useContext, useState ,useEffect} from 'react'
import { ShopContext } from '../context/Shopcontext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products} = useContext(ShopContext);

  //for small device we will not show filter option by default instead there is onclick func
  const [showFilter,setShowFilter] = useState(false);
  const [showProducts,setShowProducts] = useState([]);
  const [sortType,setSortType] = useState('relevant');

  // for rendering all products
  useEffect(() => {
    setShowProducts(products)
  }, [])

  //for rendering sorted products
  useEffect(() => {
    sortproduct();
  }, [sortType])



  const sortproduct = () =>{
    let fpcopy = showProducts.slice();
    switch(sortType){
      case 'low-high':
        setShowProducts(fpcopy.sort((a,b)=>(a.price - b.price)));
        break;
        case 'high-low':
          setShowProducts(fpcopy.sort((a,b)=>(b.price - a.price)));
          break;
        default:
          setShowProducts(products);
          break
    }
  }

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
              <input type="checkbox" className='w-3' value={'men'}  />men
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'women'}  />women
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'children'}  />children
            </p>
          </div>
        </div>


        {/* subcategory */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter? '':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'top-wear'}/>top-wear
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'bottom-wear'}/>bottom-wear
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'winter-wear'}/>winter-wear
            </p>
          </div>
        </div>
      </div>


      {/* right side ui */}
      <div className='flex-1'>
        <div className='flex justify-between test-base sm:text-2xl mb-4'>
          <Title text1={'all'} text2={'collection'} />
          {/* sorting */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2  border-gray-300 text-sm px-2'>
            <option value="relevant">sort by:relevant</option>
            <option value="low-high">sort by:low-high</option>
            <option value="high-low">sort by:high-low</option>
          </select>
        </div>

      {/* rendering products */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          showProducts.map((items,index)=>(
            <ProductItem key={index} name={items.name} id={items._id} price={items.price} image={items.image}  />
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Collection
