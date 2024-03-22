import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

export const BlogPostContainer = ({
    mdx
}: {
    mdx: MDXRemoteSerializeResult
}) => <div className='flex justify-center'>
    <div className='w-1/2'>
       {
        mdx && <MDXRemote  {...mdx}/>
       }
    </div>
</div>