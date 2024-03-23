
import { useCallback } from "react";
import React, { forwardRef } from 'react'
import {
    Transition,
    ScrollContainer,
    HighlightedHeader
  } from '~/components'
import { useSiteSettings } from "~/utils/store";

type AboutPageProps = {}
type AboutPageRef = React.ForwardedRef<HTMLDivElement>

const About = (_: AboutPageProps, ref: AboutPageRef) => {

    const {
        mode
    } = useSiteSettings(
        useCallback((state) => ({
            mode: state.visibilityMode
        }), [])
    )

    return (
        <Transition ref={ref}>
            <ScrollContainer>
                <>
                    <HighlightedHeader  text="Hi there!"/>
                    <div className="my-2 w-full flex justify-center">
                        <div className={`w-3/4 text-[3vmin] w-3/4 text-[3vmin] ${mode === 'light' ? 'text-[#212121]' : 'text-[#BDBDBD]'}`}>
                            <p className={`font-sans text-[4.5vmin] ${mode === 'light' ? 'text-[#212121]' : 'text-[#BDBDBD]'}`}>
                                    Who are you?
                            </p>
                            <br/>
                            <p> I&apos;m a certified shmorgasboard software engineer who excels at building processes, teams, and tooling
                            that solves major pain points for engineering organizations.
                            </p>
                            <br/>
                            <p>
                                With over a decade of proven experience across a variety of domains - from small-town tourisgm to enterprise search and 
                                healthcare - I excel at building libraries, internal services, and infrastructure that helps product-facing developers 
                                get things done more quickly and confidently at any scale. In particular I&apos;m known for building the Python performance 
                                testing framework Hedra, which offers a unique workflow-based approach to performance testing.
                            </p> 
                        </div> 
                    </div>
                    <div className="my-2 w-full flex justify-center">
                        <div className={`w-3/4 text-[3vmin] ${mode === 'light' ? 'text-[#212121]' : 'text-[#BDBDBD]'}`}>
                            <p className={`font-sans text-[4.5vmin] ${mode === 'light' ? 'text-[#212121]' : 'text-[#BDBDBD]'}`}>
                                How do you do it?
                            </p>
                            <br/>
                            <p>
                                I primarily work in <i>Python</i>, <i>Typescript</i>, <i>C++</i>, and <i>GoLang</i>, but have plentiful experience with other languages like Rust or 
                                Scala. Likewise,  I most frequently work in environments using <i>AWS</i>, <i>Kubernetes</i>, <i>Docker</i>, and either <i>Github</i> or <i>GitLab</i> for CI/CD.
                                I&apos;ve also built and maintained distributed Google Cloud and Azure environments.
                            </p>
                            <br/> 
                            <div>
                                My DevOps and infrastructure experience includes the development, orchestratation, and maintenance of infrastructure for large organizations 
                                (including the FAIR and Oculus teams at Meta), including complex Spark deployments, SLURM clusters, and other sophisticated machine learning/AI pipelines and 
                            infrastructure. I&apos;ve also worked on the infrastructure behind serving users the Epic Games Unreal Engine, cloud gaming environments 
                            using Unreal Engine, and Solr/Lucene enterprise search.
                            </div>
                        </div>
                    </div>
                    <div className={`my-2 py-4 font-sans ${mode === 'light' ? 'text-[#212121]' : 'text-[#BDBDBD]'} flex justify-center items-center text-[5vmin]`}>
                        Let&apos;s build together!
                    </div>
                </>
            </ScrollContainer>
        </Transition>
    )
}



export default forwardRef(About)