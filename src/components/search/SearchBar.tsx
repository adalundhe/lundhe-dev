import { useCallback, useRef } from 'react'
import { BlogSummary, BlogSummaries } from '~/utils/store'
import { useBlogStore, useSearchStore } from '~/utils/store'
import { SortOrderIcon } from './SortOrderIcon'
import { useAnimate } from 'framer-motion'


type SortAndOrder = [
    'date', 'desc'
] | [
    'date', 'asc'
] | [
    'name', 'desc',
] | [
    'name', 'asc'
]

export const SearchBar = () => {

        const {
            filter,
            sort
        } = useBlogStore((state) => ({
            filter: state.filterSummaries,
            sort: state.sortSummaries
        }))

        const sortCycleOrder = useRef<Array<SortAndOrder>>([
            ['date', 'desc'],
            ['date', 'asc'],
            ['name', 'desc'],
            ['name', 'asc']
        ])

        const sortCycleIdx = useRef<number>(0)
        const [scope, animate] = useAnimate()
        const [method, order] = sortCycleOrder.current.at(sortCycleIdx.current ?? 0) as SortAndOrder

        return (
            <div className='flex justify-center w-full py-4'>
                <div className='grid grid-cols-12 w-4/5'>
                    <div className='col-span-5 md:col-span-4 lg:col-span-3'>
                        <input 
                            className='w-full h-full rounded'
                            onChange={(e) => {
                                filter(e.target.value, 'name-and-tag')
                            }} 
                        />
                    </div>
                    <div className='col-span-1 flex items-center justify-start text-[4vmin]'>
                           <div className='px-2 flex justify-start item-center'>
                             <button 
                                ref={scope}
                                type='button'
                                onClick={() => {

                                    animate(scope.current, {
                                        scale: [1, 0.1, 1],
                                        rotate: [0, -360 * 1],
                                    }, {
                                        duration: 0.5,
                                    })

                                    sortCycleIdx.current = (sortCycleIdx.current + 1)%sortCycleOrder.current.length
                                    const nextPair = sortCycleOrder.current.at(
                                        sortCycleIdx.current
                                    ) as SortAndOrder 

                                    const [nextMethod, nextOrder] = nextPair
                                    sort(nextMethod, nextOrder)
                                }}
                                className='px-1'>
                                  <SortOrderIcon order={order} method={method}/>
                            </button>
                           </div>
                        </div>
                </div>
            </div>
        )
}