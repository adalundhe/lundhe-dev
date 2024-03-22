
import { useCallback, useEffect, useRef } from "react";
import React, { forwardRef } from 'react'
import Link from "next/link";
import {
    Transition
  } from '~/components'
import { useSiteSettings, useScrollSettings } from "~/utils/store";
import { useAnimate } from "framer-motion";

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

    const {
        scrollDir,
        setScrollDirection
    } = useScrollSettings((state) => ({
        scrollDir: state.scrollDirection,
        setScrollDirection: state.setScrollDirection
    }))

    const [scope, animate] = useAnimate()

    useEffect(() => {

        if (scrollDir === 'stable'){
            animate(scope.current, {
                height: '78vh'
            }, {
                duration: 0.25,
            })
        } else {
            animate(scope.current, {
                height: '90vh'
            }, {
                duration: 0.25
            })
        }

    }, [scrollDir])


    return (
        <Transition ref={ref}>
            <div className="row-span-full overflow-hidden w-full">
                <div 
                    className="overflow-y-scroll h-[78vh]"
                    onScroll={() => {
                        scope.current && setScrollDirection(
                            scope.current.scrollTop + scope.current.clientHeight
                        ) 
                    }}
                    ref={scope}
                >
                    <div 
                        className={`flex justify-center text-[5vmin] font-sans ${mode === 'light' ? 'text-[#212121]' : 'text-[#BDBDBD]'}`}
                    >
                        Hi there!
                    </div>
                    <div className="my-2 w-full"></div>
                    <div className="flex justify-center">
                        <div className="w-3/4 text-[3vmin]">
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
                    <div className="my-8 w-full"></div>
                    <div className="flex justify-center">
                        <div className="w-3/4 text-[3vmin]">
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
                                (including the 
                                <Link 
                                    href={"https://ai.meta.com/research/"}
                                    rel="noopener noreferrer" 
                                    target="_blank"
                                >
                                    FAIR
                                </Link> 
                            
                            and Oculus teams at Meta), including complex Spark deployments, SLURM clusters, and other sophisticated machine learning/AI pipelines and 
                            infrastructure. I&apos;ve also worked on the infrastructure behind serving users the Epic Games Unreal Engine, cloud gaming environments 
                            using Unreal Engine, and Solr/Lucene enterprise search.
                            </div>
                        </div>
                    </div>
                    <div className="my-6 w-full"></div>
                    <div className={`${mode === 'light' ? 'font-sans text-[#212121]' : 'text-[#BDBDBD]'} flex justify-center items-center text-[5vmin]`}>
                        Let&apos;s build together!
                    </div>
                    <div className="my-6 w-full"></div>
                </div>
            </div>
        </Transition>
    )
}



export default forwardRef(About)