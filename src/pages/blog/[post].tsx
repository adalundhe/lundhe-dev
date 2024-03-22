import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import {
    Transition,
    ScrollContainer,
    BlogPostContainer
  } from '~/components'
  import React, { forwardRef } from 'react'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'


const knownPaths = ['/blog/not-found']

export const getStaticProps = (async (context) => {
    // MDX text - can be from a local file, database, CMS, fetch, anywhere...

    const post= knownPaths.includes(context.params?.post as string ?? '') ? context.params?.post : 'not-found'
    const res = await fetch(`https://raw.githubusercontent.com/adalundhe/lundhe-dev/main/src/posts/${post}.mdx`)
    
    const mdxText = await res.text()
    const mdxSource = await serialize(mdxText)
    return { props: { mdx: mdxSource } }

}) satisfies GetStaticProps<{
    mdx: MDXRemoteSerializeResult
}>

export async function getStaticPaths() {
    return {
      paths: knownPaths,
      fallback: true
    }
  }

type PostPageRef = React.ForwardedRef<HTMLDivElement>


const Post = ({
    mdx
}: InferGetStaticPropsType<typeof getStaticProps>, ref: PostPageRef) => {


    return (
        <Transition ref={ref}>
            <ScrollContainer>
                <BlogPostContainer mdx={mdx}/>
         
            </ScrollContainer>
        </Transition>
    )
}

export default forwardRef(Post)