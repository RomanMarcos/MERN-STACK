import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import queryString from "query-string";

import { getArticle } from '../../services/apiCalls';
import { NotFound } from "../notFound/NotFound.jsx";
import { SingleArticle } from "../singleArticle/SingleArticle.jsx";

export const SearchBoxResult = () => {

    const [result, setResult] = useState([]);
    const { search } = useLocation();
    const query = queryString.parse(search);

    useEffect(() => {
        getArticle(query.search).then((data) => {
            setResult(data.data.results);
        });
    }, [query.search]);

  return (
    <>
    {result.length > 0 ? result.map((article) => {
       return <SingleArticle key={article.id} article={article} />
    }) : ( <NotFound /> )}
    </>
  )
}
