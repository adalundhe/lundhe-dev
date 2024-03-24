
import { ModeText } from '~/components/mdx'  
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

export const BlogPostContainer = ({
    mdx
}: {
    mdx: MDXRemoteSerializeResult
}) => <div className='flex justify-center pb-6'>
    <div className='w-4/5 h-full [&>*]:font-serif'>
       {
        mdx && <MDXRemote  {...mdx} components={{
            'ModeText': ModeText
        }}/>
       }
    </div>
</div>