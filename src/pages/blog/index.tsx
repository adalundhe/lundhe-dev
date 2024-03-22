import React, { forwardRef } from 'react'
import {
  Transition,
  ScrollContainer,
  BlogSummaryList
} from '~/components'
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

    return (
        <Transition ref={ref}>
            <ScrollContainer>
                <BlogSummaryList summaries={
                   summaries.map(summary => ({
                    ...summary,
                    date: new Date(summary.date)
                  }))
                } />
            </ScrollContainer>
        </Transition>
    )
}



export default forwardRef(Blog)