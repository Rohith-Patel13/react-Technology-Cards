// Write your code here.

import './index.css'

const CardItemComponent = props => {
  const {eachProp, imgAl} = props
  const {imgSelf} = imgAl
  const {title, description, imgUrl, className} = eachProp
  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} className={imgSelf} alt={title} />
    </li>
  )
}

export default CardItemComponent
