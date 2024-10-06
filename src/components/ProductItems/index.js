import { IoHeartSharp } from "react-icons/io5";
import {Link} from "react-router-dom"

import './index.css'

const ProductItems = props => {
    const {productItems, onClickLike} = props
    const {id, image, title, description, price, isLike} = productItems


    const onClickLikeButton = () => {
        onClickLike(id)
    }

    return (
        <li className='product-main-items-container'>
            <div className='product-items-container'>
                <Link to={`/products/${id}`} className='product-item-image-container  nav-link'>
                    <img src={image} className='product-item-image' alt='Product'/>
                </Link>
                <div className='product-item-details-container'>
                    <Link to={`/products/${id}`} className='product-item-details nav-link'>
                        <h4 className='product-item-title'>{title}</h4>
                        <p className='product-item-description'>{description}</p>
                    </Link>
                    <IoHeartSharp size={20} color={isLike ? 'red' : 'gray'} className='like-icon' onClick={onClickLikeButton}/>
                </div>
                <Link to={`/products/${id}`} className='product-price-and-rating nav-link'>
                    <h4 className='product-item-price'> Rs.{price}</h4>
                </Link>
            </div>
        </li>
    )
}

export default ProductItems