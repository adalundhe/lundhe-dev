import React, { forwardRef } from 'react'
import {
  Transition,
  ScrollContainer,
  BlogSummaryList,
  BlogSummary
} from '~/components'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'


type BlogSummaryData = {
  date: string;
  summary: string;
  title: string;
  tags: Array<string>
}

export const getStaticProps = (async (context) => {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...

  const res = await fetch(`https://raw.githubusercontent.com/adalundhe/lundhe-dev/main/src/posts/index.json`)
  
  const summary: Array<BlogSummaryData> = await res.json()
  return { props: { summaries: summary.map(summary => ({
    ...summary,
    date: new Date(summary.date)
  })) } }

}) satisfies GetStaticProps<{
  summaries: Array<BlogSummary>
}>

type BlogPageRef = React.ForwardedRef<HTMLDivElement>

const Blog = ({
  summaries
}: InferGetStaticPropsType<typeof getStaticProps>, ref: BlogPageRef) => {

    return (
        <Transition ref={ref}>
            <ScrollContainer>
                <BlogSummaryList summaries={summaries} />
            </ScrollContainer>
        </Transition>
    )
}



export default forwardRef(Blog)