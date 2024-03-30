import React, { forwardRef, useEffect } from 'react'
import {
  Transition,
  ScrollContainer,
  BlogSummaryList,
  SearchBar
} from '~/components'
import { useBlogStore } from '~/utils/store'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'


type BlogSummaryData = {
  date: string;
  summary: string;
  title: string;
  tags: Array<string>
  slug: string
}

export const getStaticProps = (async (context) => {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...

  const res = await fetch(`https://raw.githubusercontent.com/adalundhe/lundhe-dev/main/src/posts/index.json`)
  
  const summaries: Array<BlogSummaryData> = await res.json()
  return { props: { summaries } }

}) satisfies GetStaticProps<{
  summaries: Array<BlogSummaryData>
}>

type BlogPageRef = React.ForwardedRef<HTMLDivElement>

const Blog = ({
  summaries
}: InferGetStaticPropsType<typeof getStaticProps>, ref: BlogPageRef) => {

    const {
      tags,
      filtered,
      setSummaries
    } = useBlogStore((state) => ({
      tags: state.postTags,
      filtered: state.filteredSummaries,
      setSummaries: state.setSummaries
    }))

    useEffect(() => {

      setSummaries(summaries.map(summary => ({
        ...summary,
        date: new Date(summary.date)
      })).sort(
        (a,b) => b.date.getTime() - a.date.getTime()
      ))

    }, [summaries, setSummaries])

    return (
        <Transition ref={ref}>
            <ScrollContainer>
              <>
              <SearchBar />
              <BlogSummaryList summaries={filtered} />
              </>
            </ScrollContainer>
        </Transition>
    )
}



export default forwardRef(Blog)