import { BlogSummaryCard, BlogSummary } from "./BlogSummaryCard";


export const BlogSummaryList = ({
    summaries
}: {
    summaries: Array<BlogSummary>
}) => {

    return (
        <div className="pb-6 md:pb-10 h-full">
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