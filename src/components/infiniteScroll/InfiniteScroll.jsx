import {useContext, useEffect, useRef, useState} from "react";
import {searchContext} from "../../context/SearchContext.jsx";
import {Loader} from "../loader/Loader.jsx";

const ITEM_PER_PAGE = 35;

export const InfiniteScroll = ({children, className}) => {
    const {resultList} = useContext(searchContext);
    const lastItemRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [array, setArray] = useState(resultList.slice(0, ITEM_PER_PAGE));

    useEffect(() => {
        if (!lastItemRef.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            const isScroll = entry.isIntersecting;
            if (isScroll && !isLoading && array.length < resultList.length) {
                setIsLoading(true);
                setTimeout(() => {
                    setArray(prev => resultList.slice(0, prev.length + ITEM_PER_PAGE));
                    setIsLoading(false);
                }, 750);
            }

        }, {
            root: null,
            rootMargin: "0px 0px 50px 0px",
            threshold: 0.1
        });

        observer.observe(lastItemRef.current);

        return () => {
            observer.disconnect();
        }
    }, [resultList, isLoading, array])

    return (
        <>
            <ul className={className}>
                {
                    array.map((item, index) =>
                        children(
                            item,
                            index,
                            index === array.length - 1 ? lastItemRef : null
                        )
                    )
                }
            </ul>
            {isLoading && <Loader/>}
        </>
    );
}