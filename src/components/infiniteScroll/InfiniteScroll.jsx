import {useContext, useEffect, useRef, useState} from "react";
import {searchContext} from "../../context/SearchContext.jsx";
import {Loader} from "../loader/Loader.jsx";

const ITEM_PER_PAGE = 35;

export const InfiniteScroll = ({children, className}) => {
    const {resultList} = useContext(searchContext);
    const lastItemRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    const getFavoriteIds = () => {
        try {
            const favorites = localStorage.getItem('favorites');
            return favorites ? JSON.parse(favorites) : [];
        } catch {
            return [];
        }
    };

    const getSortedArray = (list) => {
        const favoriteIds = getFavoriteIds();

        return [...list].sort((a, b) => {
            const aIsFavorite = favoriteIds.includes(a.id);
            const bIsFavorite = favoriteIds.includes(b.id);

            if (aIsFavorite && !bIsFavorite) return -1;
            if (!aIsFavorite && bIsFavorite) return 1;
            return 0;
        });
    };

    const [array, setArray] = useState(() =>
        resultList.length > 0 ? getSortedArray(resultList).slice(0, ITEM_PER_PAGE) : []
    );

    useEffect(() => {
        const sortedList = getSortedArray(resultList);
        setArray(sortedList.slice(0, ITEM_PER_PAGE));
    }, [resultList]);

    useEffect(() => {
        if (!lastItemRef.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            const isScroll = entry.isIntersecting;
            if (isScroll && !isLoading && array.length < resultList.length) {
                setIsLoading(true);
                setTimeout(() => {
                    const sortedList = getSortedArray(resultList);
                    setArray(prev => sortedList.slice(0, prev.length + ITEM_PER_PAGE));
                    setIsLoading(false);
                }, 300);
            }

        }, {
            root: null,
            rootMargin: "0px 0px 70px 0px",
            threshold: 0.1
        });

        observer.observe(lastItemRef.current);

        return () => {
            observer.disconnect();
        }
    }, [resultList.length, isLoading, array])

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