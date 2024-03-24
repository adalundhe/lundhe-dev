
import { ModeText, ModeHeader } from '~/components/mdx'  
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

export const BlogPostContainer = ({
    mdx
}: {
    mdx: MDXRemoteSerializeResult
}) => <div className='flex items-center justify-center pb-6 h-full'>
    <div className='w-4/5 h-full'>
       {
        mdx && <MDXRemote  {...mdx} components={{
            'ModeText': ModeText,
            'ModeHeader': ModeHeader
        }}/>
       }
    </div>
</div>