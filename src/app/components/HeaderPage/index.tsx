import { FC } from 'react';
import Link from "next/link"

type Props = {
    title : string;
    urlReturn? : string;
}

export const HeaderPage : FC<Props> = ({ title, urlReturn = '/' } : Props) => {
    return(
        <div className='flex p-3 border-b-2 border-gray-600'>
            <Link href={urlReturn}>Voltar</Link>
            <div className='flex flex-1 flex-colluns justify-center  items-center'>
                <h3 className='text-2xl'>{title}</h3>
            </div>
        </div>
    )
}