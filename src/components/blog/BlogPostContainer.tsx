
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

export const BlogPostContainer = ({
    mdx
}: {
    mdx: MDXRemoteSerializeResult
}) => <div className='flex justify-center h-full'>
    <div className='w-4/5 h-full [&>*]:font-serif'>
       {
        mdx && <MDXRemote  {...mdx}/>
       }
    </div>
</div>