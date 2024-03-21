
import { useCallback } from "react";
import React, { forwardRef } from 'react'
import Link from "next/link";
import {
    Transition
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
            <div className={`row-span-2 flex justify-center text-[3.5vmin] font-sans ${mode === 'light' ? 'text-[#212121]' : 'text-[#BDBDBD]'}`}>
                Hi there!
            </div>
            <div className="row-span-4 flex justify-center">
                <div className="grid grid-rows-6 w-1/2">
                    <div className={`row-span-1 font-sans text-[2.5vmin] ${mode === 'light' ? 'text-[#212121]' : 'text-[#BDBDBD]'}`}>
                        Who are you?
                    </div>
                    <div className={`row-span-5 font-serif text-[1.5vmin] w-full ${mode === 'light' ? 'text-[#212121]' : 'text-[#BDBDBD]'}`}>
                        <p> I'm a certified shmorgasboard software engineer who excels at building processes, teams, and tooling
                        that solves major pain points for engineering organizations.
                        </p>
                        <br/>
                        <p>
                            With over a decade of proven experience across a variety of domains - from small-town tourisgm to enterprise search and 
                            healthcare - I excel at building libraries, internal services, and infrastructure that helps product-facing developers 
                            get things done more quickly and confidently at any scale. In particular I'm known for building the Python performance 
                            testing framework Hedra, which offers a unique workflow-based approach to performance testing.
                        </p>
                    </div>
                </div>   
            </div>
            <div className="row-span-4 flex justify-center">
                <div className="grid grid-rows-6 w-1/2">
                    <div className={`row-span-1 font-sans text-[2.5vmin] ${mode === 'light' ? 'text-[#212121]' : 'text-[#BDBDBD]'}`}>
                        How do you do it?
                    </div>
                    <div className={`row-span-5 font-serif text-[1.5vmin] w-full ${mode === 'light' ? 'text-[#212121]' : 'text-[#BDBDBD]'}`}>
                        <p>
                            I primarily work in <i>Python</i>, <i>Typescript</i>, <i>C++</i>, and <i>GoLang</i>, but have plentiful experience with other languages like Rust or 
                            Scala. Likewise,  I most frequently work in environments using <i>AWS</i>, <i>Kubernetes</i>, <i>Docker</i>, and either <i>Github</i> or <i>GitLab</i> for CI/CD.
                            I've also built and maintained distributed Google Cloud and Azure environments.
                        </p>
                        <br/> 
                        <div>My DevOps and infrastructure experience includes the development, orchestratation, and maintenance of infrastructure
                        for large organizations (including the <Link 
                            href={"https://ai.meta.com/research/"}
                            rel="noopener noreferrer" 
                            target="_blank"
                        >FAIR</Link> and Oculus teams at Meta),
                        including complex Spark deployments, SLURM clusters, and other sophisticated machine learning/AI pipelines and infrastructure. I've
                        also worked on the infrastructure behind serving users the Epic Games Unreal Engine, cloud gaming environments using Unreal Engine,
                        and Solr/Lucene enterprise search.
                        </div>
                    </div>

                </div>   
            </div>
            <div className="w-full row-span-2"></div>
            <div className={`row-span-4 flex justify-center text-[3vmin] font-sans ${mode === 'light' ? 'text-[#212121]' : 'text-[#BDBDBD]'}`}>
                Let's build together!
            </div>
        </Transition>
    )
}



export default forwardRef(About)