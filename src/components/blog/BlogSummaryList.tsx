import { useState } from "react";
import { BlogSummaryCard } from "./BlogSummaryCard";
import { BlogSummaries } from "~/utils/store";


export const BlogSummaryList = ({
    summaries
}: {
    summaries: BlogSummaries
}) => {

    return (
        <div className="pt-4 pb-6 md:pb-10 flex flex-col w-full">
            {
                summaries.map((summary, idx) => 
                <div key={`blog-post-${idx}`} className={`flex justify-center w-full ${idx === 0 ? 'mb-3' : 'my-6'}`}>
                    <BlogSummaryCard {...summary} postIdx={idx} />
                </div>
            )
            }
        </div>
    )
}