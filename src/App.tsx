import React, { useEffect, useState } from 'react';
import ArticleList from './components/ArticleList';
import SearchBar from './components/SearchBar';
import { Article } from './types';

const App: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    
    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch('/data/articles.json');
            const data = await response.json();
            setArticles(data);
        };
        fetchArticles();
    }, []);

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Knowledge Base</h1>
            <SearchBar onSearch={handleSearch} />
            <ArticleList articles={filteredArticles} />
        </div>
    );
};

export default App;