import Rating from './Rating'
import { Link } from 'react-router-dom'
import { Prefetch } from '@layer0/react'

const ListItem = ({ product, prefetchProps = {} }) => {
  return (
    <Link to={product.href}>
      <Prefetch {...prefetchProps}>
        <a>
          <div className="relative flex flex-col items-center">
            <div
              className="pb-2/3 bg-contain bg-center bg-no-repeat h-48 w-48"
              style={{ backgroundImage: `url(${product.picture})` }}
            ></div>
            <p className="text-center lowercase font-bold">{product.name}</p>
            <Rating value={product.rating} />
            <p className="text-center">{product.price}</p>
          </div>
        </a>
      </Prefetch>
    </Link>
  )
}

export default ListItem
