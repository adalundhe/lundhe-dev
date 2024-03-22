import { create } from 'zustand'


interface SiteSettings {
    visibilityMode: 'dark' | 'light';
    setVisibilityMode: (mode: 'dark' | 'light') => void
}


export const useSiteSettings = create<SiteSettings>((set) => ({
    visibilityMode: 'light',
    setVisibilityMode(mode){
        set({
            visibilityMode: mode
        })
    }
}))


interface ScrollSettings {
    scrollDirection: 'up' | 'down' | 'stable';
    animationState: 'active' | 'complete';
    lastPosition: number;
    setScrollDirection: (nextPostition: number) => void
}

export const useScrollSettings = create<ScrollSettings>((set, get) => ({
    scrollDirection: 'stable',
    lastPosition: 0,
    animationState: 'complete',
    setScrollDirection(nextPostition){
        const { lastPosition } = get();
        const absDistance = Math.abs(nextPostition - lastPosition);

        if (nextPostition > lastPosition && absDistance > 100){
            set({
                scrollDirection: 'down',
                lastPosition: nextPostition
            })

            setTimeout(() => set({
                scrollDirection: 'stable',
            }), 1000)

        } else if (nextPostition < lastPosition && absDistance > 100){
            set({
                scrollDirection: 'up',
                lastPosition: nextPostition
            })

            setTimeout(() => set({
                scrollDirection: 'stable',
            }), 1000)

        }

    }
}))