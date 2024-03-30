import { create } from 'zustand'


interface SiteSettings {
    visibilityMode: 'dark' | 'light';
    setVisibilityMode: (mode: 'dark' | 'light') => void
}


export const useSiteSettings = create<SiteSettings>((set) => ({
    visibilityMode: 'dark',
    setVisibilityMode(mode){
        set({
            visibilityMode: mode
        })
    }
}))


interface ScrollSettings {
    scrollDirection: 'up' | 'down' | 'stable';
    animationState: 'active' | 'complete';
    lastPosition: number;
    setScrollDirection: (nextPostition: number) => void
}

export const useScrollSettings = create<ScrollSettings>((set, get) => ({
    scrollDirection: 'stable',
    lastPosition: 0,
    animationState: 'complete',
    setScrollDirection(nextPostition){
        const { lastPosition } = get();
        const absDistance = Math.abs(nextPostition - lastPosition);

        if (nextPostition > lastPosition && absDistance > 75){
            set({
                scrollDirection: 'down',
                lastPosition: nextPostition,
                animationState: 'active'
            })

            setTimeout(() => set({
                scrollDirection: 'stable',
                animationState: 'complete'
            }), 1000)

        } else if (nextPostition < lastPosition && absDistance > 75){
            set({
                scrollDirection: 'up',
                lastPosition: nextPostition,
                animationState: 'active'
            })

            setTimeout(() => set({
                scrollDirection: 'stable',
                animationState: 'complete'
            }), 1000)

        }

    }
}))


export type BlogSummary = {
    date: Date;
    summary: string;
    title: string;
    tags: Array<string>;
    slug: string;
}

export type BlogSummaries = Array<BlogSummary>

export type BlogTag = {
    tag: string;
    state: 'active' | 'ready';
}

type BlogStore = {
    postTags: BlogTag[];
    filterMethod: 'name-and-tag' | 'name-only' | 'tag-only';
    sortMethod: 'date' | 'name';
    sortOrder: 'asc' | 'desc';
    summaries: BlogSummaries;
    filteredSummaries: BlogSummaries;
    setPostTagState: (postTag: BlogTag) => void;
    setSummaries: (
        summaries: BlogSummaries
    ) => void;
    filterSummaries: (
        query: string,
        method: 'name-and-tag' | 'name-only' | 'tag-only',
        sortMethod: 'date' | 'name',
        sortOrder: 'asc' | 'desc'
    ) => void;
    sortSummaries: (
        method: 'date' | 'name',
        order: 'asc' | 'desc'
    ) => void;
}

const sortByName = (
    unfiltered: BlogSummaries,
    direction: 'asc' | 'desc'
) => unfiltered.sort((
    postA,
    postB
) => {
    if(postA.slug < postB.slug) { 
        return direction === 'asc' ? -1 : 1 ; 
    }
    
    if(postA.slug > postB.slug) { 
        return direction === 'asc' ? 1 : -1; 
    }

    return 0;
    
})

const sortByDate = (
    unfiltered: BlogSummaries,
    direction: 'asc' | 'desc'
) =>  unfiltered.sort((
    postA,
    postB
) => direction === 'asc' ? postA.date.getTime() - postB.date.getTime() : postB.date.getTime() - postA.date.getTime())

export const useBlogStore = create<BlogStore>((set, get) => ({
    postTags: [],
    filterMethod: 'name-and-tag',
    sortMethod: 'date',
    sortOrder: 'desc',
    summaries: [],
    filteredSummaries: [],
    setPostTagState(postTag: BlogTag){

        const { postTags } = get();
        const tagIdx = postTags.map(postTag => postTag.tag).indexOf(postTag.tag);

        set({
            postTags: postTags.map((tag, idx) => {

                if (tagIdx === idx){
                    return postTag
                }

                tag.state = 'ready'

                return tag


            })
        })

    },
    setSummaries(summaries: BlogSummaries){
        const tags = summaries.reduce((tags, summary) => tags.concat(summary.tags), [] as string[])
        set({
            summaries,
            postTags: [...new Set(tags)].map(
                tag => ({
                    tag,
                    state: 'ready'
                })
            ) as BlogTag[],
            filteredSummaries: summaries
        })
    },
    filterSummaries(
        query, 
        method,
        sortMethod,
        sortOrder
    ){
        const { summaries } = get()

        if (query.length < 1){
            set({
                filteredSummaries: summaries
            })
        }

        const matches: {
            [key: string]: BlogSummary 
        } = {}


       if (method === 'name-and-tag' || method === 'name-only' ){
            summaries.forEach(
                post =>{

                    const hasNameMatch = post.title.toLowerCase().includes(
                        query.trim().toLowerCase()
                    )

                    if (hasNameMatch){
                        matches[post.slug] = post
                    }

                }
            )
       }

       if (method === 'name-and-tag' || method === 'tag-only'){
        summaries.forEach(
                post => {

                    const hasTagMatch = post.tags.filter(
                        tag => tag.toLowerCase().includes(
                            query.trim().toLowerCase()
                        )
                    ).length > 0

                    if (hasTagMatch){
                        matches[post.slug] = post
                    }

                }
            )
        
       }

       const matchedValues = Object.values(matches)

       sortMethod === 'date' ? set({
            filteredSummaries: sortByDate(
                matchedValues,
                sortOrder
            ),
            filterMethod: method
        }) : set({
            filteredSummaries: sortByName(
                matchedValues,
                sortOrder
            )
        })

    },
    sortSummaries(
        method,
        order
    ){
        const { filteredSummaries, summaries } = get()

        method === 'date' ? set({
            summaries: sortByDate(
                summaries,
                order
            ),
            filteredSummaries: sortByDate(
                filteredSummaries,
                order
            ),
            sortMethod: method,
            sortOrder: order
        }) : set({
            summaries: sortByName(
                summaries,
                order
            ),
            filteredSummaries: sortByName(
                filteredSummaries,
                order
            ),
            sortMethod: method,
            sortOrder: order
        })
        
    }
}))


type SearchStore = {
    sortBy: 'date' | 'name';
    sortOrder: 'asc' | 'desc';
    setOrderAndMethod: (
        order: 'asc' | 'desc',
        method: 'date' | 'name'
    ) => void
}

export const useSearchStore = create<SearchStore>((set) => ({
    sortBy: 'date',
    sortOrder: 'desc',
    setOrderAndMethod(
        order,
        method
    ){
        set({
            sortOrder: order,
            sortBy: method
        })
    }
}))