import React from 'react';

interface ArticleViewProps {
    article: {
        id: number;
        title: string;
        content: string;
        author: string;
    };
}

const ArticleView: React.FC<ArticleViewProps> = ({ article }) => {
    return (
        <div>
            <h1>{article.title}</h1>
            <h2>By {article.author}</h2>
            <p>{article.content}</p>
        </div>
    );
};

export default ArticleView;