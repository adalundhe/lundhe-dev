import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

export const BlogPostContainer = ({
    mdx
}: {
    mdx: MDXRemoteSerializeResult
}) => <div className='flex justify-center h-full'>
    <div className='w-1/2 h-full'>
       {
        mdx && <MDXRemote  {...mdx}/>
       }
    </div>
</div>