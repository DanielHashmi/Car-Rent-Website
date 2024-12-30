export const CardQuery = `*[_type == 'card']{
  slug{
    current
  },
  name,
  current_price,
  old_price,
  car_type,
  card_type,
  icons,
  heart,
  image,
}`;

export const CarDetailsQuery = (slug: string) => {
  const data = `*[_type == 'detail_page'&& slug.current == '${slug}']{
  name,
  capacity,
  reviews,
  slug{current},
  car_type,
  desc,
  old_price,
  current_price,
  gasoline,
  steering,
  heart,
  image,
}`
  return data;
}