
import { ReactElement } from "react";
import { BsSortAlphaDownAlt } from "react-icons/bs";
import { BsSortAlphaUp } from "react-icons/bs";
import { BsSortNumericUp } from "react-icons/bs";
import { BsSortNumericDownAlt } from "react-icons/bs";
import { useSiteSettings } from "~/utils/store";
import { useAnimate } from 'framer-motion'


export const SortOrderIcon = ({
    order,
    method
}: {
    order: 'asc' | 'desc',
    method: 'date' | 'name'
}) => {

    const {
        mode
    } = useSiteSettings((state) => ({
        mode: state.visibilityMode
    }))

    const icons: {
        [Key in 'date' | 'name']: {
            [Key in 'asc' | 'desc']: ReactElement
        }
    } = {
        'date': {
            'asc': <BsSortNumericUp 
                className={mode === 'light' ? 'text-[#212121]' : 'text-[#BDBDBD]'} 
            />,
            'desc': <BsSortNumericDownAlt 
                className={mode === 'light' ? 'text-[#212121]' : 'text-[#BDBDBD]'} 
            />
        },
        'name': {
            'asc': <BsSortAlphaUp 
                className={mode === 'light' ? 'text-[#212121]' : 'text-[#BDBDBD]'} 
            />,
            'desc': <BsSortAlphaDownAlt 
                className={mode === 'light' ? 'text-[#212121]' : 'text-[#BDBDBD]'} 
            />
        }
    }

    return (
        icons[method][order]
    )

}