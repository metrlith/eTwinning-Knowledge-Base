import React from 'react';
import { Article } from '../types';

interface ArticleListProps {
    articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
    return (
        <div>
            <h2>Articles</h2>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>
                        <h3>{article.title}</h3>
                        <p>By {article.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleList;