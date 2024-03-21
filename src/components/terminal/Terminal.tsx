
import { useState, useRef, useCallback } from 'react';
import Terminal, { ColorMode, TerminalOutput } from '@shapes-org/react-terminal-ui';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSiteSettings } from '~/utils/store';


const commandOutputs = [
    `
Ada Lündhé is the lead engineer of the Developer Experience 
team at Datavant, building tooling ranging from distributed 
graph workflow engines to monitoring and infrastructure 
tooling. 🧬

With over a decade of experience building everything from 
web applications and distributed systems to machine 
learning pipelines and test frameworks, Ada aims to build 
ecosystems that makes the hard work of building software 
easy, intuitive, and human 💙.

`,
    `
| PID  | USER | %CPU | %MEM | TIME+     | COMMAND        |
----------------------------------------------------------
| 9845 | ada  | 39.7 | 41.8 | 386:51.55 | build-projects |
| 5681 | ada  | 23.1 | 13.2 | 122:34.09 | daily-run      |
| 9845 | ada  | 22.8 | 22.2 |  86:51.55 | make-music     |
| 9845 | ada  |  6.9 | 10.1 |  31:18.40 | chrome         |
| 9845 | ada  |  6.2 | 11.6 |  12:00.13 | python         |
| 1223 | ada  |  1.3 |  1.1 |   5:13.22 | coffee         |

...

`,
    `
app-templates       dcrx            delta-ts
dev-images          fast-hpack      hedra
lundhe-dev          mkfst           werkflow
werkflow-modules

...

`
]


const writeToConsole = ({
    messages,
    commandOutputs,
    idx,
    sliceEnd,
    setTime,
    setTerminalLineData
}: {
    messages: string[],
    commandOutputs: string[],
    idx: number,
    sliceEnd: number,
    setTime(time: number): void,
    setTerminalLineData(lines: TerminalOutput[]): void
}) => {
    const interval = setInterval(() => {

        const currentMessage = messages[idx];
        
        if (currentMessage && sliceEnd <= currentMessage.length){
            const nextMessage = currentMessage.slice(0, sliceEnd)

            setTerminalLineData([
                <TerminalOutput key={`message-${idx}`}>
                    {nextMessage}
                </TerminalOutput>
            ])
            sliceEnd += 1;
        }
        else {
            setTerminalLineData([
                <TerminalOutput key={`message-${idx}`}>
                {
                    `${currentMessage}
                    ${commandOutputs[idx]}
                    `
                }
            </TerminalOutput>

            ])
            sliceEnd = 0
            clearInterval(interval);
        }
       
        
        setTime(Date.now())
    }, 30);
}

export const AboutTerminal = () => {

    const messages = useRef([
        'whois',
        'top',
        'ls ~/Projects'
    ])

    const currentMessageIdx = useRef(0);
    const sliceEnd = useRef(0);


    const [_, setTime] = useState(Date.now());

    const [terminalLineData, setTerminalLineData] = useState([
        <TerminalOutput key={`message-${currentMessageIdx.current}`}>
        </TerminalOutput>
    ]);
    
    const { ref, inView } = useInView();

    useEffect(() => {
        
        if (inView){

            writeToConsole({
                messages: ["Hi there!"],
                commandOutputs: [""],
                idx: 0,
                sliceEnd: sliceEnd.current,
                setTime,
                setTerminalLineData
    
            })
    
            sliceEnd.current = 0;
            
            const messagesInterval = setInterval(() => {
    
                if (currentMessageIdx.current < messages.current.length){
    
                    
                    writeToConsole({
                        messages: messages.current,
                        commandOutputs,
                        idx: currentMessageIdx.current,
                        sliceEnd: sliceEnd.current,
                        setTime,
                        setTerminalLineData
    
                    })
                    currentMessageIdx.current += 1
                    sliceEnd.current = 0
                    
                }
                else {                  
                    
                    currentMessageIdx.current = 0
                    sliceEnd.current = 0
                }
    
    
            }, 3750)
            
        
            
            return () => {
                clearInterval(messagesInterval);
            };
        }
        

    }, [inView]);

    const {
        mode
    } = useSiteSettings(
        useCallback((state) => ({
            mode: state.visibilityMode
        }), [])
    )


  // Terminal has 100% width by default so it should usually be wrapped in a container div
  return (
    <>
        <div className='col-span-1'></div>
        <div 
            className={
                `w-full h-[65vmin] col-span-10 ${mode === 'light' ? '[&_div]:bg-[#212121]' : '[&_div]:bg-[#BDBDBD]'} flex justify-center`
            } 
            ref={ref}
        >

            <Terminal colorMode={ ColorMode.Dark} onInput={null}>
            
                <TerminalOutput>
                    <div 
                        className={`pl-[4vmin] pr-[2vmin] text-[1.75vmin] h-full w-full ${mode === 'light' ? 'text-[#eeeeee]' : 'text-[#263238]'}`}
                    >
                    {
                        inView ? terminalLineData : "Let's start!"
                    }
                    </div>
                </TerminalOutput>
            </Terminal> 
        </div>
    </>
  )
};