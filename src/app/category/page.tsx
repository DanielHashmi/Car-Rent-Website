import Button from "@/components/Button"
import Card from "@/components/Card"
import LocationSelector from "@/components/FrontLanding/LocationSelector"
import { client } from "@/sanity/client"
import { CardQuery } from "@/sanity/grok"
import { CARCARD } from "@/types/types"
import Image from "next/image"
import Link from "next/link"

const Category = async () => {
    const carDetails: CARCARD[] = await client.fetch(CardQuery);
    return (
        <div className="flex justify-between ">
            <div className="min-w-72 border-t hidden lg:flex flex-col p-6 gap-6">
                <div className="text-xs opacity-50">TYPE</div>

                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/checkbox.svg' alt="checkbox-icon" width={100} height={100} />
                    Sports <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/checkbox.svg' alt="checkbox-icon" width={100} height={100} />
                    SUV <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/uncheckedbox.svg' alt="checkbox-icon" width={100} height={100} />
                    MPV <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/uncheckedbox.svg' alt="checkbox-icon" width={100} height={100} />
                    Sedan <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/uncheckedbox.svg' alt="checkbox-icon" width={100} height={100} />
                    Coupe <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/uncheckedbox.svg' alt="checkbox-icon" width={100} height={100} />
                    Hatchback <span className="opacity-50">(12)</span>
                </div>

                <div className="text-xs opacity-50">CAPACITY</div>

                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/checkbox.svg' alt="checkbox-icon" width={100} height={100} />
                    2 Person <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/uncheckedbox.svg' alt="checkbox-icon" width={100} height={100} />
                    4 Person <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/uncheckedbox.svg' alt="checkbox-icon" width={100} height={100} />
                    6 Person <span className="opacity-50">(12)</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image className="size-6" src='/checkbox.svg' alt="checkbox-icon" width={100} height={100} />
                    8 Person <span className="opacity-50">(12)</span>
                </div>

                <div className="text-xs opacity-50">PRICE</div>


                <div className="flex gap-2 items-start flex-col">
                    <Image className="w-full" src='/seekbar.svg' alt="checkbox-icon" width={100} height={100} />
                    Max. $100.00
                </div>
            </div>
            <div className="md:px-16 px-6 py-8 bg-[#f6f7f9] w-full">
                <LocationSelector currentPage={'category'} />


                <div className="flex justify-start 2xl:justify-center overflow-hidden">
                    <div className="flex gap-8 py-6  flex-wrap">
                        {carDetails.map((obj, key) => (
                            <Card key={key} data={{
                                card_type: 'mobile-now',
                                name: obj.name,
                                current_price: obj.current_price,
                                image: obj.image,
                                car_type: obj.car_type,
                                heart: obj.heart,
                                icons: obj.icons,
                                old_price: obj.old_price,
                                slug: obj.slug
                            }} />
                        ))}
                        {carDetails.map((obj, key) => (
                            <Card key={key} data={{
                                card_type: 'mobile-now',
                                name: obj.name,
                                current_price: obj.current_price,
                                image: obj.image,
                                car_type: obj.car_type,
                                heart: obj.heart,
                                icons: obj.icons,
                                old_price: obj.old_price,
                                slug: obj.slug
                            }} />
                        ))}
                        {carDetails.map((obj, key) => (
                            <Card key={key} data={{
                                card_type: 'mobile-now',
                                name: obj.name,
                                current_price: obj.current_price,
                                image: obj.image,
                                car_type: obj.car_type,
                                heart: obj.heart,
                                icons: obj.icons,
                                old_price: obj.old_price,
                                slug: obj.slug
                            }} />
                        ))}
                    </div>
                </div>


                <div className="flex justify-center mt-12">
                    <div className="flex w-full justify-center relative max-w-[1308px]">
                    <Link href={'/category'}>
                        <Button text='Show more car' classes='bg-blue-600' />
                    </Link>
                        <div className="text-sm opacity-50 absolute right-0">120 cars</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Category