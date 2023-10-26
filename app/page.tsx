import Image from 'next/image'
import Products from './components/products/Products'
import Banner from './components/banner/Banner'

export type PageProps = {
  params: {[key: string]: string | string[] | undefined};
  searchParams: {[key: string]: string | string[] | undefined};
}

export default function Home(props: PageProps) {
  console.log(props);
  return (
    <div>
      <Banner/>
      <Products {...props} />
    </div>
  )
}
