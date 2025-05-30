export interface Article {
    id: number;
    title: string;
    content: string;
    author: string;
}

export type ArticleListProps = {
    articles: Article[];
};

export type ArticleViewProps = {
    article: Article;
};

export type SearchBarProps = {
    onSearch: (query: string) => void;
};