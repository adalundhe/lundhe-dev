import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { BlogSummary, BlogSummaries, useSiteSettings } from '~/utils/store'
import { useBlogStore, useSearchStore } from '~/utils/store'
import { SortOrderIcon } from './SortOrderIcon'
import { useAnimate } from 'framer-motion'
import { BsSearchHeartFill } from "react-icons/bs";


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

        const {
            mode
          } = useSiteSettings(
            useCallback((state) => ({
                mode: state.visibilityMode
            }), [])
          )

        const inputRef = useRef<HTMLInputElement>(null)
        const pressedKeys= useRef<string[]>([])

        const keyDownHandler = useCallback((ev: KeyboardEvent) => {
                    
            if (
                !pressedKeys.current?.includes(ev.key)
                && (
                    ev.key === 'Meta' || ev.key === 'k'
                )
            ){
                pressedKeys.current.push(ev.key)
            }

            if (
                pressedKeys.current.at(0) === 'Meta' &&
                pressedKeys.current.at(1) === 'k'
            ){
                inputRef.current?.focus()
            }

            return
        }, [])

        const keyUpHandler = useCallback((ev: KeyboardEvent) => {
            pressedKeys.current = []
            return
        }, [])

        useEffect(() => {
            window.addEventListener(
                "keydown", 
                keyDownHandler, 
                true
            ); 

            window.addEventListener(
                "keyup", 
                keyUpHandler, 
                true
            )
             
            return () => {
                window.removeEventListener(
                    "keydown", 
                    keyDownHandler, 
                    true
                )

                window.removeEventListener(
                    "keyup", 
                    keyUpHandler, 
                    true
                )
            }
        }, [])


        return (
            <div className='flex justify-center w-full py-2'>
                <div className='flex w-4/5 justify-self-start self-start'>
                    <div className='flex justify-self-start self-start'>
                        <div className={`w-2/3 ${mode === 'light' ? '' : 'text-[#9E9E9E]'} flex items-center`}>
                            <input 
                                ref={inputRef}
                                placeholder='search posts ⌘ + K'
                                className={`rounded-sm text-[3vmin] shadow w-full h-full outline-offset-0 focus:outline-2 focus:outline focus:outline-[#29B6F6] ${mode === 'light' ? 'bg-[#E0E0E0]' : 'bg-[#424242] shadow-[#757575]'}`}
                                onChange={(e) => {

                                    const sortPair = sortCycleOrder.current.at(
                                        sortCycleIdx.current
                                    ) as SortAndOrder 

                                    const [sortMethod, sortOrder] = sortPair

                                    filter(
                                        e.target.value, 
                                        'name-and-tag',
                                        sortMethod,
                                        sortOrder
                                    )
                                }} 
                            />
                        </div>
                        <div className='w-fit flex items-center text-[5vmin]'>
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
            </div>
        )
}