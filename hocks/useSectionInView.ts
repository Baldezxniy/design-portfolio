import {useInView} from "react-intersection-observer";
import {useActiveSectionContext} from "@/context/ActiveSectionContext";
import {useEffect} from "react";
import {TSectionName} from "@/types";

export const useSectionInView = (initSection: TSectionName, threshold: number) => {
    const {ref, inView} = useInView({
        threshold: threshold //0.5
    });
    const {setActiveSection, timeOfLastClick} = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(initSection);
        }
    }, [inView, initSection, setActiveSection, timeOfLastClick])

    return {
        ref
    };
}