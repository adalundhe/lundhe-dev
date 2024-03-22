import { BlogSummaryCard, BlogSummary } from "./BlogSummaryCard";


export const BlogSummaryList = () => {

    const summaries: Array<BlogSummary> = [
        {   
            title: 'About Things',
            summary: 'This is the blog content summary.',
            date: new Date(),
            tags: [ 'test', 'tag' ]
        },
        {   
            title: 'About More Things',
            summary: 'This is also the blog content summary.',
            date: new Date(),
            tags: [ 'another', 'tag', 'more' , 'all']
        },

        {   
            title: 'About Things',
            summary: 'This is the blog content summary.',
            date: new Date(),
            tags: [ 'test', 'tag' ]
        },
        {   
            title: 'About More Things',
            summary: 'This is also the blog content summary.',
            date: new Date(),
            tags: [ 'another', 'tag', 'more' ]
        }
    ]

    return (
        <div className="pb-6 md:pb-10">
            {
                summaries.map((summary, idx) => 
                    <div key={`blog-post-${idx}`} className="flex justify-center w-full">
                        <BlogSummaryCard {...summary} postIdx={idx} />
                    </div>
                )
            }
        </div>
    )
}